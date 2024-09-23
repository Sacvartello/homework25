import React, {Component} from 'react'
import Lamp from './components/Lamp';
import Greeting from './components/Greeting';
import Parent from './components/Parent';
class App extends Component{
  constructor(props) {
      super(props)
  }
  render(){
      return(<section>
              <Parent />
            </section>)
  }

}
export default App
