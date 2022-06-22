import { v4 as uuidv4 } from 'uuid';


let users = [];

const getUsers = (req,res) => {
    res.send(users);
}

const createUser = (req,res) => {
    const user = req.body;
    users.push({ id: uuidv4(), ...user });
    res.send("USER ADDED SUCCESSFULY !");
}

const getUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user)=> user.id === id);
    if(!user){
        res.send("USER NOT FOUND !");
    }
    else{
        res.send(user);
    }
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user)=> user.id !== id);
    res.send("USER DELETED SUCCESSFULY !")
}

const modifyUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const user = users.find((user)=> user.id === id);

    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;

    res.send("USER UPDATED SUCCESSFULY !");
}

export { getUsers, createUser, getUser, deleteUser, modifyUser }