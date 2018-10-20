import React from 'react';
import Link from 'next/link';

import Items from '../components/Items';

const Home = props => {
  return (
    <div>
      <Link href="/sell">
        <Items />
      </Link>
    </div>
  );
};

export default Home;
