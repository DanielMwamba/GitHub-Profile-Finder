//  API USED => https://api.github.com/user/user_name



// Sélection des éléments HTML
const inputUser = document.querySelector("#search");
const valueEnter = document.querySelector("#input");
const userImg = document.querySelector(".main-info");
const bio = document.querySelector("#bio");
const repos = document.querySelector("#repo");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");

// Fonction pour récupérer les informations de l'utilisateur à partir de l'API GitHub

const fetchUser = (username) => {
	
		fetch(`https://api.github.com/users/${username}`)

			.then((data) => data.json())
			.then((jsonData) => {

				console.log(jsonData);

				if (jsonData.message == "Not found") {
					alert("User Not Found");
					return;
					// console.log("Error" + jsonData.message); 
				} else {
					userImg.innerHTML = ` 
					<img src="${jsonData.avatar_url}" alt="avatar" id="prof-img"> 
					<span class="name" id="name">${jsonData.name}</span> 
					<a href="${jsonData.html_url}" id="username">@${jsonData.login}</a> 
					`;
					bio.innerHTML = jsonData.bio;
					repos.innerHTML = jsonData.public_repos;
					followers.innerHTML = jsonData.followers;
					following.innerHTML = jsonData.following;
				}

			})
			
	}



	// Fonction pour gérer la recherche de l'utilisateur
	const handleSearch = () => {
		const username = valueEnter.value.trim();

		if (username.length === 0) {
			alert("Please enter a valid GitHub username");
			return;
		}

		fetchUser(username);
		valueEnter.value = "";
	};

	// Écouteur d'événement pour la soumission du formulaire
	inputUser.addEventListener("click", (event) => {
		event.preventDefault();
		handleSearch();
	});







