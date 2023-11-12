import axios from "axios";

let url = "http://localhost:3050/api/user";

const loginIdAPI = async (data) => {
  try {
    let response = await axios({
      method: "post",
      url: `${url}/login`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

const signUpAPI = async (data) => {
  try {
    let response = await axios({
      method: "post",
      url: `${url}/signup`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

const updateUserInfo = async (data, id) => {
  try {
    let response = await axios({
      method: "patch",
      url: `${url}/${id}`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export { loginIdAPI, signUpAPI, updateUserInfo };
