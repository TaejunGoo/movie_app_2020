import React from 'react';
import PropTypes from "prop-types";

function JustTest({id, nName, word}){
  return(
    <div>
      <p> {nName}({id}) say "{word}" </p>
    </div>
  )
}

function Food({fav, pic, rating}) {
  return (
    <div>
      <h2>이건 {fav} 컴포넌트지</h2>
      <h3>{rating}점</h3>
      <img src={pic} alt={fav}/>
    </div>
  )
}

function MovieChart({sbj, genre, ratings}) {
  return (
    <div>
      <p>Subject : {sbj}</p>
      <p>genre : {genre}</p>
      <p>rating : {ratings}/5</p>
    </div>
  )
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  pic: PropTypes.string,
  rating: PropTypes.number.isRequired
}

MovieChart.propTypes = {
  sbj: PropTypes.string.isRequired,
  ratings: PropTypes.number
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

const users = [
  {
    id : "gtx1",
    name : "nick",
    word : "Hi!"
  },
  {
    id : "gtxggle",
    name : "태준",
    word : "안녕하세요"
  },
  {
    id : "kim",
    name : "김이박",
    word : "안녕하슈"
  }
]

const movies = [
  {
    sbj : "Lord of Rings",
    genre : "fantasy",
    ratings : 5
  },
  {
    sbj : "Star Wars Series",
    genre : "space opera",
    ratings : 3
  },
  {
    sbj: "kung ju soccer",
    genre : "comedy",
    ratings : 5
  },
  {
    sbj : "Gravity",
    genre : "Science Fiction",
    ratings : 5
  }
]

function App() {
  return (
    <div>
      {foodIlike.map(dish => <Food key={dish.id} fav={dish.name} pic={dish.image} rating={dish.rating} />)}
      {users.map( people => <JustTest key={people.id} id={people.id} nName={people.name} word={people.word} /> )}
      {movies.map(title => <MovieChart key={title.sbj} sbj={title.sbj} genre={title.genre} ratings={title.ratings} />)}
    </div>
  );
}

export default App;
