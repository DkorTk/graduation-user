import http from "../http";

export function apiLogin({ username, password }) {
    return http.post("/login", {
        username,
        password
    }).then(function (response) {
        console.log(response);
    });
}
export function apiSignin({ username, password, nickname }) {
    return http.post("/signin", {
        username,
        password,
        nickname
    }).then(function (response) {
        console.log(response);
    });
}