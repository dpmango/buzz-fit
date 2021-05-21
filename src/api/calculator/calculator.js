import { api, endpoints } from '@api';

export default {
  specialties: () => api.get(endpoints.calculator.specialties),
  // @param Integer ppw (*)
  // @param Integer wpy (*)
  // @param String code (*)
  // @param String email (*) */
  report: (request) => {
    const formData = new FormData();
    formData.append('ppw', request.ppw);
    formData.append('wpy', request.wpy);
    formData.append('code', request.code);
    formData.append('email', request.email);

    api.post(endpoints.calculator.report, formData);
  },
  // @param
  reportById: (request) => api.get(endpoints.calculator.reportById.replace(':id', request.id)),
};
