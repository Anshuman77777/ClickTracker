import axios from "axios";
import { backend } from "./config.js";

export async function signup(email, password) {
    try {
        const result = await axios.post(backend + '/auth/register', {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error.message);
    }

}
export async function login(email, password) {
    try {
        const result = await axios.post(backend + '/auth/login', {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.log(error.message);
    }
}
//await signup('kanyeeast@gmail.com', 123142);
//await login('kanyeeast@gmail.com', 123142);