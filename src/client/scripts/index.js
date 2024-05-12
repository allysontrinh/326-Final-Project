document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the sign-in button
    const signInButton = document.querySelector(".submit");

    // Add click event listener to the sign-in button
    signInButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission 

        // Redirect to the "Room" page
        window.location.href = '/src/client/room.html'; 
    });
});

// Create a new database instance
var db = new PouchDB('user_credentials');

// Add a new user
function addUser(username, password) {
  return db.get(username)
    .then(function (doc) {
      console.error('User already exists');
      throw new Error('User already exists');
    })
    .catch(function (err) {
      if (err.status === 404) {
        return db.put({
          _id: username,
          password: password
        }).then(function () {
          console.log('User added successfully');
        }).catch(function (err) {
          console.error('Error adding user:', err);
        });
      } else {
        console.error('Error adding user:', err);
      }
    });
}

// Authenticate 
function authenticateUser(username, password) {
  return db.get(username)
    .then(function (doc) {
      if (doc.password === password) {
        console.log('Authentication successful');
      } else {
        console.log('Incorrect password');
      }
    })
    .catch(function (err) {
      if (err.status === 404) {
        console.error('User not found');
      } else {
        console.error('Error authenticating user:', err);
      }
    });
}