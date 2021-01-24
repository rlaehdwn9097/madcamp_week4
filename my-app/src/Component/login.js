import React, { useState, useEffect} from 'react';
import axois from 'axios';
import axios from 'axios';

function Login() {
    const [state, setState] = useState({userid : "",password : ""});
    const [status, setStatus] = useState("loading");
    const [tokenInfo, setTokenInfo] = useState("Not Yet!");
    
    // componentDidMount, componentDidUpdate와 같은 방식으로
    useEffect(() => {
      // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
      
    });


    function submitFunc(){
        /*console.log(state.userid);
        console.log(state.password);
        console.log(state);
        */
        axios.post("https://d9e24dc43bfc.ngrok.io/mongooseDB/user/login", state)
        .then(res => {
            console.log(res.data.token);
            if(res.status == 200){
                setStatus("Success!");

                setTokenInfo(res.data.token);
            }
            else{
              setStatus(res.status);
            }
        })
        .catch(err => console.log(err));
    }
  
    return (
      <div>
        <p>Login Status : {status}</p>
        <input type = "text" 
            name="userid" 
            id="userid"
            placeholder="id"
            onChange={e=>setState({...state, userid: e.target.value})}
            ></input>
        <input type = "password" 
            id="password" 
            placeholder="Password"
            onChange={e=>setState({...state, password: e.target.value})}
            ></input>
        <button onClick={submitFunc}>
          login
        </button>
        <p>UserToken : {tokenInfo}</p>
      </div>
    );
  }
  
  export default Login;