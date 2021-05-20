import { ApiService } from '@services';
import api from '@api/calculator';

class CalculatorService extends ApiService {
  async specialties() {
    try {
      const { data } = await api.specialties();

      return [null, data];
    } catch (error) {
      this.handleError(error);

      return [error, null];
    }
  }

  async report(req) {
    try {
      const { data } = await api.report(req);

      // if (error === 1) {
      //   return buildCustomApiError(data);
      // }

      return [null, data];
    } catch (error) {
      this.handleError(error);

      return [error, null];
    }
  }

  async reportById(req) {
    try {
      const { data } = await api.reportById(req);

      // if (error === 1) {
      //   return buildCustomApiError(data);
      // }

      return [null, data];
    } catch (error) {
      this.handleError(error);

      return [error, null];
    }
  }
}

export default new CalculatorService();
