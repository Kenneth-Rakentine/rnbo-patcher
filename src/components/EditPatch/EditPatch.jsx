import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

class EditPatch extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      url: '',
    };
  }

  componentDidMount() {
    // Fetch the patch data by ID when the component mounts
    this.fetchPatchData();
  }

  // Fetch patch data by ID
  fetchPatchData = async () => {
    try {
      const { patchId } = this.props.match.params; // Get patchId from route params
      const patchResponse = await axios.get(`/api/websites/${patchId}`);
      const patch = patchResponse.data;

      this.setState({
        title: patch.title,
        url: patch.url,
      });
    } catch (error) {
      console.error('Error fetching patch data:', error);
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSave = async () => {
    const { patchId, collectionId } = this.props.match.params; // Get patchId from route params
    const { title, url } = this.state;

    try {
      // Send a PUT request to update the patch data by ID
      await axios.put(`/api/websites/${patchId}`, { title, url });
      // Redirect back to the patch view
      this.props.history.push(`/collections/${collectionId}/patches/${patchId}`);
    } catch (error) {
      console.error('Error updating patch:', error);
    }
  };

  render() {
    const { title, url } = this.state;

    return (
      <div>
        <h2>Edit Patch</h2>
        <form>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>URL:</label>
            <input
              type="text"
              name="url"
              value={url}
              onChange={this.handleInputChange}
            />
          </div>
          <button onClick={this.handleSave}>Save</button>
        </form>
      </div>
    );
  }
}

export default EditPatch;
