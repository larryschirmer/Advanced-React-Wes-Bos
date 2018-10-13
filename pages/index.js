import React from 'react';
import Link from 'next/link';

const Home = props => {
  return (
    <div>
      <Link href="/sell">
        <a>Hey!</a>
      </Link>
    </div>
  );
};

export default Home;
