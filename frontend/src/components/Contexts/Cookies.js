import Cookie from "js-cookie";

export const setCookie = (name, value) => {
    if (typeof value === "object") {
        value = JSON.stringify(value)
    }
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
    if (Cookie.get(name)) {
        return JSON.parse(Cookie.get(name))
    }
    return false
}

export const removeCookie = (name) => {
    return Cookie.remove(name);
}
