import React, {Component} from "react"

import Writing from "./Writing"
import Note from "./Note"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {id: 0, title: "title1", content: "default1" , editing: false},
        {id: 1, title: "title2", content: "default2" , editing: true},
        {id: 2, title: "title3", content: "default3" , editing: false}
      ]
    }
  }

  save = (writingState) => {
    const {savedNotes} = this.state
    const lastNoteId = savedNotes[savedNotes.length - 1].id

    this.setState({
      savedNotes: [
        ...savedNotes,
        {
          id: lastNoteId + 1,
          title: writingState.title,
          content: writingState.content
        }
      ]
    })
  }

  delete = (index ) => {
    console.log(`${index} will be deleted`)
    const {savedNotes} = this.state
    savedNotes.splice(index, 1)
    this.setState({
      savedNotes: savedNotes
    })
  }

  edit = (index , editing , title , content) =>{
    const {savedNotes} = this.state;
    const editNote = savedNotes.filter(note => note.index == index ? {title : '수정본', content : content, editing : true} : note )
      this.setState({
        savedNotes: [ ...editNote],
      })
    console.log()
    
    
  }

  toggle = (editing) =>{
    const {savedNotes} = this.state;
    this.setState({
      savedNotes : [...savedNotes , {editing : false}]
    })
    
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note, index) => (
            <Note
              toggle={this.toggle}
              edit={this.edit}
              delete={this.delete}
              editing={note.editing}
              title={note.title}
              content={note.content}
              index={index}
              key={note.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
