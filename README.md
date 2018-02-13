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

*Note: Below are the libraries used in this project, you can install them manually if there's some problem with npm install:
1. "react": "^16.2.0",

2. "react-dom": "^16.2.0"

3. "react-icons": "^2.2.7"

4. "react-modal": "^3.1.13"

5. "react-redux": "^5.0.6"

6. "react-router-dom": "^4.2.2"

7. "react-scripts": "1.1.0"

8. "react-scroll": "^1.7.6"

9. "redux": "^3.7.2"

10. "redux-thunk": "^2.2.0"

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
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions
    │   └── index.js # stores all the redux actions.
    └── assets
        ├──images # images for the app
        │   ├── empty.png
        │   └── logo.icon
        └──App.css # Styles for the app
    └── components
        ├── App.js # This is the root the app, controlling all the pages/routes.
        ├── CreatePost.js # Create post modal
        ├── EditComment.js # Edit comment modal
        ├── EditPost.js # Edit post modal
        ├── Footer.js # Rendering personalized footer element.
        ├── Post.js # Rendering single post
        ├── PostDetails.js # Rendering the post details page (/:category/:post_id)
        ├── PostList.js # Rendering list of posts, used by root page and category page (/:category)
        └── SortMethod.js # Storing all the sort methods, and used by post list page to sort the posts
    └── reducers
        └── index.js # stores all the redux reducers.
    └── utils
        ├── helpers.js # storing all the utils / helpers method
        └── api.js # A JavaScript API for the provided Udacity backend.
    └── index.js # DOM rendering. Controlling redux middleware and router