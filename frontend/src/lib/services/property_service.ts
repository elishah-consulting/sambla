import {
  wrappedAuthFetch,
  wrappedFetch,
  type WrappedFetchRequest,
  type WrappedFetchResponse,
} from './fetch_helper';
import type { Nullable } from '../../types/Nullable';
import type { User } from '../../types/User';
import type { ServerErrorV2 } from '../../types/ServerErrorV2';

export class PropertyService {
  private auth_token?: string;

  constructor(auth_token?: string) {
    this.auth_token = auth_token;
  }

  async getAll(): Promise {
    const request: WrappedFetchRequest = {
      method: 'GET',
      endpoint: '/properties',
    };

    // Execute fetch
    const { body, error } = await wrappedFetch(request);

    // Return response
    return { properties: body, error };
  }
}
