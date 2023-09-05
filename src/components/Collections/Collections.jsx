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

      // Fetch collections
      const collectionsResponse = await axios.get(`/api/collections/${userId}`);
      const collections = collectionsResponse.data;
      console.log('COLLECTIONS',collections) // is an array

      // Fetch patches
      const patchesResponse = await axios.get(`/TESTING/${userId}/websites`);  // no path to catch this THIS WAS MAIN ISSUE
      const patches = patchesResponse.data;
      console.log('PATCHES',patches) // patch response is weird


      // Log patchesResponse.data to inspect what data is being received
      console.log('Patches Response Data:', patchesResponse.data);

      this.setState({ collections, patches });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  render() {
    const { collections, patches } = this.state;

    return (
      <div>
        <h1>User Patch Collections</h1>
        <div>
          <h2>Collections</h2>
          {
          // Array.isArray(patches) && patches.length > 0 ?
            collections ? 
            (
            <ul>
              {collections.map((collection) => (
                (<li key={collection._id}>
                  <h3>Collection Name: {collection.name}</h3>
                  <ul>
                    {patches
                      .filter((patch) => patch.collectionId === collection._id)
                      .map((patch) => (
                        <li key={patch._id}>
                          {/* Render patch information here */}
                          <p>Title: {patch.title}</p>
                          <p>URL: {patch.url}</p>
                        </li>
                      ))}
                  </ul>
                </li>)
              ))}
            </ul>
          ) : (
            <p>No patches to display.</p>
          )}

{/* TESTINGGGGGGG */}
          {/* {
              collections.map((collection) => {
                return <p>test</p>
              })
          } */}
        </div>
      </div>
    );
  }
}

export default Collections;