import React, { Component } from 'react';
// import MaxPlayer from '../../components/MaxPlayer/MaxPlayer';
import WebFrame from '../../components/MaxPlayer/WebFrame';

class SearchPage extends Component {
  render() {
    const { userId } = this.props; 

    return (
      <div>
        {/* <h1>Search Page</h1> */}
        <WebFrame userId={userId} />
      </div>
    );
  }
}

export default SearchPage;
