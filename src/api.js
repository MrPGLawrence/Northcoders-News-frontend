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
