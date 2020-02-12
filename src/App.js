import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('Component Mounted')
  }
  // 컴포넌트가 mount 될 때 처음으로 호출되는 것
  state = {
    count : 0
  };
  // 동적 데이터

  add = () => {
    this.setState({count: this.state.count + 1 })
    // = 를 이용하여 데이터를 할당하는것이 아니라(state를 직접 조작하는것이 아니라!)
    // setState를 이용하여 state를 조작해야 자동으로 react가 refresh 된다.
    // 그러면 react가 자동으로 변경 부분만 html을 refresh
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}))
    // 위의 this.state.count를 활용하는 방법보다 효율적이다
    // setState를 할 떄 외부의 상태에 의존하지 않아야?
  };
  render(){
    console.log('Component Redering')
    return (
    <div>    
      <h1>지금 숫자는 {this.state.count} 이다 </h1>
      <button onClick={this.add}>더하기</button>
      <button onClick={this.minus}>빼기</button>
    </div>
    )
  }
  componentDidMount(){
    console.log("Component Rendered")
  };
  
  componentDidUpdate(){
    console.log("Component updated")
  }
  componentWillUnmount(){
    console.log("Component goodbye")
  }
}

export default App;
