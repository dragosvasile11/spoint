export const saveUser = async (user) => {
        const req = await fetch("http://localhost:8080/api/players/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: user
        })
        const response = await req
        if (response.ok) {
            console.log("USER REGISTERED")
        } else {
            console.log("REGISTRATION FAILED")
        }
    }
