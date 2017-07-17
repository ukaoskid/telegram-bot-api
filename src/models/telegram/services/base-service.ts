export class BaseService {

  private _token: string;

  get token(): string {
    return this._token;
  }

  set token(token: string) {
    this._token = token;
  }

  constructor(token: string) {
    this._token = token;
  }
}