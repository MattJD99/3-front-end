// import React, {useState} from 'react';
// import useHistory from 'react-router-dom';

// function Login() {
//     const [userLogin, setUserLogin] = useState("")
    
//     const [currentUser, setCurrentUser] = useState(null)
//     const changeUser = (user) => {
//       setCurrentUser(user)
//     }

//     async function findCurrentUser(username) {
//       const response = await fetch(`http://localhost:9292/users/${username}`)
//       const user = await response.json()
//       changeUser(user)
//       history.pushState(`/users/${user.id}/portfolios`)
//   }

//     const handleSubmit = (event) => {
//       event.preventDefault()
//       findCurrentUser(userLogin)
//     }
//     const handleChange = (event) => {
//       setUserLogin(event.target.value)
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="login" value="Username">Username: </label>
//                 <input type="text" name="login" value={userLogin} onChange={handleChange} autoFocus={true}/>
//                 <input type="submit" value="Login"/>
//             </form>
//         </div>
//     )
// }

// export default Login