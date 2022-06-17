export const saveUser = async (user) => {
        const req = await fetch("http://localhost:8080/api/players/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: user
        })
        const response = await req

        return await req.json()
    }
