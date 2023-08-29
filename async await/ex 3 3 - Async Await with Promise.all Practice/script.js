document.addEventListener("DOMContentLoaded", () => {
    const usersContainer = document.getElementById("users");
    const postsContainer = document.getElementById("posts");
    const errorContainer = document.getElementById("error");
  
    const usersURL = "https://jsonplaceholder.typicode.com/users";
    const postsURL = "https://jsonplaceholder.typicode.com/posts";
  
    async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        throw new Error(`An error occurred: ${error.message}. Please try again later.`);
      }
    }
  
    async function displayData() {
      try {
        const [users, posts] = await Promise.all([fetchData(usersURL), fetchData(postsURL)]);
  
        users.forEach(user => {
          const userDiv = document.createElement("div");
          userDiv.className = "item";
          userDiv.innerHTML = `<strong>Name:</strong> ${user.name}<br>
                               <strong>Email:</strong> ${user.email}`;
          usersContainer.appendChild(userDiv);
        });
  
        posts.forEach(post => {
          const postDiv = document.createElement("div");
          postDiv.className = "item";
          postDiv.innerHTML = `<strong>Title:</strong> ${post.title}<br>
                               <strong>Body:</strong> ${post.body}`;
          postsContainer.appendChild(postDiv);
        });
      } catch (error) {
        errorContainer.textContent = error.message;
      }
    }
  
    displayData();
  });
  