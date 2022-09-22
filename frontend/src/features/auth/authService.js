import axios from '../../services/axios';

const login = async (data) => {
  try {
    const response = await axios.post('/login', data);
    return response.data;
  } catch (e) {
    const error = e.response.data;
    return error;
  }
};

const register = async (data) => {
  try {
    const response = await axios.post('/', data);
    return response.data;
  } catch (e) {
    const error = e.response.data;
    return error;
  }
};

const authService = {
  register,
  login,
};

export default authService;
