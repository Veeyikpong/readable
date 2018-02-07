const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}	

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getAllCategories = () =>
fetch(`${api}/categories`, { headers })
.then(res => res.json())

export const fetchPostsByCategory = (category) =>
fetch(`${api}/${category}/posts`, { headers })
.then(res => res.json())	

export const getComments = (postID) =>
fetch(`${api}/posts/${postID}/comments`, { headers })
.then(res => res.json())

export const addComment = (data) =>
fetch(`${api}/comments`,
{
  method: 'POST',
  headers:{
      ...headers,
      'Content-Type': 'application/json'
    },
 body: JSON.stringify(data)
})
.then(res => res.json())