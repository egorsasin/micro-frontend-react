import React from 'react';
import { useSelector } from 'react-redux';

function Layout() {
  const count = useSelector((state) => state.count);
  return <div>Counter - {count}</div>;
}

export default Layout;
