import React, { Component } from 'react';

class Collections extends Component {
  render() {
    const { items, isCollection } = this.props;

    // Check if items is an array before using map
    if (!Array.isArray(items)) {
      return (
        <div>
          <h1>{isCollection ? 'Collections' : 'User\'s Patches'}</h1>
          <p>No items to display.</p>
        </div>
      );
    }

    return (
      <div>
        <h1>{isCollection ? 'Collections' : 'User\'s Patches'}</h1>
        <div>
          {items.map((item) => (
            <div key={item._id}>
              {/* Render item information here */}
              <p>Title: {item.title}</p>
              <p>URL: {item.url}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Collections;
