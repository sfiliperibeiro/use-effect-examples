import { useEffect, useState } from "react";

const UsersList = () => {

    const [user, setUser] = useState();

    const handleChange = (event) =>{

        setUser(event.target.value);

    };

    useEffect(() =>{
        const storedUser = localStorage.getItem("user");
        storedUser && setUser(storedUser);
    }, []);

    useEffect(() => {
        localStorage.setItem("user", user);
    }, [user]);


    return(
        <select value={user} onChange={handleChange}>
            <option>Maria</option>
            <option>João</option>
            <option>Tiago</option>
            <option>Francisca</option>
        </select>
    )
}

export default UsersList;