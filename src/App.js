import {Component} from 'react'
import logo from './logo.svg';
import './App.css';



class Folder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folderOpen: false
    }
  }

  render() {
    return (
    <div>
      <button onClick={() => this.setState({ folderOpen: !this.state.folderOpen })}>Toggle</button>
      {
        this.state.folderOpen && (
          <ul>
            { this.props.items.map(item => <li>{`Item ${item}`}</li>) }
          </ul>
        )
      }
    </div>
    )
  }
}

function App() {
  const folderItems = [1, 2, 3, 4, 5]

  return (
    <Folder items={folderItems}/>
  );
}

export default App;
