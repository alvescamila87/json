// utilizando o GET

const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}

// utilizando o GET com parâmetros

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data
            userName.textContent = data.name
            userCity.textContent = data.city
            userID.textContent = data.id
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

// utilizando o POST

function addNewUser(newUser) {
    axios.post(url, newUser) 
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

const newUser = {
    name: "Olivia Zars",
    avatar: "http://picsum.photos/200/300",
    city: "Curitiba"
}


// utilizando o PUT

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated) 
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

const userUpdated = {
    name: "Isabela Alves",
    avatar: "http://picsum.photos/200/300",
    city: "Gramado"
}

// utilizando o DELETE

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}


getUsers()

//addNewUser(newUser)

getUser(3)

updateUser(5, userUpdated)

//deleteUser(4)