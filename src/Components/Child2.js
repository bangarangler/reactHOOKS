import React, { useEffect } from 'react';

const Child2 = ({val}) => {
  useEffect(() => console.log('child2 render'))
  return (
    <div>
      <p>Child2</p>
      <p>{val}</p>
    </div>
  );
};

export default Child2;
