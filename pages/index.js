import React from 'react';
import Link from 'next/link';

import Items from '../components/Items';

const cleanPageNumber = p => (p && !isNaN(parseInt(p)) ? parseInt(p) : 1);

const Home = ({ query: { page: p } }) => {
  const page = cleanPageNumber(p);

  return (
    <div>
      <Link href="/sell">
        <Items page={page} />
      </Link>
    </div>
  );
};

export default Home;
