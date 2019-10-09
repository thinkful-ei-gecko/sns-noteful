import React from 'react'
import { withRouter } from 'react-router';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import NotesContext from '../NotesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Note.css'

class Note extends React.Component {


  static contextType = NotesContext;

  handleDelete(noteId, callback) {
    fetch(`http://localhost:8000/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
          'content-type': 'application/json'
      },
    })
    .then(data => {
      console.log(this.props.path)
      if (this.props.path === '/api/notes/:note_id') {
        this.props.history.push('/')
      };

      callback(noteId);
    })
  }


  render() {
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/api/notes/${this.props.id}`}>
            {this.props.name}
          </Link>
        </h2>
        <button 
          className='Note__delete' 
          type='button' 
          onClick={(id) => this.handleDelete(this.props.id, this.context.deleteNote)}>
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
      </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
          {' '}
            <span className='Date'>
              {format(this.props.modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

Note.propTypes = {
  path: PropTypes.string,
  history: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.number,
  modified: PropTypes.string,
}

export default Note;