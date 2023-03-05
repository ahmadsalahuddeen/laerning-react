import './App.css'
import {Home} from './components/Home'
import {Message} from './components/message'
import { ParentComponent } from './components/ParentComponent'
function App() {
  return (
    <div className='App'>

      <ParentComponent />
    </div>
  )
}

export default App
