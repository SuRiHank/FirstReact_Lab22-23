import React, { useState } from "react";
import { useEffect } from "react";

function RandomUser() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    // gọi API để lấy dữ liệu
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        // Lấy thông tin người dùng từ đối tượng JSON trả về
        const userResult = data.results[0]; // Đây là một đối tượng
        setUser(userResult);
      });
  }, []);
  return (
    <>
      <h2>Name: {user.name && `${user.name.first} ${user.name.last}`}</h2>
      <p>Email: {user.email}</p>
    </>
  );
}

export default RandomUser;
