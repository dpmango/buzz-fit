import { makeAutoObservable, runInAction } from 'mobx';
import { computedFn } from 'mobx-utils';
import service from './api-service';

export default class CalculatorStore {
  specialtiesList = new Map();
  reportData = {
    Email: null,
    ID: null,
    Profit: null,
    Status: null,
    Timestamp: null,
    Type: null,
  };

  constructor() {
    makeAutoObservable(this);

    this.specialties();
  }

  get getSpecialities() {
    return Array.from(this.specialtiesList.values());
  }

  get isReportReady() {
    return this.getReport.ID;
  }

  get getReport() {
    return this.reportData;
  }

  // getNodesById = computedFn((node_id) => {
  //   return this.nodes.get(`${node_id}`);
  // });

  // actions
  async specialties() {
    const [err, result] = await service.specialties();

    if (err) throw err;

    runInAction(() => {
      result.forEach((spec) => {
        this.specialtiesList.set(`${spec.Code}`, {
          ...spec,
        });
      });
    });

    return result;
  }
  async report({ ppw, wpy, code, email }) {
    const [err, result] = await service.report({ ppw, wpy, code, email });

    if (err) throw err;

    runInAction(() => {
      this.reportData = result;
    });

    return result;
  }
  async reportById({ id }) {
    const [err, result] = await service.reportById({ id });

    if (err) throw err;

    runInAction(() => {
      this.reportData = result;
    });

    return result;
  }
}
