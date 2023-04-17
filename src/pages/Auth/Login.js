import React ,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import  toast from 'react-hot-toast';
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom'
import "../../styles/AuthStyles.css";
import { BsFillPersonFill } from "react-icons/bs";
import { useAuth } from "../../context/auth";


 const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [auth, setAuth] = useAuth("");
    const navigate = useNavigate();

        //from submit function 
        const handleSubmit = async(e) =>{
            e.preventDefault();
            try {
              const res = await axios.post("/api/v1/auth/login", {email, password});
              if(res.data.success){
                toast.success(res.data.message);
                setAuth({
                  ...auth,
                  user:res.data.user,
                  token:res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate('/');
              }
              else{
                toast.error(res.data.message);
              }
            } catch (error) {
              toast.error("Something Went Wrong")
              
            }
        };
  return (
    <Layout title={'Login -Ecommerce store'}>
    <div className="form-container" style={{ minHeight: "82vh" }}>
    <div className="sing_up">
      <BsFillPersonFill/>
      <h4 className="title">Login Now</h4>
      </div>
      <div className="dev_title">
      <div className="dev_accoutn2">
          <h1>Welcome Back</h1>
          <h3>Login</h3>
          </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Name Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password Here"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
        <p className="mt-2">Already have an Account <NavLink to='/register'>register ?</NavLink></p>
      </form>
      </div>
    </div>
  </Layout>
  )
}

export default Login