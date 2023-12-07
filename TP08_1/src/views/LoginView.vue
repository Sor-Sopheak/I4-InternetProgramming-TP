<template>
    <div class="login">
        <form>
            <div class="imgcontainer">
                <img src="@/assets/avatar.png" alt="Avatar" class="avatar">
            </div>
            <div class="container">
                <label for="username">Username</label>
                <input type="email" placeholder="Enter Email" name="username" required>

                <label for="password">Password</label>
                <input type="password" placeholder="Enter Password" name="password" required>

                <button type="submit">Login</button>
            </div>
            <div class="container" style="background-color:#f1f1f1">
                <p class="password">Forgot <a href="#">password?</a></p>
            </div>
        </form>
    </div>    
</template>
  <style>
    @media (min-width: 800px) {
      .login {
        min-height: 100vh;
        display: flex;
        align-items: center;
      }
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }

    .login{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    form {
        border: 3px solid #f1f1f1;
        border-radius: 5px;
    }

    label{
        font-size: 20px;
    }

    input[type=email], input[type=password] {
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
        padding: 16px;
    }

    p.password {
        float: right;
        padding-top: 16px;
    }
  </style>