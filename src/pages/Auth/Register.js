import React ,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import  toast from 'react-hot-toast';
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom'
import { BsFillPersonFill } from "react-icons/bs";
import "../../styles/AuthStyles.css";

export const Register = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [phone, setPhone]= useState('');
    const [address, setAddress]= useState('');
    const [answer, setAnswer]= useState('');
    const navigate = useNavigate();

    //from submit function 
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
          const res = await axios.post("/api/v1/auth/register", {
            name,
            email, 
            password, 
            phone, 
            address,
            answer,
           });
          if(res.data.success){
            toast.success(res.data.message);
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
    <Layout title={'Register -Ecommerce store'}>
      <div className="form-container" style={{ minHeight: "82vh" }}>
      <div className="sing_up">
      <BsFillPersonFill/>
      <h4 className="title">Register Now</h4>
      </div>
        <div className="dev_title">
          <div className="dev_accoutn">
          <h1>Welcome Back</h1>
          <h3>Create Accoutn</h3>
          </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name Here"
              required
            />
          </div>
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
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e)=> setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
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
              placeholder="What is your mother name?"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
          <p className="mt-2">Already registered <NavLink to='/login'>sign in?</NavLink></p>
        </form>
        </div>
      </div>
    </Layout>
  );
};
