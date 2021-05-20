import { ApiService } from '@services';
import api from '@api/forms';

class FormsService extends ApiService {
  async contact(req) {
    try {
      const { data } = await api.contact(req);

      return [null, data];
    } catch (error) {
      this.handleError(error);

      return [error, null];
    }
  }
}

export default new FormsService();
