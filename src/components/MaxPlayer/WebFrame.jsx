import React, { Component } from 'react';
import axios from 'axios';

class WebFrame extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
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
    console.log('userId:', userId);
    const { url } = this.state;

    try {
      const newWebsite = {
        userId, 
        url,
      };

      await axios.post(`/api/users/${userId}/websites`, newWebsite);
      console.log('Website state saved successfully');
    } catch (error) {
      console.error('Error saving website state:', error);
    }
  }

  render() {
    return (
      <div>
        <h1 className='patcherHeadTxt'>Rnbo Patcher</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter URL"
            value={this.state.url}
            onChange={this.handleInputChange}
          />
          <button className='loadBtn' type="submit">Load</button>
          <button onClick={this.handleSave}>Save</button>
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
