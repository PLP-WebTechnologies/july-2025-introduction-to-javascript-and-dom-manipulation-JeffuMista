
let recommendedMovies = [];
const recommendInput = document.getElementById("recommend-input");  
const recommendBtn = document.getElementById("recommend-btn");
//"Inception", "The Dark Knight", "Interstellar"
const mainBtn = document.getElementById("main-btn");
const newMovies = ["Star Wars: The Force Awakens", "Jumanji", "Red Notice"];
const movieList = document.getElementById("movie-list");
const recommendedList = document.getElementById("recommend-list");
const recommendedMoviesSection = document.getElementById("recommended-movies");

//function to add movies to the list
mainBtn.addEventListener("click", function() {
    newMovies.forEach(function(movie) {
        const li = document.createElement("li");
        li.textContent = movie;
        movieList.appendChild(li);
    });
    mainBtn.disabled = true; // Disable button after click
});
//function to add recommended movies to the list
function addRecommendation() {
    const movie = recommendInput.value.trim();
    if (!recommendedMovies.includes(movie) && movie !== "") {
        recommendedMovies.push(movie);
        recommendInput.value = ""; // Clear input field

        recommendedList.innerHTML = ""; // Clear existing list
        for (const film of recommendedMovies) {
        const newRecommendation = document.createElement("li");
        newRecommendation.textContent = film;  
        recommendedList.appendChild(newRecommendation);
        recommendedMoviesSection.style.display = "block"; // Ensure the list is visible
        }
    } else {
        alert("Please enter a movie name.");
    }   
}

recommendBtn.addEventListener("click", addRecommendation); // Add event listener to the button


