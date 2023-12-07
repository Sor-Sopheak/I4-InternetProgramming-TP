<template>
  <div class="wrapper">
    <nav class="navigation">
      <div class="gic">
        <div>
          <img src="@/assets/giclogo.png" alt="GIC Logo" class="giclogo">
        </div>
        <div class="gictext">
          GIC
        </div>
      </div>
      <div class="linkto">
        <a href="#" style="padding-right: 30px; color: black;">ABOUTUS</a>
        <a href="#" style="padding-right: 30px; color: black;">ACADEMICS</a>
        <a href="#" style="padding-right: 30px; color: black;">WHY GIC</a>
        <a href="#" style="padding-right: 30px; color: black;">LIFESTYLE</a>
        <a href="#" style="padding-right: 30px; color: black;">CONTACT</a>
      </div>
      <div class="searchlogout">
        <img src="@/assets/search.png" alt="Search" class="searchlogo">
        <h1>|</h1>
        <form action="/">
          <button id="logout" style="border: none;">Logout</button>
        </form>
      </div>
    </nav>
    <div class="container">
      <div class="left">
        <div class="title">
          <h1>Deep Learning Through Deep Connections.</h1>
          <p>Taking a deep dive.</p>
        </div>
        <div class="btn">
          <p>The hero's journey starts here. Become a learning legend.</p>
          <button type="submit">GET STARTED</button>
        </div>
        <div class="join">
          <p>Elevate your experience. Empower the nest generation.</p>
          <a href="#">JOIN OUR TEAM</a>
        </div>
      </div>
      <div class="rigth">
        <img src="@/assets/homepage.jpg" alt="Image Home Page">
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    position: relative;
    /* color: black; */
  }
  .wrapper{
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  nav{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 100px;
  }
  .gic{
    display: flex;
    margin: 50px;
  }
  .giclogo{
    width: 10vh;
  }
  .gictext{
    font-size: 45px;
    color: rgb(83, 81, 81);
    font-weight: 100;
    font-family: 'Source Code Pro', monospace;
    margin-left: 20px;
  }
  .searchlogout{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 50px;
  }
  .searchlogout h1{
    margin: 20px;
  }
  .searchlogo{
    width: 20px;
    height: 20px;
    margin-right: 30px;
  }
  #logout{
    height: 50px;
    color: rgb(235, 48, 169);
    font-size: 20px;
    background-color: white;
    border: none;
    font-weight: bold;
  }
  .linkto{
    display: flex;
    font-size: 20px;  
    color: black;  
  }
  .linkto a:link:nth-child(3){
    font-weight: bold;
  }
  .container{
    display: flex;
    margin-top: 20px;
    margin: 60px;
  }
  .left{
    width: 30%;
  }
  .title h1{
    font-family: 'Palanquin Dark', sans-serif;
    color: black;
    font-weight: bold;
    font-size: 40px;
  }
  .title p{
    font-style: italic;
    font-size: 20px;
  }
  .btn{
    margin-top: 30px;
  }
  .btn button{
    color: white;
    font-weight: bold;
    background-color: rgb(249, 103, 198);
    height: 40px;
    border: none;
    border-radius: 5px;
    width: 170px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .join{
    margin-top: 40px;
  }
  .join a{
    text-decoration: underline;
    font-size: 22px;
    color: black;
  }
  .rigth{
    position: relative;
    margin-left: 130px;
  }
  .rigth img{
    width: 100%;
  }
</style>
