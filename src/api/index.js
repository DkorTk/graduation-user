import http from "../http";

export function apiLogin(data) {
    return http.post("/login", {
        data
    });
}
export function apiSignin({ email, password, nickname }) {
    return http.post("/signin", {
        email,
        password,
        nickname
    });
}