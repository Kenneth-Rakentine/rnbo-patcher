import React, { Component } from 'react';
import axios from 'axios';

class Collections extends Component {
  constructor() {
    super();
    this.state = {
      collections: [],
      patches: [],
      editingPatch: null,
      editedPatchTitle: '',
      editedPatchURL: '',
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  //fetch user collections and patches
  fetchUserData = async () => {
    try {
      const { userId } = this.props;

      //fetch collections
      const collectionsResponse = await axios.get(`/api/collections/${userId}`);
      const collections = collectionsResponse.data;

      //fetch patches
      const patchesResponse = await axios.get(`/api/users/${userId}/websites`);
      const patches = patchesResponse.data;

      this.setState({ collections, patches });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  handleEditPatch = (patch) => {
    this.setState({
      editingPatch: patch,
      editedPatchTitle: patch.title,
      editedPatchURL: patch.url,
    });
  };  

  handleDeletePatch = async (patchId) => {
    try {
      //send DELETE request to the server to delete patch by id
      await axios.delete(`/api/websites/${patchId}`);
      //refresh data after deletion
      this.fetchUserData();
    } catch (error) {
      console.error('Error deleting patch:', error);
    }
  };

  //create event handlers for edit form fields
  handleEditedPatchTitleChange = (event) => {
    this.setState({ editedPatchTitle: event.target.value });
  }

  handleEditedPatchURLChange = (event) => {
    this.setState({ editedPatchURL: event.target.value });
  }

  //c Create event handler for form submission
  handleUpdatePatch = async (e, patchId) => {
    e.preventDefault();

    const { editedPatchTitle, editedPatchURL } = this.state;

    try {
      //send PUT request to update the patch data by id
      await axios.put(`/api/websites/${patchId}`, { title: editedPatchTitle, url: editedPatchURL });
      
      //clear the editing state and refresh the data
      this.setState({
        editingPatch: null,
        editedPatchTitle: '',
        editedPatchURL: '',
      });
      
      this.fetchUserData();
    } catch (error) {
      console.error('Error updating patch:', error);
    }
  };

  render() {
    const { collections, patches, editingPatch, editedPatchTitle, editedPatchURL } = this.state;
    const { userId, collectionId } = this.props;

    return (
      <div>
        <h1>User Patch Collections</h1>
        <div>
          {/* <h2>Collections</h2> */}
          {Array.isArray(patches) && patches.length > 0 ? (
            <ul>
              {collections.map((collection) => (
                <li key={collection._id}>
                  <h3>Collection: {collection.name}</h3>
                  <ul>
                    {patches
                      .filter((patch) => patch.collectionId === (collectionId || collection._id))
                      .map((patch) => (
                        <li key={patch._id}>
                          {editingPatch === patch ? (
                            <form onSubmit={(e) => this.handleUpdatePatch(e, patch._id)}>
                              <input
                                type="text"
                                placeholder="New Title"
                                value={editedPatchTitle}
                                onChange={this.handleEditedPatchTitleChange}
                              />
                              <input
                                type="text"
                                placeholder="New URL"
                                value={editedPatchURL}
                                onChange={this.handleEditedPatchURLChange}
                              />
                              <button type="submit">Save</button>
                            </form>
                          ) : (
                            <>
                              <p>Patch: {patch.title}</p>
                              <p>URL: {patch.url}</p>
                              <button onClick={() => this.handleEditPatch(patch)}>Edit</button>
                              <button onClick={() => this.handleDeletePatch(patch._id)}>Delete</button>
                            </>
                          )}
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p>No patches to display.</p>
          )}
        </div>
      </div>
    );
  }
}

export default Collections;
