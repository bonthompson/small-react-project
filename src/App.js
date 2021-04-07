import React from 'react'
import './App.css'
import { CardList } from './components/card-list/cardList'
import { SearchBox } from './components/search-box/searchBox'

// function App () {
//   return (

//   )
// }
class App extends React.Component {
  // class vs function components
  // gets access to state and setState
  constructor () {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }

    this.handleChange = this.handleChange.bind(this)
    // this context being set to use in functions / dont need if using arrow functions bc it is set already
  }

  // mounting = when renders, calls this block of code
  componentDidMount () {
    // returns a promise
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  // handleChange (e) {
  //   this.setState({ searchField: e.target.value })
  // }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render () {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
    // looks like html but actually javascript (JSX)
    // { } are a javascript expression
    // updating the state re renders
    // setState is async (delay)
    // <input type='search' placeholder='Search' onChange={e => this.setState({ searchField: e.target.value }, () => console.log(this.state))} />

      <div className='App'>
      <h1>Monsters</h1>
        <SearchBox
          placeholder='Search'
          handleChange={this.handleChange}
          // handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
