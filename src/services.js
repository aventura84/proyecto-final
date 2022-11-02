const parseResponse = async (response) => {
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

const endpoints = {
  user: process.env.REACT_APP_BACKEND + "/user",
  userById: (id) => process.env.REACT_APP_BACKEND + `/user/${id}`,
  postsByUserId: (id) => process.env.REACT_APP_BACKEND + `/user/${id}/posts`,
  login: process.env.REACT_APP_BACKEND + "/auth/login",
  posts: process.env.REACT_APP_BACKEND + "/post",
  postById: (id) => process.env.REACT_APP_BACKEND + `/post/${id}`,
};

const headers = {
  "Content-Type": "application/json",
};

// USER

const register = async ({ email, password }) => {
  const response = await fetch(endpoints.user, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: headers,
  });
  return parseResponse(response);
};

const login = async ({ email, password }) => {
  const response = await fetch(endpoints.login, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return parseResponse(response);
};

const retrieve = async (id) => {
  const response = await fetch(endpoints.userById(id));
  return parseResponse(response);
};

// POSTS

const getPost = async (id) => {
  const response = await fetch(endpoints.postById(id));
  return parseResponse(response);
};

const getUserPosts = async (id) => {
  const response = await fetch(endpoints.postsByUserId(id));
  return parseResponse(response);
};

const getPosts = async () => {
  const response = await fetch(endpoints.posts);
  return parseResponse(response);
};

export const sendPostService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deletePostService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/post/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

//export const deletePostService = async ({ id, token }) => {
//  const response = await fetch(`${process.env.REACT_APP_BACKEND}/post/${id}`, {
//    method: "DELETE",
//   headers: {
//     Authorization: token,
//    },
//  });

//const json = await response.json();

//  if (!response.ok) {
//   throw new Error(json.message);
// }
//};

const services = {
  user: {
    register,
    login,
    retrieve,
  },
  posts: {
    getPost,
    getPosts,
    getUserPosts,
  },
};

export default services;
