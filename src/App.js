import React from 'react';
import PropTypes from "prop-types";

function Food({fav, pic, rating}) {
  return (
    <div>
      <h2>이건 {fav} 컴포넌트지</h2>
      <h3>{rating}점</h3>
      <img src={pic} alt={fav}/>
    </div>
  )
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  pic: PropTypes.string,
  rating: PropTypes.number.isRequired
}
// propTypes를 이용하여 각 prop이 어떤 형태로 제공되어야하는지 정의 할 수 있다

const foodIlike = [
  {
    id : 1,
    name : "beer",
    image : "https://produits.bienmanger.com/34491-0w600h600_Corona_Extra_Mexican_Blonde_Beer.jpg",
    rating : 4
  },
  {
    id : 2,
    name : "chicken",
    image : "https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2017%2F04%2F0716e0ca369a57b31b821ea090891e90fce7123e.jpeg",
    rating : 4.9
  },
  {
    id : 3,
    name : "fried rice",
    image : "https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Fried-Rice-Fifteen-Spatulas-8-640x427.jpg",
    rating : 3
  }
]

function App() {
  return (
    <div>
      {foodIlike.map(dish => <Food key={dish.id} fav={dish.name} pic={dish.image} rating={dish.rating} />)}
    </div>
  );
}

export default App;
