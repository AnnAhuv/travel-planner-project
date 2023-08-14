// Initialize the array of users
const users = [
    {
      id: 167464,
      firstName: 'Jimmy',
      lastName: 'Arnold',
    },
    {
      id: 578447,
      firstName: 'Martha',
      lastName: 'Goldman',
    },
    {
      id: 864578,
      firstName: 'Tim',
      lastName: 'Burton',
    },
  ];
  
  // Fetch the target container element
  const target = document.querySelector('.container');
  
  // Create an ordered list element
  const olEl = document.createElement('ol');
  
  // Style the list to remove bullet points
  olEl.style.listStyleType = 'none';
  
  // Loop through each user and create list items
  users.forEach((user) => {
    const liEl = document.createElement('li');
    liEl.setAttribute('data-id', user.id);
    liEl.textContent = user.firstName + ' ' + user.lastName;
    olEl.append(liEl);
  });
  
  // Append the ordered list to the target container
  target.append(olEl);
  