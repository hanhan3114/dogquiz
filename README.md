// Get the main container that holds the quiz

// Get the element where the question text will be displayed

// Get the element that will contain all answer choices

// Get the "Next" button

// Get the "Submit" button

// Get the score display element

// Get the alert box (for correct/wrong messages)

// Get the start button

// Get the timer display element


// Create an array to store all quiz questions

        // The question text

        // The answer choices

        // The correct answer


// Store the current question index (start from 0)

// Store the user's score

// Check if quiz is finished

// Store remaining time for each question

// Store timer ID so we can stop it later



// Function to show the current question

    // Get current question object from quiz array

    // Display question text on screen

    // Clear previous choices

    // Loop through all choices
 
        // Get current choice text

        // Create a new div for this choice

        // Put text inside the div

        // Add class "choice" for styling

        // Reset any old styles (correct, wrong, selected)

        // Enable clicking again

        // Add this choice to the choices container

        // Add click event to each choice

            // Remove "selected" from all choices

            // Add "selected" to the clicked one (only 1 allowed)

    // Show Submit button

    // Hide Next button

    // Start the timer



// Function to check if answer is correct

    // Get selected choice (the one with class "selected")

    // Get correct answer from quiz array

    // Get all choices

    // Disable clicking on all choices

    // Highlight the correct answer (green)

    // If no answer selected (time up)

        // Show "Time's up" message

    // If selected answer is correct

        // Show correct message

        // Increase score

    // If selected answer is wrong

        // Remove "selected" style

        // Add "wrong" style (red)

        // Show wrong message with correct answer

    // Stop the timer

    // Hide Submit button

    // Show Next button

    // Change Next button text to "Next"



// Function to show final score
    
    // Clear question and choices

    // Display score
    
    // Show completion message

    // Mark quiz as finished

    // Hide timer

    // Change Next button text to "Play Again"

    // Show Next button



// Function to display alert message

    // Show alert box

    // Set alert text

    // Hide alert after 2 seconds



// Function to start timer
    
    // Stop any existing timer

    // Reset time to 15 seconds

    // Display current time

    // Countdown function

        // Decrease time by 1

        // Update display
 
        // If time reaches 0

            // Stop timer

            // Automatically check answer (time up case)

    // Run countdown every 1 second



// Function to stop timer

    // Clear the timer interval



// Function to shuffle questions randomly

    // Loop from last question to first

        // Generate random index

        // Swap positions

    // Reset question index

    // Show first question



// Function to start quiz

    // Reset time

    // Show timer

    // Shuffle questions and start



// When user clicks start button

    // Hide start button

    // Hide title

    // Show quiz container

    // Start quiz



// When user clicks submit button

    // Get selected answer

    // If no answer selected → show alert

    // Otherwise → check answer



// When user clicks next button

    // If quiz finished

        // Reset score and state

        // Hide quiz container

        // Show start button and title

    // Otherwise

        // Move to next question

        // If still have questions → show next question

        // If no more questions → stop timer and show score
