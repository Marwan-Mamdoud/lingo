// "use server";

const { API } = require("@/lib/createApi");

export const createUnit = async ({ title, description, order, courseId }) => {
  console.log({ title, description, order, courseId });

  const data = await API.post(`/create-unit`, {
    title,
    description,
    order,
    courseId,
  });
  if (data) return true;
};

export const deleteUnit = async ({ unitId }) => {
  console.log("hi");
  console.log(unitId);

  const data = await API.delete(`/delete-unit/${unitId}`);
  if (data) {
    console.log("done");
  } else {
    console.log("bad");
  }

  return true;
  // return data.data.massage
};

export const createLesson = async ({ title, unitId, order }) => {
  // console.log({ title, order, courseId });

  const data = await API.post(`/create-lesson`, {
    title,
    unitId,
    order,
  });
  if (data) return true;
};

export const deleteLesson = async ({ lessonId }) => {
  console.log("hi");

  const data = await API.delete(`/delete-lesson/${lessonId}`);
  if (data) {
    console.log("done");
  } else {
    console.log("bad");
  }

  return true;
  // return data.data.massage
};

export const createChallege = async ({ lessonId, type, question, order }) => {
  // console.log({ title, order, courseId });

  const data = await API.post(`/create-challenge`, {
    lessonId,
    type: "ASSIST",
    question,
    order,
  });
  if (data) return true;
};

export const deleteChallenge = async ({ challengeId }) => {
  console.log("hi");

  const data = await API.delete(`/delete-challenge/${challengeId}`);
  if (data) {
    console.log("done");
  } else {
    console.log("bad");
  }

  return true;
  // return data.data.massage
};

export const createOption = async ({ challengeId, text, correct }) => {
  // console.log({ title, order, courseId });

  const data = await API.post(`/create-option`, {
    challengeId,
    text,
    correct: correct === "True" ? true : false,
  });
  if (data) return true;
};

export const deleteOption = async ({ optionId }) => {
  console.log("hi");

  const data = await API.delete(`/delete-option/${optionId}`);
  if (data) {
    console.log("done");
  } else {
    console.log("bad");
  }

  return true;
  // return data.data.massage
};
