import userModel from "../model/user_profile.model.js";

const userController = {
    listUser: async function (req, res) {
        try {
            const result = await userModel.getAllUsers()
            res.status(200)
            res.json({
                message: "Get All User Success",
                data: result
            })
        }
        catch (err) {
            console.log('Get User Failed');
        }
    },

    createUser: async function (req, res) {
        try {
            const { username, email, password, phonenumber, photo } = req.body;
            const result = await userModel.postUsers(username, email, password, phonenumber, photo);
            res.status(200)
            res.json({
                message: "Create User Success",
                data: result
            })
        }
        catch (err) {
            console.log(err.message);
        }
    },

    updateUser: async function (req, res) {
        try {
            const id = req.params.user_id;
            const { rowCount, rows } = await userModel.findId(id)
            if (!rowCount) {
                throw new Error("User Id Not Found")
            }

            const data = rows[0]
            console.log(data);
            try {
                // const userData = req.body
                const {user_id, username, email, password, phonenumber, photo } = req.body
                const result = await userModel.updateUsers(user_id, username, email, password, phonenumber, photo)
                res.status(200)
                res.json({
                    message: "Update User Success",
                    data: result
                })
            }
            catch (error) {
                console.log(error.message);
            }


        }
        catch (err) {
            console.log(err.message);
        }
    },

    deleteUser: async function (req, res) {
        try {
            const { user_id } = req.params
            const result = await userModel.deleteUsers(user_id)
            res.status(200)
            res.json({
                message: "Delete All User Success",
                data: result
            })
        }
        catch (err) {
            console.log('Delete User Failed');
        }
    }
}

export default userController;