// import React, { Component } from "react";

// export class Hello extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.increasingCount = this.increasingCount.bind(this);
//     this.decreasingCount = this.decreasingCount.bind(this);
//   }

//   increasingCount() {
//     this.setState({ count: this.state.count + 1 });
//   }
//   decreasingCount() {
//     this.setState({ count: this.state.count - 1 });
//   }

//   render() {
//     return (
//       <div>
//         <h4>Count: {this.state.count}</h4>
//         <button onClick={this.increasingCount}>Tăng</button> |
//         <button onClick={this.decreasingCount}>Giảm</button>
//       </div>
//     );
//   }
// }

// export default Hello;

import React, { useState } from "react";

function Hello({ myId, myAge, a, b }) {
  const [count, setCount] = useState(0);

  const increasingCount = () => {
    setCount(count + 1);
  };

  const decreasingCount = () => {
    setCount(count - 1);
  };

  const callMe = () => {
    return "Pham Ngoc Huy";
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => increasingCount()}>Tăng</button>
      <button onClick={decreasingCount}>Giảm</button>

      {/* gọi hàm ngay lập tức khi render, điều này ko tốt khi sử dụng vs click */}
      <h2>{callMe()}</h2>

      {/* truyền biến về đây. Nhớ ghi 'myId, myAge, ...' trong {...} trên function 
      hoặc 'props' trong {...} trên function
      */}
      <h2>
        Id: {myId} - Age: {myAge}
      </h2>

      <h2>
        a: {a} - b: {b}
      </h2>
    </>
  );
}

export default Hello;
