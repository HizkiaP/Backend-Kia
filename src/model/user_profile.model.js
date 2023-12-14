import db from '../config/db.js';

const userModel = {
    getAllUsers: function () {
        try {
            return db.query('SELECT * FROM user_profile')
        }
        catch (err) {
            console.log(err.message);
        }
    },

    postUsers: function (username, email, password, phonenumber, photo) {
        try {
            return db.query(`INSERT INTO user_profile (username, email, password, phonenumber, photo)
            VALUES (${username}', '${email}', '${password}', '${phonenumber}', '${photo}')
            `)
        }
        catch (err) {
            console.log("Error Query");
        }
    },
    
    updateUsers: function (user_id, username, email, password, phonenumber, photo) {
        try {
            return db.query(`UPDATE user_profile SET username = '${username}', email = '${email}',
            password = '${password}', phonenumber = '${phonenumber}', photo = '${photo}'
            WHERE user_id = ${user_id}`)
        }
        catch (err) {
            console.log(err.message);
        }
    },

    deleteUsers: function (user_id) {
        try {
            return db.query(`DELETE FROM user_profile WHERE user_id = ${user_id}`)
        }
        catch (err) {
            console.log(err.message);
        }
    },

    findId: function (id){
        try {
            return db.query(`SELECT * FROM user_profile WHERE user_id = ${id}`)
        }
        catch (err) {
            console.log(err.message);
        }
    }

}

export default userModel;