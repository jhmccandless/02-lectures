import { v4 as uuidv4 } from "uuid";

export const ADD_DOCUMENT = "ADD_DOCUMENT";
export function addDocument(title, content) {
  return {
    type: ADD_DOCUMENT,
    payload: {
      id: uuidv4(), // Generate a unique ID
      title,
      content,
    },
  };
}

export const DELETE_DOCUMENT = "DELETE_DOCUMENT";
export function delDocument(id) {
  return {
    type: DELETE_DOCUMENT,
    payload: {
      id,
    },
  };
}
export const UPDATE_DOCUMENT = "UPDATE_DOCUMENT";
export function updateDocument(id, title, content) {
  return {
    type: UPDATE_DOCUMENT,
    payload: {
      id,
      title,
      content,
    },
  };
}

export const SET_SELECTED = "SET_SELECTED";
export function setSelected(id) {
  return {
    type: SET_SELECTED,
    payload: {
      id,
    },
  };
}

export const SET_SEARCH = "SET_SEARCH";
export function setSearch(text) {
  return {
    type: SET_SEARCH,
    payload: {
      text,
    },
  };
}
