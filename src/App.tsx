import { Provider as ReduxProvider } from "react-redux"
import { TodoList } from "./components/TodoList.tsx"
import { AddTodo } from "./components/AddTodo.tsx"
import { store } from "./store"

export function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  )
}