import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'
import NotesContext from '../NotesContext'
import { getNotesForFolder } from '../notes-helpers'
import PropTypes from 'prop-types'

export default class NoteListMain extends React.Component {
  static contextType = NotesContext;

  render() {
    const notes = getNotesForFolder(this.context.notes, this.props.match.params.folder_id)
    return (
      <section className='NoteListMain'>
        <ul>
          {notes.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.note_name}
                modified={note.modified}
              />
            </li>
          )}
        </ul>
        <div className='NoteListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-note'
            type='button'
            className='NoteListMain__add-note-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Note
        </CircleButton>
        </div>
      </section>
    )
  }
}

NoteListMain.propTypes = {
  match: PropTypes.object
}

NoteListMain.defaultProps = {
  notes: [],
}
