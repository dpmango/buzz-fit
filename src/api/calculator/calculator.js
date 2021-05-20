import { api, endpoints } from '@api';

export default {
  specialties: () => api.get(endpoints.calculator.specialties),
  // @param Integer ppw (*)
  // @param Integer wpy (*)
  // @param String code (*)
  // @param String email (*) */
  report: (request) =>
    api.post(
      endpoints.calculator.report,
      {
        ...request,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    ),
  // @param
  reportById: (request) => api.get(endpoints.calculator.reportById.replace(':id', request.id)),
};
