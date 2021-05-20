import { api, endpoints } from '@api';

export default {
  // @param Integer name (*)
  // @param String email (*)
  // @param String message (*)
  contact: (request) =>
    api.post(
      endpoints.forms.contact,
      {
        ...request,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    ),
};
