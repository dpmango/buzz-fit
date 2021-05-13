import { api, endpoints } from '@api';

export default {
  login: (req) =>
    api.post(endpoints.auth.base, {
      ...request,
    }),
};
