import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
import {Player} from "./pages/player.tsx";

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}