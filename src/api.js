import axios from "axios";
const API_URL = "https://patrick-northcoders-news.herokuapp.com/api";

export const getArticles = topic => {
  const url = topic
    ? `${API_URL}/topics/${topic}/articles`
    : `${API_URL}/articles`;
  return axios.get(url).then(({ data }) => data.articles);
};

export const getTopics = () => {
  return axios.get(`${API_URL}/topics`).then(({ data }) => data.topics);
};

export const getUsers = () => {
  return axios.get(`${API_URL}/users`).then(({ data }) => data.users);
};

export const getArticlesById = id => {
  return axios
    .get(`${API_URL}/articles/${id}`)
    .then(({ data }) => data.article);
};

export const getUsersByUsername = username => {
  return axios
    .get(`${API_URL}/users/${username}`)
    .then(({ data }) => data.user);
};

export const getArticlesByTopic = topicSlug => {
  return axios
    .get(`${API_URL}/topics/${topicSlug}/articles`)
    .then(({ data }) => data.articles);
};

export const getComments = () => {
  return axios.get(`${API_URL}/comments`).then(({ data }) => data.comments);
};

export const getCommentsForArticle = id => {
  return axios
    .get(`${API_URL}/articles/${id}/comments`)
    .then(({ data }) => data.comments);
};

export const postComment = (id, body, created_by) => {
  return axios
    .post(`${API_URL}/articles/${id}/comments`, { body, created_by })
    .then(({ data }) => data.comment);
};

export const deleteComment = id => {
  return axios
    .delete(`${API_URL}/comments/${id}`)
    .then(({ data }) => data.comment);
};

export const voteCount = (id, type, direction) => {
  return axios
    .patch(`${API_URL}/${type}/${id}?vote=${direction}`)
    .then(({ data }) => data.vote);
};

export const postArticle = (topicslug, title, body, created_by) => {
  return axios
    .post(`${API_URL}/topics/${topicslug}/articles`, {
      title,
      body,
      created_by
    })
    .then(({ data }) => data.article);
};
