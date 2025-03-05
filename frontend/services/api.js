import axios from "axios"


const API_URL= 'http://127.0.0.1:8000/api/'

// Register a doctor
export const registerDoctor = async (doctorData) => {
    try {
      const response = await axios.post(`${API_URL}auth/register_doctor/`, doctorData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  };
  
  // Login a user and get the token
  export const login = async (loginData) => {
    try {
      const response = await axios.post(`${API_URL}auth/login/`, loginData);
      return response.data.token; // Returns the token
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  };

  export const registerCustomer = async (customerData) => {
    try {
      const response = await axios.post(`${API_URL}auth/register_customer/`, 
        customerData, 
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.error("API Error:", error.response ? error.response.data : error.message);
      throw error.response ? error.response.data : error.message;
    }
  };
  