import create from 'zustand';

export const todoStore = create(set => ({
  todos: [
    {
      id: Math.floor(Math.random() * 100),
      name: "Refresh React Knowledge",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Learn to use Zustand",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Refactor: Move useState to Zustand",
    },
  ],
  addTodo: 
  (payload) =>
    set(
      produce((draft) => {
        draft.todos.push({
          id: Math.floor(Math.random() * 100),
          name: payload,
        });
      })
    ),
  removeTodo: 
  (payload) =>
    set(
      produce((draft) => {
        const dramaIndex = draft.todos.findIndex((el) => el.id === payload);
        draft.todos.splice(dramaIndex, 1);
      })
    ),
  removeAll: () => set({ todos: [
    {
      id: Math.floor(Math.random() * 100),
      name: "Learn React",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Learn Zustand",
    },
  ] })
}))

export default { todoStore }
