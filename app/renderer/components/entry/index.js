import React, { useState } from 'react';
import kaboom from 'kaboom';

// local dependencies
import { getVersion } from 'common/util';

// import styles (for compilation)
//import './styles.scss';

// export a react component
export default (props) => {
  const [count, incrementCount] = useState(0);
  kaboom();

  add([
    text("hello"),
    pos(120, 80),
  ]);
  return (
    <div className='hello'>
      <h1>Hello {props.name} World!</h1>
      <h3>Version: {getVersion()}</h3>
      <h3>Counter: {count}</h3>
      <button
        onClick={() => incrementCount(count + 1)}
        className={count % 2 === 1 ? 'hello__btn--odd' : undefined}
      >Increment Counter</button>
    </div>
  );
};