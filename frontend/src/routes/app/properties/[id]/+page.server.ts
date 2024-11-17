import { JWTService } from '$lib/services/jwt_service';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import type { PageServerLoad } from './$types';

const searchFormSchema = z.object({
  search: z.string(),
});

export const load: PageServerLoad = async ({ request, params, url, cookies }) => {
  const id = params.id;
  // Get JWT
  const jwtService = new JWTService(cookies);
  const access_token = jwtService.get();

  const properties: any[] = [];

  const searchForm = await superValidate(zod(searchFormSchema));

  return { id, properties, searchForm };
};
