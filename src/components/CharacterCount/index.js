import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCount extends Component {
  state = {character: '', characterList: []}

  onSubmitCharacter = event => {
    event.preventDefault()
    const {character} = this.state

    const trimedCharacter = character.trim()
    if (trimedCharacter !== '') {
      const newCharacterItem = {
        id: uuidv4(),
        text: character,
        length: trimedCharacter.length,
      }
      this.setState(prevState => ({
        characterList: [...prevState.characterList, newCharacterItem],
        character: '',
      }))
    }
  }

  onChangeCharacter = event => {
    this.setState({character: event.target.value})
  }

  render() {
    const {character, characterList} = this.state
    const isListEmpty = characterList.length === 0
    return (
      <div className="character-count-bg-container">
        <div className="character-count-card-container">
          <div className="count-card-container">
            <div className="count-heading-card">
              <h1 className="count-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            {isListEmpty ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-user-input-image"
              />
            ) : (
              <ul className="characters-length-container">
                {characterList.map(each => (
                  <li key={each.id}>
                    <p>
                      {each.text} : {each.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="input-card-container">
            <h1 className="input-count-heading">Character Counter</h1>
            <form className="input-container" onSubmit={this.onSubmitCharacter}>
              <input
                type="text"
                placeholder="Enter the characters here"
                className="input-field"
                value={character}
                onChange={this.onChangeCharacter}
              />
              <button
                className="add-button"
                type="submit"
                onClick={this.onClickAddCharacter}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCount
