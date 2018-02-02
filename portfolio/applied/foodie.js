var users {
	/*createUser: function createUser(email, username, password){
		/*Button to create a new user, taking three strings and adding them to the database
	},
	userLogIn: function logIn(username, password){
		/*Button to allow users to log in to their accounts
	},
	userBase: [],
	var user{
		username:"",
		password:"",*/
var posts {
	allPosts: [],
	addPost: function createPost{
		description: "",
		addDescription: function addDescription(string){
			/*Should take input, as a string, from the user on the website in a query box
			and then concat to the empty description string.*/
		},
		editDescription: function editDescription(stringEdit){
			/*Should take the original description and allow the user to edit it in a new
			query box, in which the current description will be displayed to the user and
			the user should be able to edit it. Then replace the current description with 
			the previous one.*/
		},
		deleteDescription: function deleteDescription(){
			/*Button/function allowing the user to delete what the post says*/
		},
		instructions: "",
		addInstructions: function addInstructions(instructions){
			/*Takes a string of instructions from a query box and concats to the
			instruction string.*/
		},
		editInstructions: function editInstructions(instructionEdit){
			/*Takes a string of edited instructions and replaces the pre-existing
			instructions. Should essentially show the user the already existing instructions
			and allow for editing.*/
		},
		deleteInstructions: function deleteInstructions(){
			/*Button should allow for deletion of the string of instructions that already exists.*/
		},
		ingredients: [],
		addIngredient: function addIngredients(ingredient){
			/*should take a string containing the ingredient, and how much was used, then
			append it to the array containing all ingredients.*/
		},
		editIngredient: function editIngredient(ingredientEdit){
			/*should be a button, allowing the user to edit an ingredient from the array.
			Button allows for easy access to the array of ingredients.*/
		},
		deleteIngredient: function deleteIngredient(){
			/*Should also be a button, making it easier accessing the the array.*/
		},
		pictures: [],
		addPic: function addPic(picture){
			/*Takes a jpg image and adds it to the array of pictures.*/
		},
		deletePic: function deletePic(){
			/*Button that should allow user to delete the picture.*/
		},
		postFood: function finishPost(){
			/*Button should allow user to finish creating their post and add it to the
			array of existing posts.*/
		}
	},
	removePost: function deletePost(){
		/*Button should call this function and allow for the user to delete the post.
		Easy access to the post b/c button linked with array.*/
	}
	likes: 0,
	comments: []
	}
}