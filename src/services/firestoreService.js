import { db } from "../firebase";

const db = firebase.collection("/calendar-hours");

const getAll = () => {
  return db;
};

const create = (data) => {
  return db.add(data);
};

const update = (id, value) => {
  return db.doc(id).update(value);
};

const remove = (id) => {
  return db.doc(id).delete();
};

export const TutorialService = {
  getAll,
  create,
  update,
  remove
};