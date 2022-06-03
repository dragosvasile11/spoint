import Cookie from "js-cookie";

export const setCookie = (name, value) => {
    Cookie.set(name, value , {
        expires: 300,
        secure: true,
        sameSite: "strict",
        path: "/"
    })
}

export const getCookie = (name, value) => {
    return Cookie.get(name, value)
}

export const removeCookie = (name) => {
    return Cookie.remove(name);
}
