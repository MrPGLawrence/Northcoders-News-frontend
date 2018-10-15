import axios from "axios";
import { API_URL } from "./config";

export const getTopics = () => {
  return axios.get(`${API_URL}/topics`).then(({ data }) => data.topics);
};
