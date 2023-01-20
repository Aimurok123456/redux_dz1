import ColorChange from './hoc/ColorChange'
import ItemComponent from './components/itemComponent'
import './App.css'

function App() {
  const ColorChangeComponent = ColorChange(ItemComponent)

  return (
    <div className="App">
      <ColorChangeComponent/>
    </div>
  )
}

export default App
