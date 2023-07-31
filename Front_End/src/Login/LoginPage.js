// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
//  import './NewLoginPage.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.get('http://127.0.0.1:8080/emailandpassword');
//       const fetchedData = response.data;
  
//       // Check if the email and password match the fetched data
//       const foundUser = fetchedData.find((user) => user.email === email && user.password === password);
  
//       if (foundUser) {
//         // Perform login logic or set tokens or perform any other actions
//         console.log('Login successful:', foundUser);
//         setLoginError('');
//         // Redirect to the home page or perform further actions
//         window.location.href = '/home';
//       } else {
//         // Handle login failure, such as displaying an error message
//         setLoginError('Invalid email or password');
//       }
//     } catch (error) {
//       // Handle login error, such as displaying an error message
//       console.log('Login failed:', error);
//       setLoginError('Login failed. Please try again later.');
//     }
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <div className="form-wrapper">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email" className="login-label">Email:</label>
//             <input
//               type="email"
//               id="email"
//               className="login-input"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="login-label">Password:</label>
//             <input
//               type="password"
//               id="password"
//               className="login-input"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//       {loginError && <p className="error-message">{loginError}</p>}
//       <p>
//         Don't have an account? <Link to="/register" style={{ color: 'blue' }}>Register</Link>
//       </p>
//       <p>
//         Admin login? <Link to="/adminlogin" style={{ color: 'blue' }}>Admin Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

// import React from 'react'
// import { useState,useEffect } from 'react'
// import { redirect, useNavigate } from 'react-router-dom'
// // import './Login.css'
// import axios from 'axios'
// import { useDispatch } from "react-redux";

// import { Link } from 'react-router-dom'



// const LoginPage = () => {
//  const [name,setName]=useState('')
//  const [id,setId]=useState('')  
//  const [password,setPassword]=useState('')
//  const [errors, setErrors] = useState({});
//  const[isSubmit,setIsSubmit]=useState(false);
//  const navigate =useNavigate();
//  const dispatch=useDispatch();

//  const handleName=(event)=>{
//     event.preventDefault();
//     setName(event.target.value)
//   }
 
//   const handleId=(event)=>{
//     event.preventDefault();
//     setId(event.target.value)
//   }
//   const handlePassword=(event)=>{
//     event.preventDefault();
//     setPassword(event.target.value)
//   }
//   const handleSubmit=async (event)=>{
//     event.preventDefault();
//     setErrors(validateForm({name,id,password}));
//     try{
//       const response=await axios.post('http://localhost:8181/api/v1/auth/authenticate',{
        
//         email:name,
//         password:password
  
//       });
//       navigate('/Home');
//       let token=response.data.token;
//       localStorage.setItem('token',token);
//       console.log(response.status);
//       if(response.status===200){
//         setName("");
//         setId('');
//         setPassword('');
  
        
  
//       }
      
//     }
//     catch(error){
//       console.log(error);
//       setIsSubmit(false);
  
//     }
//     // setIsSubmit(true);
    
    
   
// };
  

//   const validateForm = (values) => {
//     const errors = {};

//     if (values.name.trim() === '') {
//       errors.name = 'Email is required';
//       setIsSubmit(false);
//     }

//     else if (values.password.trim() === '') {
//       errors.password = 'Password is required';
//       setIsSubmit(false);
//     } else if (values.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//       setIsSubmit(false);
//     }
//     else{
//         setIsSubmit(true)
//     }
//     return errors;

//     // setErrors(errors);
//   };

  

//   return (
//     <>
  
//     <div className='login'>
//         <form className='login_form' onSubmit={handleSubmit}>
//             <h1>Login</h1>
//             <div className='gogo'>
//             <div className='form-floating mb-3'>
//             <label for='nm'>Email</label>
//             <br></br>
//             <input type='email' className='form-control'
//             placeholder='abc@gmail.com'
//             value={name} id='nm'
//             onChange={handleName} />
//             </div>
//             {errors.name}
//             </div>

//             <div className='loginbox'>
//               <div className="jo">
//             <div className='form-floating mb-3'>
//             <label for='pwd'>Password</label>
//             <input type='password' className='form-control'
//             placeholder='password' id='pwd'
//             value={password}
//             onChange={handlePassword}/>
//             </div>
//             </div>
//             {errors.password && <span>{errors.password}</span>}
//             </div>
            
//             <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>

//         </form>
//         <br></br><br></br>
//         <h2>Don't have an account? <a href='/SignUp'>SignUp</a></h2>
//     </div>
    
//     </>
//   )
// }

// export default LoginPage;




// LoginPage.js

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from "react-redux";
// //import './LoginPage.css';
// import './NewLoginPage.css';

// const LoginPage = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleName = (event) => {
//     event.preventDefault();
//     setName(event.target.value);
//   }

//   const handlePassword = (event) => {
//     event.preventDefault();
//     setPassword(event.target.value);
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrors(validateForm({ name, password }));
//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
//         email: name,
//         password: password
//       });
//       navigate('/Home');
//       let token = response.data.token;
//       localStorage.setItem('token', token);
//       console.log(response.status);
//       if (response.status === 200) {
//         setName("");
//         setPassword('');
//       }
//     } catch (error) {
//       console.log(error);
//       setIsSubmit(false);
//     }
//   };

//   const validateForm = (values) => {
//     const errors = {};

//     if (values.name.trim() === '') {
//       errors.name = 'Email is required';
//       setIsSubmit(false);
//     } else if (values.password.trim() === '') {
//       errors.password = 'Password is required';
//       setIsSubmit(false);
//     } else if (values.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//       setIsSubmit(false);
//     } else {
//       setIsSubmit(true)
//     }
//     return errors;
//   };

//   return (
//     <div className='login'>
//       <form className='login_form' onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <div className='form-group'>
//           <label htmlFor='nm'>Email</label>
//           <br></br>
//           <input
//             type='email'
//             className='form-control'
//             placeholder='abc@gmail.com'
//             value={name}
//             id='nm'
//             onChange={handleName}
//           />
//           {errors.name && <span className='error'>{errors.name}</span>}
//         </div>

//         <div className='form-group'>
//           <label htmlFor='pwd'>Password</label>
//           <input
//             type='password'
//             className='form-control'
//             placeholder='password'
//             id='pwd'
//             value={password}
//             onChange={handlePassword}
//           />
//           {errors.password && <span className='error'>{errors.password}</span>}
//         </div>

//         <button
//           type='submit'
//           className='btn btn-secondary'
//           style={{ background: 'black', color: 'white', width: 180, height: 50, margin: 40 }}
//         >
//           Sign In
//         </button>
//       </form>
//       <br /><br />
//       <h4>Don't have an account? <a href='/register'>SignUp</a></h4>
//       <h4>Are You Admin? <a href='/adminlogin'>Admin Login</a></h4>
//     </div>
//   );
// }

// export default LoginPage;







import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NewLoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', {
        email,
        password
      });

      // Assuming the response contains a 'status' property
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        setLoginError('');
        localStorage.setItem('token', response.data.token);
        // Redirect to the home page or perform further actions
        window.location.href = '/Home';
      } else {
        // Handle login failure, such as displaying an error message
        setLoginError('Invalid email or password');
      }
    } catch (error) {
      // Handle login error, such as displaying an error message
      console.log('Login failed:', error);
      setLoginError('Login failed. Please try again later.');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="login-label">Email:</label>
            <input
              type="email"
              id="email"
              className="login-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="login-label">Password:</label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      {loginError && <p className="error-message">{loginError}</p>}
      <p>
        Don't have an account? <Link to="/register" style={{ color: 'blue' }}>Register</Link>
      </p>
      <p>
         Admin login? <Link to="/adminlogin" style={{ color: 'blue' }}>Admin Login</Link>
       </p>
    </div>
  );
};

export default Login;
