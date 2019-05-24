# Marvel App
## Sumary
The app is based on a search of Marvel characters and list the comics where it appears. This is a final project for a Globant FrontEnd bootcamp.  
## Design
https://projects.invisionapp.com/prototype/Bootcamp-UI-React-Native-cjw0z361h000h2l01n766oaxk/play/9cfa5ee0
## API
The app should consume the Marvel Developer public API’s https://developer.marvel.com/ .
## Requirements
#### First & Second Screen
1_ US: As a guest user, I have to see all the characters listed in the first screen
Acceptance Criteria:
* Characters needs to be sorted alphabetically
* User needs to see the characters behave as a list
* As the user scrolls down, more characters should be loaded
* User has the ability to select any character from the screen and redirect to the third
screen (comic list, 3_US)
* All characters in the list must have the requested information
2_US: As a guest user, I need the ability to search a Marvel character so that I can find it quickly
Acceptance Criteria:
* User should see a watermark ‘Search Characters’ in the search box so that he can click
on it and type
* Once user types, at least three characters it needs to show me results if there is a match
* If there are no results, a text should be shown ‘No results found’
* If user wants to clear the search, application needs to have a remove button (x) and
show the first screen
* The search is based on the Character name
* User should see the search results as a dropdown list
* User should be able to select any character result of the search and redirect to the third
screen (comic list)
#### Third Screen
3_US: As a user, I need the ability to see the comics list related to the character selected
Acceptance Criteria:
* User should see the list of Comics, showing their image
* Clicking on the Comic image, it should redirect to the Comic Details screen (screen 4)
* A back button is needed so that user can go to the preview (first) screen
#### Fourth Screen
4_US: As a user, I have to see the details of the comic I selected
Acceptance Criteria:
* User have to see comic details information as follows (screen 4 design)
* A back button is needed so that user can go to the preview (third) screen
