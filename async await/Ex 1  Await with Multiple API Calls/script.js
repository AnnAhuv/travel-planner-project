document.addEventListener("DOMContentLoaded", () => {
    const usersContainer = document.getElementById("users");
  
    const BASE_URL = "https://jsonplaceholder.typicode.com";
  
    async function fetchUsers() {
      try {
        const response = await fetch(`${BASE_URL}/users`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const users = await response.json();
        return users;
      } catch (error) {
        console.error(error);
        throw new Error("An error occurred while fetching users.");
      }
    }
  
    async function fetchPosts(userId) {
      try {
        const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const posts = await response.json();
        return posts;
      } catch (error) {
        console.error(error);
        throw new Error("An error occurred while fetching posts.");
      }
    }
  
    async function displayUserAndPosts() {
      try {
        const users = await fetchUsers();
  
        users.forEach(async user => {
          const userContainer = document.createElement("div");
          userContainer.className = "user";
          userContainer.innerHTML = `<h2>${user.name}</h2>
                                     <p><strong>Email:</strong> ${user.email}</p>
                                     <div class="posts" id="posts-${user.id}"></div>`;
          usersContainer.appendChild(userContainer);
  
          try {
            const posts = await fetchPosts(user.id);
  
            const postsContainer = document.getElementById(`posts-${user.id}`);
            posts.forEach(post => {
              const postDiv = document.createElement("div");
              postDiv.className = "post";
              postDiv.innerHTML = `<p><strong>Title:</strong> ${post.title}</p>
                                   <p><strong>Body:</strong> ${post.body}</p>`;
              postsContainer.appendChild(postDiv);
            });
          } catch (error) {
            const errorDiv = document.createElement("div");
            errorDiv.className = "error-message";
            errorDiv.textContent = "Error loading posts for this user.";
            userContainer.appendChild(errorDiv);
          }
        });
      } catch (error) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.textContent = "Error loading users.";
        usersContainer.appendChild(errorDiv);
      }
    }
  
    displayUserAndPosts();
  });
  