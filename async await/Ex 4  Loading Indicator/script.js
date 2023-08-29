document.addEventListener("DOMContentLoaded", () => {
    const usersContainer = document.getElementById("users");
    const loadingIndicator = document.getElementById("loading-indicator");
  
    const usersURL = "https://jsonplaceholder.typicode.com/users";
  
    async function fetchUsers() {
      try {
        loadingIndicator.style.display = "block"; // Display the loading indicator
        
        const response = await fetch(usersURL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        const users = await response.json();
  
        users.forEach(user => {
          const userDiv = document.createElement("div");
          userDiv.className = "item";
          userDiv.innerHTML = `<strong>Name:</strong> ${user.name}<br>
                               <strong>Email:</strong> ${user.email}`;
          usersContainer.appendChild(userDiv);
        });
      } catch (error) {
        console.error(error);
        loadingIndicator.textContent = `An error occurred: ${error.message}. Please try again later.`;
      } finally {
        loadingIndicator.style.display = "none"; // Hide the loading indicator
      }
    }
  
    fetchUsers();
  });
  