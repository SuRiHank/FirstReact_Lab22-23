import React, { useRef, useState } from "react";

function Form() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(`Name: ${name}, Email: ${email}`);
  //   };
  //   return (
  //     <>
  //       <form action="" onSubmit={handleSubmit}>
  //         <label htmlFor="">
  //           Name:
  //           <input
  //             type="text"
  //             name=""
  //             id=""
  //             value={name}
  //             onChange={(e) => setName(e.target.value)}
  //           />
  //         </label>
  //         <br />
  //         <label htmlFor="">
  //           Email:
  //           <input
  //             type="text"
  //             name=""
  //             id=""
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //         </label>
  //         <br />
  //         <button type="submit">Submit</button>
  //       </form>
  //     </>
  //   );

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    console.log(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}`
    );
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="">
          Name:
          <input type="text" name="name" id="" />
        </label>
        <br />
        <label htmlFor="">
          Email:
          <input type="text" name="email" id="" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
