interface User {
    id: number;
    userName: string;
    isAdmin: boolean;
}

const users: User[] = [
    { id: 1482, userName: "maurocpc", isAdmin: true },
    { id: 9452, userName: "anactc", isAdmin: true }
];

console.log(users[0]);