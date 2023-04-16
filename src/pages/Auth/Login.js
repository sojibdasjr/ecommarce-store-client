import React ,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import  toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import "../../styles/AuthStyles.css";

 const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();

        //from submit function 
        const handleSubmit = async(e) =>{
            e.preventDefault();
            try {
              const res = await axios.post("/api/v1/auth/login", {email, password});
              if(res.data.success){
                toast.success(res.data.message);
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
    <Layout title={'Register -Ecommerce store'}>
    <div className="form-container" style={{ minHeight: "82vh" }}>
    <h4 className="title">LOGIN FORM</h4>
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
      </form>
    </div>
  </Layout>
  )
}

export default Login