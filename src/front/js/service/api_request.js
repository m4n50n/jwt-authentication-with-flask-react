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

export const ApiUserValidation = () => {
    const token = localStorage.getItem("token");

    return fetch(`${URL}/validate`, {
        method: "POST",
        headers: {
            "Authorization": token,
        },
        body: JSON.stringify(token)
    });
}