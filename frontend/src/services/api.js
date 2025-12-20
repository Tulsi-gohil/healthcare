const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

async function request(path, opts = {}) {
  const headers = opts.headers || {};
  if (!headers["Content-Type"]) headers["Content-Type"] = "application/json";

  const token = localStorage.getItem('token');
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${path}`, { ...opts, headers, body: opts.body ? JSON.stringify(opts.body) : undefined });
  let data;
  try {
    data = await res.json();
  } catch (e) {
    return { success: res.ok, message: 'No JSON response' };
  }

  if (!res.ok) return { success: false, message: data.message || 'Request failed', ...data };
  return data;
}

// Auth
export const signupUser = async (userData) => {
  return await request('/auth/register', { method: 'POST', body: userData });
};

export const loginUser = async (loginData) => {
  return await request('/auth/login', { method: 'POST', body: loginData });
};

export const getUserProfile = async () => {
  return await request('/auth/profile', { method: 'GET' });
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};

// Appointments
export const bookAppointment = async (appointmentData) => {
  return await request('/appointments/book', { method: 'POST', body: appointmentData });
};

export const getMyAppointments = async () => {
  return await request('/appointments/my', { method: 'GET' });
};

export const getAllAppointments = async () => {
  return await request('/appointments', { method: 'GET' });
};

export const cancelAppointment = async (id) => {
  return await request(`/appointments/${id}`, { method: 'DELETE' });
};

export default { signupUser, loginUser, getUserProfile, logoutUser, bookAppointment, getMyAppointments, getAllAppointments, cancelAppointment };