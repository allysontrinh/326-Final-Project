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

document.getElementById('calendar').addEventListener('click', function() {
    var popup = document.getElementById('calendar-popup');
    if (popup.classList.contains('show')) {
        popup.classList.remove('show');
    } else {
        popup.classList.add('show');
    }
});

document.getElementById('set-reminder').addEventListener('click', function() {
    var reminderDate = document.getElementById('reminder-date').value;
    var reminderTime = document.getElementById('reminder-time').value;
    var reminderText = document.getElementById('reminder-text').value;

    var dateTimeString = reminderDate + ' ' + reminderTime;
    var reminderDateTime = new Date(dateTimeString);

    if (reminderText) {
        setReminder(reminderDateTime, reminderText);
        saveReminderToBackend(reminderDateTime, reminderText); // Save reminder to backend
        closePopup(); // Close the popup
    } else {
        alert('Please enter a reminder');
    }
});

// Function to set a reminder
function setReminder(dateTime, text) {
    // Get the current date and time
    var currentDateTime = new Date();
    currentDateTime.setSeconds(0, 0); // Reset seconds and milliseconds to zero for comparison

    // Check if the reminder time is in the future
    if (dateTime > currentDateTime) {
        // Show a message indicating that the reminder is set
        alert('Reminder set for: ' + dateTime.toLocaleString() + '\nReminder: ' + text);
        
        // Check for reminder match periodically
        var intervalId = setInterval(function() {
            var currentDateTime = new Date();
            currentDateTime.setSeconds(0, 0); // Reset seconds and milliseconds to zero for comparison

            if (currentDateTime.getTime() === dateTime.getTime()) {
                clearInterval(intervalId); // Stop the interval once reminder time is reached
                alert('Reminder: ' + text); // Display the reminder message
            }
        }, 60000); // Check every second (1000 milliseconds)
    }
    else{
        if (dateTime < currentDateTime) {
            alert('Please select a future date and time for the reminder');
        }
    }
}

// Example usage:
var reminderDateTime = new Date(); // Set your desired reminder date and time here
reminderDateTime.setSeconds(0, 0); // Reset seconds and milliseconds to zero for accuracy

setReminder(reminderDateTime, "Remember to do something");


function saveReminderToBackend(dateTime, text) {
    // Replace this with your actual backend API endpoint and AJAX request
    var apiUrl = 'https://example.com/saveReminder';
    var data = {
        datetime: dateTime.toISOString(),
        text: text
    };

    // Example of using fetch for AJAX request
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

function closePopup() {
    document.getElementById('calendar-popup').classList.remove('show');
}