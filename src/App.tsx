import { Content } from './presentation/layout/Content'
import { MainNav } from './presentation/layout/MainNav'
import { Sidebar } from './presentation/layout/Sidebar'
import './presentation/scss/main.scss'

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
