import { Approval } from 'models';
import { atom, selector } from 'recoil';
import { fetcher } from 'helper';

export const ApprSelector = selector<Approval[]>({
  key: 'Appr',
  get: async () => {
    try {
      const getMe = await fetcher.get({ path: '/approval' });
      return getMe;
    } catch (e) {
      throw e;
    }
  },
});

export const ApprAtom = atom<Approval[]>({
  key: 'ApprAtom',
  default: ApprSelector,
});
