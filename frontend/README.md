# Readable
This is Readable Project developed by PONG VEE YIK @ Udacity React Programme.

## How to launch the project
### Setup and Clone project
1. Open terminal, navigate to an empty folder and clone readable project using the following commands:
```js
git clone https://github.com/Veeyikpong/readable.git
```

### Installation
#### Server
You'll need to install the following libraries using npm install to setup the server, following these steps:
1. Navigate to the 'readable' folder on your terminal

2. Go into 'api-server' folder, install the libraries using
```js
npm install
```
** Wait for installation **

3. In the same folder, start the server using
```js
node server.js
```

#### Frontend (React source code)
You'll need to install the following libraries using npm install to setup the frontend, following these steps:
1. Navigate to the 'readable' folder on your terminal

2. Go into 'frontend' folder, install the libraries using
```js
npm install
```

3. In the same folder, start the project using
```js
node server.js
```
** Wait for installation **

### Start project
1. Navigate to 'readable' folder in terminal

2. Start the project with the following command:
```js
npm start
```

## Project Specifications
### Redux state management
✓ Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.

✓ Form inputs and controlled components may have some state handled by the component.

✓ Updates are triggered by dispatching actions to reducers.

✓ Reducers and actions are written properly and correctly return updated state to the store.

### Main Page (root)
✓ Listed posts are displayed with title, author, number of comments, current score, and a voting mechanism to upvote or downvote the post. Posts should have buttons or links for editing or deleting that post.

✓ The voting mechanism works and correctly displays the new vote score after clicking.

✓ List posts link to the detail page for that post.

✓ All posts are listed at the root.

✓ All posts for a category are listed at /:category (For example, http://localhost:3000/react)

✓ List pages (root or category) include a mechanism for sorting by date or by score (at a minimum) and the sort works properly.

✓ Able to create new post

✓ All available categories are visible in any list view. (Dropdown)

### Post Details Page
✓ Post detail is available at /:category/:post_id (For example, http://localhost:3000/react/8xf0y6ziyjabvozdd253nd)

✓ Post is displayed with title, body, author, number of comments, current score and voting mechanism. Post should have buttons or links for editing or deleting that post.

✓ Listed comments are displayed with author, current score, and a voting mechanism to upvote or downvote the comment. Comments should have buttons or links for editing or deleting that comment.

✓ The voting mechanism works and correctly displays the new vote score after clicking for both the post and comments.

✓ All comments for a post are displayed below the post body.

✓ A mechanism for adding a new comment is visible on the detail page and functional.

### Create new post modal / popup
✓ User can create new post by clicking on 'New Post' button which is visible in any posts list page

✓ User can enter author, title, message and desired post category.

✓ Data validation is performed and user must input all required values

### Edit post modal / popup
✓ User can edit existing post by clicking on edit icon at the top right of each post

✓ User can update tile or message for the post

✓ Data validation is performed and user must input all required values

### Edit post modal / popup
✓ User can edit existing post by clicking on edit icon at the top right of each post

✓ User can update title or message for the post

✓ Data validation is performed and user must input all required values

### Edit comment modal / popup
✓ User can edit existing comment by clicking on edit icon at the top right of each comment

✓ User can update message for each comment

✓ Data validation is performed and user must input all required values

### Delete comment / post
✓ User can delete comment and post by clicking on the delete icon (beside edit icon) at the top right of each post / comment

✓ A confirmation dialog will be prompted to confirm the deletion

## Project files
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── App.js # This is the root the app, controlling the main page, search page, api calls, state and all the child components.
    ├── ListBooks.js # Rendering main page, containing 3 shelves.
    ├── Shelf.js # Rendering shelf component to display list of books in this shelf. Used in main page (ListBook.js)
    ├── SearchBooks.js # Rendering search book page.
    ├── Footer.js # Rendering personalized footer element.
    ├── App.css # Styles for the app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.