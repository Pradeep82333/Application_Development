import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';

const RegisterPage = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data object to be sent to the server
    const data = {
      firstName,
      lastName,
      gender,
      age,
      email,
      password,
      phone,
      state,
      address,
    };

    try {
      // Make an HTTP POST request using Axios
      await axios.post('http://localhost:8181/api/v1/auth/register', data);
      await axios.post('http://127.0.0.1:8080/addDetails', data);
      // Registration successful
      setIsRegistered(true);

      // Show toast message
      setTimeout(() => {
        setIsRegistered(false);
        history.push('/');
      }, 3000);
    } catch (error) {
      // Handle registration error
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>

        <button type="submit" className="register-button">Register</button>
      </form>
      {isRegistered && (
        <div className="toast-message">
          Registration successful! Redirecting to the login page...
        </div>
      )}
      <p>
        Already have an account? <Link to="/" style={{ color: 'blue' }}>Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;


 //export default RegisterPage;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// // import './SignUp.css';

// const RegisterPage= () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigate = useNavigate();

//   const handleName = (event) => {
//     event.preventDefault();
//     setName(event.target.value);
//   };

//   const handleEmail = (event) => {
//     event.preventDefault();
//     setEmail(event.target.value);
//   };

//   const handlePassword = (event) => {
//     event.preventDefault();
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrors(validateForm({ name, email, password }));
//     try{
//       const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
//         name:name,
//         email:email,
//         password:password
  
//       });
//       console.log(response.status);
//       if(response.status===200){
//         setName("");
//         setEmail('');
//         setPassword('');
  
        
  
//       }
      
//     }
//     catch(error){
//       alert(error);
//       setIsSubmit(false);
  
//     }
//     if (isSubmit) {
//       navigate('/Login');
//     }
//   };

//   const validateForm = (values) => {
//     const errors = {};

//     if (values.name.trim() === '') {
//       errors.name = 'Username is required';
//       setIsSubmit(false);
//     }

//     if (values.email.trim() === '') {
//       errors.email = 'Email is required';
//       setIsSubmit(false);
//     }

//     if (values.password.trim() === '') {
//       errors.password = 'Password is required';
//       setIsSubmit(false);
//     } else if (values.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//       setIsSubmit(false);
//     }

//     setIsSubmit(Object.keys(errors).length === 0);

//     return errors;
//   };

//   return (
//     <>
//       <div className='login2'>
//         <form className='login_form' onSubmit={handleSubmit}>
//           <h1>Register</h1>
//           <div className='gogo'>
//             <div className='form-floating mb-3'>
//               <label htmlFor='nm'>Username</label>
//               <br />
//               <input
//                 type='name'
//                 className='form-control'
//                 placeholder='username'
//                 value={name}
//                 id='nm'
//                 onChange={handleName}
//               />
//             </div>
//             {errors.name}
//           </div>
// <div className="gogo">
//           <div className='form-floating mb-3'>
//             <label htmlFor='email'>Email</label>
//             <input
//               type='email'
//               className='form-control'
//               placeholder='email'
//               id='email'
//               value={email}
//               onChange={handleEmail}
//             />
//           </div>
//           </div>
//           {errors.email && <span>{errors.email}</span>}

//           <div className='loginbox'>
//             <div className="gogo">
//             <div className='form-floating mb-3'>
//               <label htmlFor='pwd'>Password</label>
//               <input
//                 type='password'
//                 className='form-control'
//                 placeholder='password'
//                 id='pwd'
//                 value={password}
//                 onChange={handlePassword}
//               />
//             </div>
            
            
//             {errors.password && <span>{errors.password}</span>}
//           </div>
//           </div>

//           <button
//             type='submit'
//             className='btn btn-secondary'
//             style={{
//               background: 'black',
//               color: 'white',
//               width: 180,
//               height: 50,
//               margin: 40,
//             }}
//           >
//             Sign Up
//           </button>
//         </form>
        
//       </div>
//     </>
//   );
// };

// export default RegisterPage;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './RegisterPage.css';

// const RegisterPage = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [state, setState] = useState('');
//   const [gender, setGender] = useState('');
//   const [age, setAge] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
//         firstName,
//         lastName,
//         email,
//         password,
//         phone,
//         address,
//         state,
//         gender,
//         age,
//       });
      
//       setMessage(response.data);
//       navigate('/'); // Redirect to the login page after successful registration
//     } catch (error) {
//       setMessage(error.response.data);
//     }
//   };

//   return (
//     <>
//       <center>
//         <h1>Phone Book Application</h1>
//         <div className="register-container">
//           <h2>User Register</h2>
//           <form onSubmit={handleRegister}>
//             <label>
//               First Name:&nbsp;&nbsp;
//               <input
//                 type="text"
//                 value={firstName}
//                 required
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </label>

//             <label>
//               Last Name:&nbsp;&nbsp;&nbsp;
//               <input
//                 type="text"
//                 value={lastName}
//                 required
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </label>

//             <label>
//               Email id: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <input
//                 type="email"
//                 value={email}
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </label>
//             <label>
//               Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <input
//                 type="password"
//                 value={password}
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </label>

//             <label>
//               Phone: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <input
//                 type="tel"
//                 value={phone}
//                 required
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </label>

//             <label>
//               Physical Address: &nbsp;
//               <input
//                 type="text"
//                 value={address}
//                 required
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </label>

//             <label>
//               State: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <input
//                 type="text"
//                 value={state}
//                 required
//                 onChange={(e) => setState(e.target.value)}
//               />
//             </label>

//             <label>
//               Gender: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <input
//                 type="text"
//                 value={gender}
//                 required
//                 onChange={(e) => setGender(e.target.value)}
//               />
//             </label>

//             <label>
//               Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <input
//                 type="number"
//                 value={age}
//                 required
//                 onChange={(e) => setAge(e.target.value)}
//               />
//             </label>

//             <div className="login-links">
//               <button type="submit">Register</button>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <button onClick={() => navigate('/login')}>Login</button>
//             </div>
//           </form>
//           {message && <p>{message}</p>}
//         </div>
//       </center>
//     </>
//   );
// };

// export default RegisterPage;
