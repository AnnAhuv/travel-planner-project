document.addEventListener("DOMContentLoaded", () => {
    const usersURL = "https://jsonplaceholder.typicode.com/users";
    const usersContainer = document.getElementById("users");
    const loadingIndicator = document.getElementById("loading-indicator");
  
    // Display loading indicator
    loadingIndicator.style.display = "block";
  
    // Fetch users from JSONPlaceholder
    fetch(usersURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((users) => {
        // Process users data
        users.forEach((user) => {
          const userDiv = document.createElement("div");
          userDiv.classList.add("item");
          userDiv.innerHTML = `<h2>${user.name}</h2><p><strong>Email:</strong> ${user.email}</p>`;
          usersContainer.appendChild(userDiv);
        });
  
        // Hide loading indicator
        loadingIndicator.style.display = "none";
      })
      .catch((error) => {
        // Handle errors
        loadingIndicator.style.display = "none";
        const errorDiv = document.createElement("div");
        errorDiv.classList.add("item");
        errorDiv.style.color = "red";
        errorDiv.textContent = `An error occurred: ${error.message}. Please try again later.`;
        usersContainer.appendChild(errorDiv);
      });
  });
  