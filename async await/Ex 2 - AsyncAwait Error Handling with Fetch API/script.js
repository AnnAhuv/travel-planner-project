document.addEventListener("DOMContentLoaded", () => {
    const usersContainer = document.getElementById("users");
    const errorContainer = document.getElementById("error");
  
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const users = await response.json();
  
        users.forEach(user => {
          const userDiv = document.createElement("div");
          userDiv.className = "user";
          userDiv.innerHTML = `<h2>${user.name}</h2>
                               <p><strong>Email:</strong> ${user.email}</p>`;
          usersContainer.appendChild(userDiv);
        });
      } catch (error) {
        console.error(error);
        errorContainer.textContent = "An error occurred while fetching users.";
      }
    }
  
    fetchUsers();
  });
  