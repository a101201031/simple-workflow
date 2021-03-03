import { atom, selector } from 'recoil';
import { Noti } from 'models';
import { fetcher } from 'helper';

export const NotiSelector = selector<Noti[]>({
  key: 'NotiSelector',
  get: async () => {
    try {
      const getNoti = await fetcher.get({ path: '/noti' });
      return getNoti;
    } catch (e) {
      throw e;
    }
  },
});

export const NotiAtom = atom<Noti[]>({
  key: 'NotiAtom',
  default: NotiSelector,
});
