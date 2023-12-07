const { readUsers } = require("../db/db");

const login = (username, password) => {
    //read all user
    const users = readUsers();
    console.log(username);
    //compare user
    for(let i=0; i<users.length; i++){
        let user = users[i];
        if(user.username == username){
            if(user.username == username){
                return {
                    success : true,
                    data : user
                }
            }
        }
    };
    return {
        success : false,
        err : "Your Email or Password is incorrect"
    }
}

module.exports = {
    login
}