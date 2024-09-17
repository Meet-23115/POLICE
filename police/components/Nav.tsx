import React from 'react';
const Nav=()=>{
    return(
      <>
      
      <ul className=' flex justify-between bg '>
        <li>home</li>
        <li>about us </li>
        <li>dashboard</li>
        <li>contact us</li>
      </ul>
      <div>
        <div className='kj'>
        <div className='flex items-center justify-center'>
          <h1>Sign UP Liko.</h1>
      </div>
        <div className='flex items-center justify-center'>
          <span>don't have an account? Sign in</span>
        </div>
        <div className='flex items-center justify-center'>
          <img src="/singupgoogle.png" className='h-[50px] w-[100px]' alt="" />
        </div>

      <div className=' flex items-center justify-center ' >
        <div className='hj'>
          <label htmlFor="h1" >Your Email</label>
          <br />
          <input type="text " placeholder='Enter your mail' className='hj' />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input type="text" placeholder='type password' className='hj1' />
          <br />
          <div className='flex gap-5 '>
            <div>
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
            </div>
            <div>
          <label htmlFor="">Forgot password?</label>
          </div>
          </div >
         
          </div>
          
        </div>
        </div>
     
      </div>
      
      </>

    )
  }
  export default Nav;