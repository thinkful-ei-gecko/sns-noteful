import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddFolder extends Component {
    
    state = {
        folder_name: null,
        touched: false
    }

    validateName(){
        if(!this.state.folder_name){
            return ("Folder must have a name");
        }
    }

    updateFolderName(name) {
        name=name.trim();
        this.setState({ folder_name: name })
    }

    handleSubmit = event => {
        event.preventDefault();
        let name = {folder_name: this.state.folder_name};

        fetch('http://localhost:8000/api/folders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(name)
        })
            .then(res => res.json())
            .then(data => {
                this.props.renderFolder();
                this.props.history.push('/');
            })
    }

    render() {
        return (
            <form className="add-folder-form" onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="add-folder">
                    <p className="error">{this.validateName()}</p> 
                    <input type="text" id="add-folder" placeholder="new folder name" onChange={(e) => this.updateFolderName(e.target.value)} 
                    required minLength='3' maxLength='10'/>
                </label>
                <button type="submit" className="add-folder-submit" >Add folder</button>
            </form>
        )
    }
}

AddFolder.propTypes = {
    renderFolder: PropTypes.func,
    history: PropTypes.object,
}