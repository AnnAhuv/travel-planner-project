const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';

const usersPromise = fetch(usersURL).then(response => response.json());
const postsPromise = fetch(postsURL).then(response => response.json());

Promise.all([usersPromise, postsPromise])
  .then(([users, posts]) => {
    const usersContainer = document.getElementById('users');
    const postsContainer = document.getElementById('posts');

    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('item');
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      usersContainer.appendChild(userDiv);
    });

    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('item');
      postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => {
    const errorContainer = document.getElementById('error');
    errorContainer.textContent = `An error occurred: ${error.message}. Please try again later.`;
  });
