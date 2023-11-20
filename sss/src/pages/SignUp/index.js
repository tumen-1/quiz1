import { useState,useEffect } from 'react';
import {useRouter} from 'next/navigation';
import css from './index.module.css'
export default function Home() {
  const [UserName, setUserName] = useState("");
  const [key,setKey] = useState("")
  const router = useRouter();
  const add = async () => {
    const response = await fetch("http://localhost:8080/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserName, key }),
    });
    console.log(`complete`)
    setUserName("");
    setKey("");
    alert("complete now Log in")
  };
    return (
      <div className={css.body}>
        <div className={css.Div}>
            <h1>Quiz</h1>
            <div className={css.Div1}>
                <input 
                className={css.Input} 
                placeholder="UserName" 
                value={UserName} 
                onChange={(e) => setUserName(e.target.value)} />
                <input type='password' 
                className={css.Input} 
                placeholder="password" 
                value={key} 
                onChange={(e) => setKey(e.target.value)}/>
                <button onClick={add} className={css.lOGIN}>Sign Up</button>
            </div>
            <div>
                <button onClick={() =>router.push(`/login`)} className={css.button}>Log in?</button>
            </div>
        </div>
      </div>
    )
  }