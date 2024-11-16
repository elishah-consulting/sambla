import type { Nullable } from '../../types/Nullable';
import { ServerErrorV2 } from '../../types/ServerErrorV2';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

// const PUBLIC_BACKEND_URL = 'https://Tupertino-backend.fly.dev/api';

interface stringMap {
  [Symbol.iterator](): IterableIterator<[string, string]>;
  [key: string]: string;
}

export type WrappedFetchRequest = {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  endpoint: Nullable<string>;
  baseURL?: Nullable<string>;
  headers?: Nullable<Headers>;
  body?: Nullable<any>;
};

export type WrappedFetchResponse = {
  error: Nullable<ServerErrorV2>;
  body: Nullable<any>;
};

export const wrappedAuthFetch = async (
  request: WrappedFetchRequest,
  auth_token: Nullable<string>,
): Promise<WrappedFetchResponse> => {
  if (!request.headers) {
    request.headers = new Headers();
  }

  request.headers.append('Authorization', `Bearer ${auth_token}`);
  return await wrappedFetch(request);
};

// This is a wrapper around fetch that adds some error handling and
// returns a promise that resolves to a response object.
export const wrappedFetch = async (request: WrappedFetchRequest): Promise<WrappedFetchResponse> => {
  try {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (request.headers) {
      for (const [key, value] of request.headers) {
        headers.append(key, value);
      }
    }

    // build the URL
    let url = PUBLIC_BACKEND_URL;
    if (request.baseURL) {
      url = request.baseURL;
    }

    if (request.endpoint) {
      url += request.endpoint;
    }

    const options: RequestInit = {
      method: request.method,
      headers,
      body: JSON.stringify(request.body),
      redirect: 'follow',
    };

    const res: Response = await fetch(url, options);
    const resJson = await res.json();

    if (res.status === 401) {
      const response: WrappedFetchResponse = {
        error: new ServerErrorV2(
          `unauthorized`,
          `Unauthorized.  Please login or create a new user.`,
        ),
        body: null,
      };
      return response;
    }

    if (res.status < 200 || res.status >= 300) {
      const response: WrappedFetchResponse = {
        error: new ServerErrorV2(`general_error`, `[${res.status}] ${resJson.message}`),
        body: null,
      };
      return response;
    }

    const response: WrappedFetchResponse = {
      error: null,
      body: resJson,
    };

    // Decorate with error if found
    const { error, failure_code } = resJson;
    if (failure_code || error) {
      response.error = new ServerErrorV2(failure_code, error);
    }
    return response;
  } catch (e) {
    // Decorate with error if found
    const response: WrappedFetchResponse = {
      error: new ServerErrorV2(`general_error`, `Failed to fetch. err=${e}`),
      body: null,
    };

    return response;
  }
};
