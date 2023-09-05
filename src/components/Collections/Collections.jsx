import React, { Component } from 'react';
import axios from 'axios';

class Collections extends Component {
  constructor() {
    super();
    this.state = {
      collections: [],
      patches: [],
    };
  }

  componentDidMount() {
    this.fetchUserData();
  }

  // Fetch user collections and patches
  fetchUserData = async () => {
    try {
      const { userId } = this.props;
      console.log(userId);

      // Fetch collections
      const collectionsResponse = await axios.get(`/api/collections/${userId}`);
      const collections = collectionsResponse.data;

      // Fetch patches
      const patchesResponse = await axios.get(`/api/users/${userId}/websites`);
      const patches = patchesResponse.data;

      this.setState({ collections, patches });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  render() {
    const { collections, patches } = this.state;
    console.log(this.props);

    return (
      <div>
        <h1>User Patch Collections</h1>
        <div>
          <h2>Collections</h2>
          {collections.length === 0 ? (
            <p>No collections to display.</p>
          ) : (
            <ul>
              {collections.map((collection) => (
                <li key={collection._id}>
                  {/* Render collection information here */}
                  <p>Patch Collection: {collection.name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2>Patches</h2>
          {Array.isArray(patches) && patches.length === 0 ? ( // Check if patches is an array
            <p>No patches to display.</p>
          ) : (
            <ul>
              {Array.isArray(patches) &&
                patches.map((patch) => (
                  <li key={patch._id}>
                    {/* Render patch information here */}
                    <p>Title: {patch.title}</p>
                    <p>URL: {patch.url}</p>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Collections;
