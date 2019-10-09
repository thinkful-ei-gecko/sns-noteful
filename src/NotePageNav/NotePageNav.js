import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import { findNote, findFolder } from '../notes-helpers'
import NotesContext from '../NotesContext'
import './NotePageNav.css'

export default class NotePageNav extends React.Component {
  static contextType = NotesContext;

  render() {
    const note = findNote(this.context.notes, this.props.match.params.note_id);
    const folder = findFolder(this.context.folders, note.folder_id);
    return (
      <div className='NotePageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='NotePageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
      </CircleButton>
        {folder && (
          <h3 className='NotePageNav__folder-name'>
            {folder.folder_name}
          </h3>
        )}
      </div>
    )
  }
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => { }
  }
}
