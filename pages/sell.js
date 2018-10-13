import React from 'react';
import Link from 'next/link';

const Sell = props => {
  return (
    <div>
      We're selling everything!
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Sell;
