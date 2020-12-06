import http from "../http";

export function apiLogin({ email, password }) {
    return http.post("/login", {
        email,
        password
    }).then(function (response) {
        console.log(response);
    });
}
export function apiSignin({ email, password, nickname }) {
    return http.post("/signin", {
        email,
        password,
        nickname
    });
}