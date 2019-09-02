const recipeService = (() => {
    function shareRecipe(data){
        return kinvey.post('appdata','recipes', 'kinvey', data)
    }

    function getAllReceipts() {
        return kinvey.get('appdata','recipes','kinvey');
    }

    function getReceipt(id) {
        return kinvey.get('appdata', `recipes/${id}`, 'kinvey');
    }

    function editReceipt(id, data,newMeal,newIngredients,newPrep,newDescription,newImg,newCategory) {

        data.meal = newMeal;
        data.ingredients = newIngredients;
        data.prepMethod = newPrep;
        data.description = newDescription;
        data.imageURL = newImg;
        data.category = newCategory;
        return kinvey.update('appdata', `recipes/${id}`, 'kinvey', data);
    }

    function deleteReceipt(id) {
        return kinvey.remove('appdata', `recipes/${id}`, 'kinvey');
    }

    function likeRecipe (id) {
        return kinvey.update('appdata',`recipes/${id}`, 'kinvey');

    }

    return{
        shareRecipe,
        getAllReceipts,
        getReceipt,
        editReceipt,
        deleteReceipt,
        likeRecipe,
    }
})();