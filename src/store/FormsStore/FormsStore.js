import { makeAutoObservable, runInAction } from 'mobx';
import service from './api-service';

export default class FormsStore {
  constructor() {
    makeAutoObservable(this);
  }

  async contact({ name, email, message }) {
    const [err, result] = await service.contact({ name, email, message });

    if (err) throw err;

    return result;
  }
}
