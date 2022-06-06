export const logUser = async (user) => {
        const req = await fetch("http://localhost:8080/api/players/check-if-player-exists", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: user
        })
        .then((response) => response.json())
            .then((responseJSON) => {
                if (responseJSON) {
                    console.log("USER LOGGED")
                } else {
                    console.log("LOGIN FAILED")
                }
                console.log(responseJSON);
            })
}
