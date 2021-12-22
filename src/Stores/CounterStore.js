import create from 'zustand';

export const counterStore = create(set => ({
  counter: 0,
  setCounter: (num) => set(state => ({ counter: num})),
  removeAll: () => set({ counter: 0})
}))

export default { counterStore }