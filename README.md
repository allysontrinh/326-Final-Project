# Welcome Home!

#### This is a final project designed and built for CS326 (Web Programming). The goal was to create an interactive and aesthetically-pleasing web app that allows users to enter a 'virtual safe space' where they can journal, set reminders, feed their virtual cat (how cute!?), play music, and customize their character.

## Tech-stack
#### Javascript/HTML/CSS
#### Express
#### PouchDB
#### Node

## Command to run: 
#### npm start
#### To properly run everything with Google OAuth, go to this doc for instructions: https://docs.google.com/document/d/1osIG_1NZ1YiO34Q53JWky-RB4PNbcdfKZTFJn54ydII/edit?usp=sharing 

## Overview
#### Welcome Home consists of 4 main routes: log-in, home, wardrobe, and notebook. All backgrounds and assets are hand-drawn to encapsulate a homey feeling. When a user logs in with Google OAuth, their user session and consequently their data (journal entries, character customization, and settings) are remembered thanks to Express.js middleware and Passport.js. 

## Log-In
#### For authentication, we chose to use Google OAuth to make things simple: You can sign in with your Gmail of choice to go right to the main room. 
<img width="477" alt="Screen Shot 2024-05-31 at 1 07 42 PM" src="https://github.com/allysontrinh/326-Final-Project/assets/124815798/0fb65ad0-0f32-4ba8-9590-0050d74dd42f">

## Room
#### From the room, you can access the closet, mediation corner, your cat, a calendar, and the Notebook. Click on each to check them out! Your cat loves napping and getting pats on the head: try clicking on him to give him a treat! :)
<img width="1438" alt="Screen Shot 2024-05-31 at 1 08 03 PM" src="https://github.com/allysontrinh/326-Final-Project/assets/124815798/82f77487-3b44-4e0e-aab9-82fdafef8062">

## Closet
#### In the closet, you can customize your character with multiple different options for your eyes, mouth, nose, eyebrows, hair, clothes, and accessories! Feel free to spend as much time as you want dressing up your character; the possibilites are endless! What look will you go for today?
<img width="1430" alt="Screen Shot 2024-05-31 at 1 08 36 PM" src="https://github.com/allysontrinh/326-Final-Project/assets/124815798/6762befb-632f-4bbd-a297-1413e04394cd">

## Notebook 
#### Opening up the Notebook allows you to jot down anything and everything on your mind. Thanks to PouchDB, you can save whatever you write down, just make sure to title your entry! Need to refer back to page you wrote earlier? No problem! You can access all of your saved entries through the drop-down menu. Made a mistake and want to delete one page, or ALL pages? Easy! Use this space to structure your To-Do list, take notes, or journal whatever you feel like. 
<img width="1438" alt="Screen Shot 2024-05-31 at 1 09 17 PM" src="https://github.com/allysontrinh/326-Final-Project/assets/124815798/3308cc4a-f386-4109-86b0-0404cf1a797b">

# API Endpoints:
- /saveReminder : saves the reminder inputted by the user in the calendar into the PouchDB 
- /getReminders : returns all reminders in the PouchDB
- /updateReminder/:id : updates an existing reminder in the PouchDB with docID 'id'
- /deleteReminder/:id : deletes an existing reminder in the PouchDB with docID 'id'


#### Thanks for stopping by <3
#### - Girls in STAM (Sarah, Tanishka, Allyson, Megan)

