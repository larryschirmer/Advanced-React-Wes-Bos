import React from 'react';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { Query } from 'react-apollo';

import PaginationStyles from './styles/PaginationStyles';
import { itemsPerPage } from '../config';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = ({ page }) => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (error) return <p>Error {error}</p>;
        if (loading) return <p>Loading ...</p>;

        const { count } = data.itemsConnection.aggregate;
        const pages = Math.ceil(count / itemsPerPage);

        return (
          <PaginationStyles>
            <Head>
              <title>
                Sick Fits! — Page {page} of {pages}
              </title>
            </Head>
            <Link
              prefetch
              href={{
                pathname: 'shop',
                query: { page: page - 1 },
              }}
            >
              <a className="prev" aria-disabled={page <= 1}>
                Prev
              </a>
            </Link>
            <p>
              You are on page: {page} of {pages}
            </p>
            <p>{count} Items Total</p>
            <Link
              prefetch
              href={{
                pathname: 'shop',
                query: { page: page + 1 },
              }}
            >
              <a className="prev" aria-disabled={page >= pages}>
                Next
              </a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  );
};

export default Pagination;
