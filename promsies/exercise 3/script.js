document.addEventListener("DOMContentLoaded", () => {
    const usersContainer = document.getElementById("users");
    const errorContainer = document.getElementById("error");
    const usersEndpoint = "https://jsonplaceholder.typicode.com/users";
  
    fetch(usersEndpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(users => {
        users.forEach(user => {
          const userDiv = document.createElement("div");
          userDiv.classList.add("user");
          userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
          `;
          usersContainer.appendChild(userDiv);
        });
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        errorContainer.textContent = `An error occurred: ${error.message}. Please try again later.`;
      });
  });
  