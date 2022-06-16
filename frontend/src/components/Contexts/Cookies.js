import Cookie from "js-cookie";

export const setCookie = (name, value) => {
    Cookie.set(name, value , {
        expires: 300,
        secure: true,
        sameSite: "strict",
        path: "/"
    })
}

export const getCookie = (name) => {
    return Cookie.get(name)
}

export const getCookieObject = (name) => {
    return JSON.parse(Cookie.get(name))
}

export const removeCookie = (name) => {
    return Cookie.remove(name);
}
