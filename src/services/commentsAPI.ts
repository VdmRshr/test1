import axios from './axios';
import {Comment} from "../types/CommentTypes";

export const getComments = () => {
    return axios.get(`/data`);
};

export const deleteComment = (id:string) => {
    return axios.delete(
        `data/${id}`
    );
};

export const addComment = (data:Comment) => {
    return axios.post(`data`, data);
};
