import React from 'react';

function Hello({name}) {
  return (
    <h1>안녕하세요, <strong>{name}</strong> 님</h1>
  )
}

function Food({fav}) {
  return (
    <h2>이건 {fav} 컴포넌트지</h2>
  )
}

function App() {
  return (
    <div>
      <Hello name="태준" />
      <Food fav="치킨" />
      <Food fav="국밥" />
      <Food fav={['배열1', '배열2', '배열3']} />
    </div>
  );
}

export default App;
