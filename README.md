# NotesAppBot
**FRT Project**

**Project Demo Video URL:** 
- https://www.youtube.com/watch?v=14zMpYGPIUs
- https://www.loom.com/share/6a82a649bc0a4c6ebf060c5ec3620284?t=183&sid=b8716bdb-418b-4677-95aa-bed290cd83a5

**Deployement on AZURE static web app:** https://delightful-water-0584dd510.3.azurestaticapps.net

This is a simple web-based notes application built with HTML, CSS, and JavaScript. The app allows users to add, delete, and search notes. Additionally, it includes a chat interface with a Magic Assistant.

## Technologies Used

- HTML

Document Structure: The HTML file establishes the basic structure of the web page using standard HTML tags. It includes a head section with meta tags for character set and viewport configuration.

External Libraries: Utilizes Bootstrap (v5.3.2) via CDN for styling and responsiveness. Imports jQuery and Popper.js for Bootstrap functionality.

Navigation Bar: Implements a responsive navigation bar using Bootstrap's navbar component. Includes a Home link and a search form in the navigation bar.

Main Content: Contains a welcome message and two main sections: left and right. The left section is dedicated to adding and displaying notes. The right section features an embedded chat interface.

- CSS (Bootstrap for styling)

It defines the styling for the entire application. It customises the appearance of the navigation bar, buttons, cards, and other elements. Utilizes Bootstrap classes and adds custom styles for a cohesive and visually appealing design. It also ensures a responsive layout with CSS rules.

- JavaScript

Adding and Displaying Notes: Enables users to add notes with a title and text, storing them in the browser's local storage. Retrieves notes from local storage and dynamically displays them on the page.

Deleting Notes: Implements a function to delete notes with a confirmation prompt to prevent accidental deletions. Updates the local storage and refreshes the displayed notes.

Search Functionality: Implements a search feature that dynamically filters displayed notes based on user input. Updates the visibility of note cards based on the content matching the search query.

Interaction with External APIs: Embeds an iframe to integrate a chat interface with a Magic Assistant using the Bot Framework Web Chat API.

- Azure AI Bot

The chat interface embedded in the right section of application is powered by an Azure Bot. This bot is created using the Azure Bot Framework, providing conversational abilities to interact with users.

<img width="600" alt="Screenshot 2023-10-17 at 10 59 45 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/3693743e-2200-4072-8fa3-c22b7385dc61">  
<br> <br>

- Azure Static Web Apps

Azure Static Web Apps can simplify the deployment and hosting of static web applications. Instead of deploying app on traditional web hosting, we can use Azure Static Web Apps for a serverless hosting solution. It integrates with GitHub, providing a seamless deployment process whenever we push changes to our repository.

<img width="600" alt="Screenshot 2023-10-17 at 11 03 01 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/c6eb2b31-5684-44a1-a1e7-345d137949c6">
<br> <br>

- Azure AI Language

The Language service is a part of the Azure Cognitive Services offerings that can perform advanced natural language processing over raw text. It includes a custom question answering feature that enables us to create a knowledge base of question and answer pairs that can be queried using natural language input.

<img width="600" alt="Screenshot 2023-10-17 at 11 00 40 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/6ac8053f-9ef4-40a0-9312-c87057e00933">
<br> <br>

- Azure Cognitive Search

Azure Cognitive Search provides the infrastructure and tools to create search solutions that extract data from various structured, semi-structured, and unstructured documents.

<img width="600" alt="Screenshot 2023-10-17 at 7 29 39 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/831c7840-c4b3-459d-b7a1-b468667aa5d0">

<img width="600" alt="Screenshot 2023-10-17 at 11 01 23 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/b865ae5c-9013-4c7e-af25-83302ec24471">
<br>

## Question Answering Knowledge Base
<img width="600" alt="Screenshot 2023-10-17 at 9 05 05 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/5560d689-8d0e-4cd3-80fb-bc2bae82f20f">

## Getting Started

1. Clone the repository.
2. Open the `index.html` file in a web browser.

## User Interface
<img width="500" alt="Screenshot 2023-10-17 at 7 29 39 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/198000d4-b330-4fdb-a35c-8db0bff0c733">

## How to Use

- **Add a Note:** Fill in the title and text fields, then click the "Save" button.
<img width="500" alt="1" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/1955932c-6953-42fd-9fa3-f58b2062f69e">

- **Delete a Note:** Click the "Delete" button on the note you want to remove. A confirmation prompt ensures you don't accidentally delete important notes.
<img width="500" alt="2" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/db5c4e88-be41-495e-a8f3-150b30f79668">

- **Search Notes:** Enter keywords in the search bar to filter notes.
<img width="500" alt="3" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/2bfe3b4d-05b2-4e17-a32e-abac32ef8db3">

- **Bot Service:** Engage in a chat with the Magic Assistant to get assistance or information.
<img width="250" alt="4" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/0bb40b72-d46a-4825-8c7a-49a661096c81">

## Git Commands used to deploy this app on Github
git init

git add .

git commit -m "1st commit"

git remote add origin https://github.com/varunlaul24/NotesAppBot.git

git push -u origin master


## Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for styling.

## Future Enhancements

1. Mark a note as important.
2. Separate notes by user.
