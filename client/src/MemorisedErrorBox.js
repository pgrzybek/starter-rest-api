import React from 'react';

function MemorisedErrorBox({ errorMessages }) {
  console.log(errorMessages);

  return (
    <div>
      {errorMessages.map((errorMessage, index) => (
        <div key={index}>{errorMessage}</div>
      ))}
    </div>
  );
}
//component will only re-render the component if the props passed to it have changed
export default React.memo(MemorisedErrorBox);