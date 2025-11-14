import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Layout from './components/Layout.tsx';

function App() {
  document.documentElement.setAttribute("data-bs-theme", "light");
  return (
      <Provider store={store}>
        <Layout/>
      </Provider>

  )
}

export default App
