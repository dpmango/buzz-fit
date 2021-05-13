import { ApiService } from '@services';
import { buildCustomApiError, responseMapperAuth, responseMapperList } from '@helpers';
import api from '@api/users';

class AuthService extends ApiService {
  async auth({ email, password }) {
    try {
      const {
        data: { data, error },
      } = await api.login({ email, password });

      if (error === 1) {
        return buildCustomApiError(data);
      }

      return [null, responseMapperAuth(data)];
    } catch (error) {
      this.handleError(error);

      return [error, null];
    }
  }
}

export default new AuthService();
