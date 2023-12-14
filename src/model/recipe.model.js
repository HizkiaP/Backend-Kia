import db from '../config/db.js'

const recipeModel = {
    getAllUsers: function () {
        try {
            return db.query('SELECT * FROM recipe')
        }
        catch (err) {
            console.log(err.message);
        }
    },

    postUsers: function ({recipe_id, title, ingredients, photo, video, created_at, updated_at}) {
        try {
            return db.query(`INSERT INTO recipe (recipe_id, title, ingredients, photo, video, created_at, updated_at)
            VALUES (${recipe_id}, '${title}', '${ingredients}', '${photo}', '${video}', ${created_at}, ${updated_at})
            `)
        }
        catch (err) {
            console.log(err.message);
        }
    },

    updateUsers: function (title, ingredients, photo, video, created_at, updated_at) {
        try {
            return db.query(`UPDATE recipe SET title = ${title}, ingredients = ${ingredients},
            photo = ${photo}, video = ${video}, created_at = ${created_at}, updated_at = ${updated_at}
            `)
        }
        catch (err) {
            console.log(err.message);
        }
    },

    deleteUsers: function (recipe_id) {
        try {
            return db.query(`DELETE FROM recipe WHERE recipe_id = ${recipe_id}`)
        }
        catch (err) {
            console.log(err.message);
        }
    },

    findId: function (id){
        try {
            return db.query(`SELECT * FROM recipe WHERE recipe.recipe_id = ${id}`)
        }
        catch (err) {
            console.log(err.message);
        }
    }

}

export default recipeModel;