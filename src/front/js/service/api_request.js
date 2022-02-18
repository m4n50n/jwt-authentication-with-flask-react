const URL = "https://3001-4geeksacademy-reactflask-ze11bp894tn.ws-eu32.gitpod.io/api/user";

// Fetch functions definition
export const ApiUserRegister = (userCredentials) =>
    fetch(`${URL}/register`, {
        method: "POST",
        body: JSON.stringify(userCredentials)
    });

export const ApiUserLogin = (userCredentials) =>
    fetch(`${URL}/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials)
    });

export const ApiUserValidation = () =>
    fetch(`${URL}/validate`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token"),
        }
    });

export const ApiUserLogout = () => localStorage.removeItem("api-flask-token");
