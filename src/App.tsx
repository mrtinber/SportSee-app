import { Content } from './components/layout/Content'
import { MainNav } from './components/layout/MainNav'
import { Sidebar } from './components/layout/Sidebar'
import './scss/main.scss'

function App() {
  return (
    <>
      <MainNav />
      <main>
        <Sidebar />
        <Content />
      </main>
    </>
  )
}

export default App
