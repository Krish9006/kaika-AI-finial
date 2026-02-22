const BASE_URL = "http://localhost:5000/api";

export const api = {
    post: async (endpoint, data) => {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const json = await response.json();

        if (!response.ok) {
            throw new Error(json.error || "Something went wrong");
        }

        return json;
    },
    get: async (endpoint, token) => {
        const headers = {
            "Content-Type": "application/json",
        };
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "GET",
            headers: headers,
        });

        const json = await response.json();

        if (!response.ok) {
            throw new Error(json.error || "Something went wrong");
        }

        return json;
    }
};
