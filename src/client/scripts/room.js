document.getElementById('notebook').addEventListener('click', function() {
    window.location.href = './notebook.html'; 
});

document.getElementById('wardrobe').addEventListener('click', function() {
    window.location.href = './wardrobe.html'; 
});

document.getElementById('logout').addEventListener('click', function() {
    window.location.href = './index.html'; 
});

document.addEventListener('DOMContentLoaded', function() {
    let isPlaying = false;

    document.getElementById('music-button').addEventListener('click', function() {
        const audio = document.getElementById('study-music');
        const musicButton = document.getElementById('music-button');
        
        if (isPlaying) {
            audio.pause();
            musicButton.innerHTML = "Play Music";
        } else {
            audio.play();
            musicButton.innerHTML = "Stop Music";
        }
        isPlaying = !isPlaying;
    });
});

document.getElementById('cat').addEventListener('click', function() {
    const treat = document.getElementById('treat');
    
    // Reset treat position
    treat.style.top = '290px';
    treat.style.left = '360px';
    
    // Show treat
    treat.classList.remove('hidden');

    // Start animation
    treat.style.animation = 'treatAnimation 1s forwards';
    
    // Hide treat after animation ends
    treat.addEventListener('animationend', function() {
        treat.classList.add('hidden');
    });
});

//Toggle calendar pop up 
document.getElementById('calendar').addEventListener('click', function() {
    var popup = document.getElementById('calendar-popup');
    if (popup.classList.contains('show')) {
        popup.classList.remove('show');
    } else {
        popup.classList.add('show');
    }
});

//Get input from user
document.getElementById('set-reminder').addEventListener('click', function() {
    var reminderDate = document.getElementById('reminder-date').value;
    var reminderTime = document.getElementById('reminder-time').value;
    var reminderText = document.getElementById('reminder-text').value;

    var dateTimeString = reminderDate + ' ' + reminderTime;
    var reminderDateTime = new Date(dateTimeString);

    if (reminderText) {
        setReminder(reminderDateTime, reminderText);
        saveReminderToBackend(reminderDateTime, reminderText); // Save reminder to backend
        closePopup(); 
    } else {
        alert('Please enter a reminder');
    }
});

function setReminder(dateTime, text) {
    // Get the current date and time
    var currentDateTime = new Date();
    currentDateTime.setSeconds(0, 0);

    // Check if the reminder time is in the future
    if (dateTime > currentDateTime) {
        // Show a message indicating that the reminder is set
        alert('Reminder set for: ' + dateTime.toLocaleString() + '\nReminder: ' + text);

        // Check if there's a previous reminder with the same date and time
        fetch('/getReminders')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch reminders');
                }
                return response.json();
            })
            .then(reminders => {
                const matchingReminder = findMatchingReminder(reminders, dateTime);
                if (matchingReminder) {
                    // If a matching reminder is found, update it with PUT
                    updateReminder(matchingReminder._id, text);
                } else {
                    // Otherwise, proceed with setting the reminder
                    scheduleReminderCheck(dateTime, text);
                }
            })
            .catch(error => {
                console.error('Error fetching reminders:', error.message);
            });
    } else if (dateTime < currentDateTime) {
        alert('Please select a future date and time for the reminder');
    }
}

function findMatchingReminder(reminders, dateTime) {
    return reminders.find(reminder => new Date(reminder.datetime).getTime() === dateTime.getTime());
}

function scheduleReminderCheck(dateTime, text) {
    //check if the current time matches the reminder time
    var intervalId = setInterval(function() {
        var currentDateTime = new Date();
        currentDateTime.setSeconds(0, 0); // Reset seconds and milliseconds to zero for comparison
        //if it's the right time, display the reminder
        if (currentDateTime.getTime() === dateTime.getTime()) {
            clearInterval(intervalId); //stop the interval once reminder time is reached
            getReminders(); //get and alert with the reminder message
        }
    }, 60000); // Check every minute 
}


var reminderDateTime = new Date(); // Set desired reminder date and time here
reminderDateTime.setSeconds(0, 0); // Reset seconds and milliseconds to zero for accuracy

function saveReminderToBackend(dateTime, text) {
    var apiUrl = '/saveReminder';
    var data = {
        datetime: dateTime.toISOString(),
        text: text
    };

    //Using fetch, GET/POST/PUT/DELETE methods 
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save reminder');
        }
        console.log('Reminder saved successfully');
    })
    .catch(error => {
        console.error('Error saving reminder:', error.message);
    });
}

function getReminders() {
    var apiUrl = '/getReminders'; //connect to endpoint 
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch reminders');
        }
        return response.json();
      })
      .then(reminders => {
        showReminder(reminders);
      })
      .catch(error => {
        console.error('Error fetching reminders:', error.message);
      });
  }

  function showReminder(reminders) {
    reminders.forEach(reminder => {
      alert('Reminder: ' + reminder.text);
      deleteReminder(reminder._id); //Delete remind after showing it to the user
    });
  }

  function updateReminder(id, datetime, text) {
    var apiUrl = '/updateReminder/' + id;
    var data = {
      datetime: datetime,
      text: text
    };
  
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update reminder');
        }
        console.log('Reminder updated successfully');
      })
      .catch(error => {
        console.error('Error updating reminder:', error.message);
      });
  }

  function deleteReminder(id) {
    var apiUrl = '/deleteReminder/' + id;
  
    fetch(apiUrl, {
        method: 'DELETE'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete reminder');
        }
        console.log('Reminder deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting reminder:', error.message);
      });
  }

  
document.addEventListener('DOMContentLoaded', function () {
    getReminders();
});

function closePopup() {
    document.getElementById('calendar-popup').classList.remove('show');
}