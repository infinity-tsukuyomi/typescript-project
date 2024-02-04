import {IUser} from "./interfaces/user.interface";

const user: IUser = {
    name: "Max",
    age: 18,
    gender: 'male'
}

const sum = function (a: number, b: number) {
    return a + b
}

function showSum(a: number, b: number) {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number) {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);