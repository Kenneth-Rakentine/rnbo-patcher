import React, { Component } from 'react';
import axios from 'axios';

class WebFrame extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      title: '',
      collectionName: 'my_rnbo_patches',
    };
    this.myIframeRef = React.createRef();
  }

  handleInputChange = (event) => {
    this.setState({ url: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.myIframeRef.current.src = this.state.url;
  }

  handleSave = async (event) => {
    event.preventDefault();
    const { userId } = this.props;
    const { url, title, collectionName } = this.state;
  
    try {
     //check whether collection already exists
      const collectionResponse = await axios.get(`/api/collections/byName/${collectionName}`);
      let collectionId;
  
      if (collectionResponse.data) {
        collectionId = collectionResponse.data._id;
      } else {
        const newCollectionResponse = await axios.post('/api/collections', {
          name: collectionName,
          userId,
        });
        collectionId = newCollectionResponse.data._id;
      }
  
      const newWebsite = {
        userId,
        url,
        title,
        collectionId,
      };

      await axios.post(`/api/users/${userId}/websites`, newWebsite);
      console.log('Website state saved successfully');
    } catch (error) {
      console.error('Error saving website state:', error);
    }
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleCollectionNameChange = (event) => {
    this.setState({ collectionName: event.target.value });
  }

  render() {
    return (
      <div>
        <h1 className='patcherHeadTxt'>Rnbo Patcher</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter MaxPatch URL"
            value={this.state.url}
            onChange={this.handleInputChange}
          />
          &nbsp;&nbsp;
          <input
            type="text"
            placeholder="Enter Title"
            id="titleInput"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          &nbsp;&nbsp;
          <input
            type="text"
            placeholder="Enter Collection Name"
            value={this.state.collectionName}
            onChange={this.handleCollectionNameChange}
          />
          <img
            src="https://i.ibb.co/Sc2Jhqb/icons8-save-50.png"
            className='saveIcon'
            alt='saveIcon img'
          ></img>
          <button className="saveBtn" onClick={this.handleSave}>Save</button>
        </form>
        <iframe
          ref={this.myIframeRef}
          title="Website Frame"
          width="90%"
          height="600"
          src={this.state.url}
        ></iframe>
      </div>
    );
  }
}

export default WebFrame;
