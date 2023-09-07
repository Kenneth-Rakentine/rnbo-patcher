import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditPatch(props) {
  const { patchId, collectionId } = useParams();
  
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (patchId) { // Check if patchId is available
      const fetchPatchData = async () => {
        try {
          const patchResponse = await axios.get(`/api/websites/${patchId}`);
          const patch = patchResponse.data;

          setTitle(patch.title);
          setUrl(patch.url);
        } catch (error) {
          console.error('Error fetching patch data:', error);
        }
      };

      fetchPatchData();
    }
  }, [patchId]);

  const handleInputChange = (event) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    } else if (event.target.name === 'url') {
      setUrl(event.target.value);
    }
  };

  const handleSave = async () => {
    try {
      // Send a PUT request to update the patch data by ID
      await axios.put(`/api/websites/${patchId}`, { title, url });
      // Redirect back to the patch view
      props.history.push(`/collections/${collectionId}/patches/${patchId}`);
    } catch (error) {
      console.error('Error updating patch:', error);
    }
  };

  const handleOpen = () => { // Declare handleOpen as a constant function
    // Assuming you want to open the URL in a new window/tab
    window.open(url, '_blank');
  };

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
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            name="url"
            value={url}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleOpen}>Open</button>
      </form>
    </div>
  );
}

export default EditPatch;
