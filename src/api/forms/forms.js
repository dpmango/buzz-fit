import { api, endpoints } from '@api';

export default {
  // @param Integer name (*)
  // @param String email (*)
  // @param String message (*)
  contact: (request) => {
    const formData = new FormData();
    formData.append('name', request.name);
    formData.append('email', request.email);
    formData.append('message', request.message);

    return api.post(endpoints.forms.contact, formData);
  },
};
