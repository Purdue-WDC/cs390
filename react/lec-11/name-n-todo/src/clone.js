export function clone(todos) {
  return {completed: [...todos.completed], pending: [...todos.pending]};
}
