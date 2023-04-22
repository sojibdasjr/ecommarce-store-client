import React ,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import  toast from 'react-hot-toast';
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom'
import "../../styles/AuthStyles.css";
import { BsFillPersonFill } from "react-icons/bs";


const ForgotPassword = () => {
    const [email, setEmail]= useState('');
    const [newPassword, setNewPassword]= useState('');
    const [answer, setAnswer]= useState('');
    const navigate = useNavigate();

        //from submit function 
        const handleSubmit = async(e) =>{
            e.preventDefault();
            try {
              const res = await axios.post("/api/v1/auth/forgot-password", {
                email, 
                newPassword,
            answer
        });
              if( res && res.data.success){
                toast.success( res.data && res.data.message);
                navigate('/login');
              }
              else{
                toast.error(res.data.message);
              }
            } catch (error) {
              toast.error("Something Went Wrong")
              
            }
        };
  return (
    <Layout title={"Forgot Password -Ecommerce Store"}>
    <div className="form-container" style={{ minHeight: "82vh" }}>
    <div className="sing_up">
      <BsFillPersonFill/>
      <h4 className="title">Reset Password</h4>
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
            type="text"
            value={answer}
            onChange={(e)=> setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your Mother Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={newPassword}
            onChange={(e)=> setNewPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your New Password Here"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset
        </button>
        <p className="mt-2">Already have an Account <NavLink to='/login'>Login?</NavLink></p>
      </form>
      </div>
    </div>
    </Layout>
  )
}

export default ForgotPassword