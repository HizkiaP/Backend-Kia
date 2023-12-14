import recipeModel from "../model/recipe.model.js";

const recipeController = {
    listUser: async function (req, res) {
        try {
            const result = await recipeModel.getAllUsers()
            res.status(200)
            res.json({
                message: "Get All Recipe Success",
                data: result
            })
        }
        catch (err) {
            console.log('Get Recipe Failed');
        }
    },

    createUser: async function (req, res) {
        try {
            const { title, ingredients, photo, video, created_at, updated_at } = req.body
            const data = {
                recipe_id,
                title,
                ingredients,
                photo,
                video,
            }
            const result = await recipeModel.postUsers(data)
            res.status(200)
            res.json({
                message: "Create Recipe Success",
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
            const { rowCount, rows } = await recipeModel.findId(id)
            if (!rowCount) {
                throw new Error("Recipe Id Not Found")
            }

            const data = rows[0]
            console.log(data);

            const { title, ingredients, photo, video, created_at, updated_at } = req.body
            const result = await recipeModel.updateUsers(title, ingredients, photo, video, created_at, updated_at)
            res.status(200)
            res.json({
                message: "Update Recipe Success",
                data: result
            })
        }
        catch (err) {
            console.log('Update Recipe Failed');
        }
    },

    deleteUser: async function (req, res) {
        try {
            const { recipe_id } = req.params
            const result = await recipeModel.deleteUsers(recipe_id)
            res.status(200)
            res.json({
                message: "Delete All Recipe Success",
                data: result
            })
        }
        catch (err) {
            console.log('Delete Recipe Failed');
        }
    }
}

export default recipeController;