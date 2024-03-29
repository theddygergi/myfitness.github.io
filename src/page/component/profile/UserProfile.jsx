import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {
    Row,
    Col,
    Button,
    Image,
} from 'react-bootstrap'
import { BiSolidUserCircle } from "react-icons/bi";
import userContext from '../../../UserContext';


export default function UserProfile() {
  const {userData} = useContext(userContext);
  const [userInfo, setUserInfo] = useState([]);
  const fetchData = async () => {
    try {
        const response = await axios(`http://localhost:8081/api/userinfo/${userData.useremail}`);
        setUserInfo(response.data);

    } catch (error) {
      console.error('No user found: ' + error);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className='user-profile'>
        <div className="user-information">
            <div className="
            bg-white border rounded
            information information-row01"
            >
                <div className='text-center text-primary '>
                  <br />
                  <p className='h1'>{userInfo.username}</p>
                  <br />
                  <p>Track your way through the plan</p>
                  <br />
                  {
                    userInfo.goalid == '1'
                      ? <p className='h3 text-primary text-center'>Lose Weight</p>
                      :userInfo.goalid == '2'
                        ? <p className='h3 text-primary text-center'>Gain Weight</p>
                        : userInfo.goalid == '3'
                          ? <p className='h3 text-primary text-center'>Build Muscle</p>
                          : <p className='h3 text-primary text-center'>Your Plan</p>
                  }
                  <br />
                </div> 
                <div className="information"></div>
            </div>
        </div>
    </div>
  )
}
// <BiSolidUserCircle/>