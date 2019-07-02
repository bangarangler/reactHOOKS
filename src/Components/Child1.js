import React, { useEffect } from 'react';

const Child1 = ({val}) => {
  useEffect(() => console.log('child1 render'))
  return (
    <div>
      <p>Child1</p>
      <p>{val}</p>
    </div>
  );
};

export default Child1;
