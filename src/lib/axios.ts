import axios from "axios";

const BASE_URL = 'https://zipit-admin.onrender.com/api/v1';

const TEST_URL = 'http://localhost:3200/api/v1';

export default axios.create({
  baseURL: TEST_URL,
  method: 'get'
});