
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './style/index.scss'
import { Layout } from './layout/Layout'
import { Home } from './pages/Home'

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
      </Route>
    </Routes>
  </>
}

export default App