export async function apiGet(url) {
    let response = await fetch(url, {
        method: "GET",
    });
    if (response.status === 200) {
        let data = response.json();
        return data;
    }
}

export async function apiPost(url, payload) {
    console.log("-----")
    console.log(payload)
    let response = await fetch(url, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(payload)
    });
    console.log(response)
    if (response.status === 200) {
        let data = response.json();
        return data;

    }
}

export async function apiGetWithJwt(url, jwt) {
    let response = await fetch(url, {
        method: "GET",
        headers: {"Content-type": "application/json", "Authorization": "Bearer " +jwt},
    });
    if (response.status === 200) {
        let data = response.json();
        return data;
    }
    else {
        return response.status;
    }
}
