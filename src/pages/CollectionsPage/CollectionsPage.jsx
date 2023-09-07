import React, { Component } from 'react';
import axios from 'axios';
import Collections from '../../components/Collections/Collections';

class CollectionsPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: [], 
    };
  }

  componentDidMount() {
    const { userId } = this.props;

    axios.get(`/api/collections/${userId}`)
      .then((response) => {
        this.setState({ collections: response.data });
      })
      .catch((error) => {
        console.error('Error fetching collections:', error);
      });
  }

  render() {
    const { collections } = this.state;
    const { userId } = this.props;

    return (
      <div>
        {/* <h1>Collections Page</h1> */}
        <Collections items={collections} isCollection={true}  userId={userId}  />
      </div>
    );
  }
}

export default CollectionsPage;
