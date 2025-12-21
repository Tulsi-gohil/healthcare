const BASE_URL = process.env.REACT_APP_API_URL || "https://healthcare-11-tjzq.onrender.com";

async function request(path, opts = {}) {
  try {
    const headers = opts.headers || {};
    headers["Content-Type"] = "application/json";

    const token = localStorage.getItem("token");
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(`${BASE_URL}${path}`, {
      ...opts,
      headers,
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    });

    // Try JSON first, fallback to text
    const text = await res.text();
    let data = text ? JSON.parse(text) : {};

    if (!res.ok) {
      return {
        success: false,
        message: data.message || res.statusText || "Request failed",
      };
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: "Server not responding / Network error",
    };
  }
}
