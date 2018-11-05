import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { ALL_ITEMS_QUERY } from './Items';

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(data: { id: $id }) {
      id
    }
  }
`;

const confimationMessage = 'Are you sure you want to delete this item?';

export default class DeleteItem extends Component {
  static defaultProps = {
    id: ''
  }
  handleDelete = deleteItem => () => {
    if (confirm(confimationMessage)) deleteItem();
  };

  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    const items = data.items.filter(({ id }) => id !== payload.data.deleteItem.id);
    
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data: { ...data, items } });
  };

  render() {
    const { id, children } = this.props;
    return (
      <Mutation mutation={DELETE_ITEM_MUTATION} variables={{ id }} update={this.update}>
        {(deleteItem, { error }) => (
          <button onClick={this.handleDelete(deleteItem)}>{children}</button>
        )}
      </Mutation>
    );
  }
}
