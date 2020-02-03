import React from 'react';

function Food({fav}) {
  console.log(fav)
  return (
    <h2>이건 {fav} 컴포넌트지</h2>
  )
}

function App() {
  return (
    <div>
      <h1>Hello React JS!</h1>
      <p>이건 토마토 컴포넌트야</p>
      <Food fav="치킨" />
      <Food fav="국밥" />
      <Food fav="샐러드" />
    </div>
  );
}

export default App;
