# NotesAppBot
**QuickNotes: The Magic App**

**Microsoft FRT Project**

**Project Demo Video URL:** 
- https://youtu.be/Kppl_Rw00Cw
- https://www.loom.com/share/a9c80c8d4d93439196d28a7807aa8b13
- https://drive.google.com/file/d/1d9N1RRyItfxYKK8rryBWotCxt9yt3Prx/view?usp=sharing

This is a simple web-based notes application built with HTML, CSS, and JavaScript. This Magic Notes App aims to provide users with a user-friendly digital notes app for quick and easy note-taking, organisation, and retrieval. Additionally, it includes a chat interface with a Magic Assistant. In the digital age, individuals often find themselves in need of a seamless and efficient way to capture and organize their thoughts, ideas, and important information. Traditional methods of note-taking may lack the flexibility and accessibility required in today's dynamic lifestyle. Users seek a user-friendly and feature-rich digital solution that allows them to create, store, and manage their notes effortlessly, enhancing productivity and ensuring that valuable information is readily available when needed.

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

- NodeJS

- Azure AI Bot Service

The chat interface embedded in the right section of application is powered by an Azure Bot. This bot is created using the Azure Bot Framework, providing conversational abilities to interact with users.

Steps involved in building a Azure AI Bot Service which provides a framework for developing, publishing, and managing bots on Azure:
- Automatic bot creation functionality, enables us to create a bot for our deployed knowledge base and publish it as an Azure AI Bot Service application.
- Testing the bot in an interactive test interface.
- Connecting channels

<img width="600" alt="Screenshot 2023-10-20 at 4 43 52 AM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/e4326ae2-1e12-4337-870f-5ea8651f0dda">
<img width="600" alt="Screenshot 2023-10-17 at 10 59 45 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/3693743e-2200-4072-8fa3-c22b7385dc61">  
<br> <br>

- Azure AI Language Service

The Language service is a part of the Azure Cognitive Services offerings that can perform advanced natural language processing over raw text. It includes a custom question answering feature that enables us to create a knowledge base of question and answer pairs that can be queried using natural language input.

<img width="600" alt="Screenshot 2023-10-17 at 11 00 40 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/6ac8053f-9ef4-40a0-9312-c87057e00933">
<br> <br>

- Azure Cognitive Search Service

Azure Cognitive Search provides the infrastructure and tools to create search solutions that extract data from various structured, semi-structured, and unstructured documents.

<img width="600" alt="Screenshot 2023-10-17 at 7 29 39 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/831c7840-c4b3-459d-b7a1-b468667aa5d0">

<img width="600" alt="Screenshot 2023-10-17 at 11 01 23 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/b865ae5c-9013-4c7e-af25-83302ec24471">
<br>

## Question Answering Knowledge Base

Steps involved in building a Question Answering knowledge base:
- Provision a Language resource
- Define questions and answers
- Test the knowledge base
- Deploy the knowledge base

<img width="600" alt="Screenshot 2023-10-17 at 9 05 05 PM" src="https://github.com/varunlaul24/NotesAppBot/assets/90101931/5560d689-8d0e-4cd3-80fb-bc2bae82f20f">

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

## Features
1. User-Friendly Interface: This makes it easy for users to interact with the application.

2. Effortless Note-Taking: Users can quickly jot down notes using a simple form. 

3. Organised Storage: All notes are stored in the user's browser localStorage, ensuring easy and secure access to previously saved notes without the need for account creation.

4. Search Functionality: Users can search for specific notes by entering keywords. 

5. Delete Confirmation: To prevent accidental data loss, the app incorporates a delete confirmation prompt feature. 

6. Responsive Design: A consistent and enjoyable user experience across various devices.

7. Integrated Bot:
The Magic Assistant chatbot provides users with an interactive and intuitive way to seek assistance or engage in conversations, adding an extra layer of functionality and convenience to the note-taking experience.

## Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for styling.

## Future Enhancements

1. Mark a note as important.
2. Edit Notes
3. Separate notes by user.