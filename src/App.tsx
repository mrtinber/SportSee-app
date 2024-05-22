import { Content } from './components/Content'
import { MainNav } from './components/MainNav'
import { Sidebar } from './components/Sidebar'
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
