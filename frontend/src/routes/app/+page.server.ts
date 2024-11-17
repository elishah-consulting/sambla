import { JWTService } from '$lib/services/jwt_service';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';
import { PropertyService } from '$lib/services/property_service';

const searchFormSchema = z.object({
  search: z.string(),
});

export const load: PageServerLoad = async ({ request, params, url, cookies }) => {
  // Get JWT
  const jwtService = new JWTService(cookies);
  const access_token = jwtService.get();

  // Retrieve payment methods
  const propertyService = new PropertyService(access_token);
  const { properties, error } = await propertyService.getAll();
  if (error) {
    console.error(error);
  }

  const searchForm = await superValidate(zod(searchFormSchema));

  return { properties, searchForm };
};

export const actions: Actions = {
  search: async ({ request, locals, cookies, params }) => {
    const searchForm = await superValidate(request, zod(searchFormSchema));

    if (!searchForm.valid) {
      return fail(400, { searchForm });
    }

    // Extract form data
    const { search } = searchForm.data;

    // Get JWT
    const jwtService = new JWTService(cookies);
    const access_token = jwtService.get();

    // Retrieve payment methods
    const propertyService = new PropertyService(access_token);
    const { properties, error } = await propertyService.getAll();
    if (error) {
      console.error(error);
    }

    return message(searchForm, { properties });
  },
};
