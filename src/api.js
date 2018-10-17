import axios from "axios";
import { API_URL } from "./config";

export const getArticles = () => {
  return axios.get(`${API_URL}/articles`).then(({ data }) => data.articles);
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
    .post(`${API_URL}/articles/${id}/comments}`, body, created_by)
    .then(({ data }) => data.comment);
};
