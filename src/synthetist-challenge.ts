interface User {
    id: number;
    userName: string;
    isAdmin: boolean;
}

const users: User[] = [
    { id: 1482, userName: "maurocpc", isAdmin: true },
    { id: 9452, userName: "anactc", isAdmin: false }
];

console.log(users[0]);

/*
Write a piece of code that checks two things:
If the user isAdmin is true.
If the user userName is exactly your own (e.g., "maurocpc").
If both are true, log "Full System Access". If only one is true, log "Limited Access". If neither is true, log "No Access".
*/
const accessCheck = (user: User): string => {
    if (user.isAdmin && user.userName === "maurocpc") {
        return "Full System Access";
    } else if (user.isAdmin || user.userName === "maurocpc") {
        return "Limited Access";
    } else {
        return "No Access";
    }
}

accessCheck(users[0]!);
accessCheck(users[1]!);

/*
Use a .filter() to create a new array containing only the users who have isAdmin: true.
Log it to see if it correctly excluded any non-admins.
*/
const onlyAdmin = users.filter((user) => {
    return user.isAdmin;
})

console.log(onlyAdmin);