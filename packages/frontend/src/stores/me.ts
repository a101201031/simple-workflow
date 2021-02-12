import { Me } from 'models';
import { atom, selector } from 'recoil';
import { fetcher } from 'helper';

export const MeSelector = selector<Me>({
  key: 'Me',
  get: async () => {
    try {
      const getMe = await fetcher.get({ path: '/me' });
      return getMe;
    } catch (e) {
      throw e;
    }
  },
});

export const MeAtom = atom<Me>({
  key: 'MeAtom',
  default: MeSelector,
});
