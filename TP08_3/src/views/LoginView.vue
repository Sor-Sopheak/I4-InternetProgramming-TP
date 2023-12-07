<template>
  <div class="login">
    <div class="imgcontainer">
      <img src="@/assets/avatar.png" alt="Avatar" class="avatar">
    </div>
    <div class="container">
      <label for="username">Username</label>
      <input type="username" placeholder="Enter Username" ref="username" required>

      <label for="password">Password</label>
      <input type="password" placeholder="Enter Password" ref="password" required>
      <button type="submit" id="login" v-on:click="login();">Login</button>
      </div>
      <div class="forgotpassword">
        <p class="password">Forgot <a href="#">password?</a></p>
      </div>
  </div>    
</template>
  <style>
    @media (min-width: 800px) {
      .login {
        margin-top: 30px;
        min-height: 70vh;
        display: flex;
        align-items: center;
      }
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }

    .login{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 3px solid #f1f1f1;
        border-radius: 5px;
        /* height: 500px; */
    }

    label{
        font-size: 20px;
    }

    input[type=username], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    button {
        background-color: #04AA6D;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    button:hover {
        opacity: 0.8;
    }

    .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
    }

    img.avatar {
        width: 40%;
        border-radius: 50%;
    }

    .container {
        padding: 5px;
    }

    .forgotpassword{
      background-color: #f1f1f1;
      width: 100%;
      /* margin-top: 0; */
      /* float: right; */
    }

    .password {
        float: right;
        /* padding-top: 6px; */
    }
  </style>
  <script>
  export default {
    name: "Login",
    data(){
      return{
        username: '',
        password: ''
      }
    },
    methods:{
      login(){
        fetch('http://localhost:3001/login', {
          method: 'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            "username":this.$refs.username.value, 
            "password":this.$refs.password.value
          })
        }).then(res => {
          return res.json();
        }).then((data) => {
          console.log(data);
          if(data.success == true){
            this.$router.push('/home')
          }
        })
      }
    }
  }
  </script>