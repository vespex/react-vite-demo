import { proxy } from 'valtio';

const delay = (val, ms = 1000) =>
  new Promise((reslove) => {
    setTimeout(() => reslove(val), ms);
  });

export const state: any = proxy({
  count: 0,
  input: '',
  request: fetch('/data.json').then((res) => delay(res.json())),
});
