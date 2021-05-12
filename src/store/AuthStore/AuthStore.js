import { makeAutoObservable, runInAction } from 'mobx';
import { computedFn } from 'mobx-utils';
import Cookies from 'js-cookie';

import { AUTH_TOKEN_COOKIE } from '@config/cookie';
import { setDefaultAxiosParam } from '@api';

import service from './api-service';

export default class AuthStore {
  token = 'testtesttest';

  constructor() {
    const token = Cookies.get(AUTH_TOKEN_COOKIE);
    if (token) {
      this.token = token;

      setDefaultAxiosParam('token', token);
    }

    makeAutoObservable(this);
  }

  get isAuthenticated() {
    return Boolean(this.token);
  }

  get apiAuthHeaders() {
    if (this.token) {
      return { token: this.token };
    }

    return null;
  }

  // getNodesById = computedFn((node_id) => {
  //   return this.nodes.get(`${node_id}`);
  // });

  // actions
  async auth(password) {
    const [err, result] = await service.auth({ password });

    if (err) throw err;

    const { token } = result;

    runInAction(() => {
      this.token = token;
    });

    Cookies.set(AUTH_TOKEN_COOKIE, token);

    setDefaultAxiosParam('token', token);

    // window.location.reload();

    return token;
  }

  logout() {
    this.token = null;

    Cookies.remove(AUTH_TOKEN_COOKIE);
  }
}
