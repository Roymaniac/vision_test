// Mock data
const users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 25 },
    { id: 3, firstName: 'Tom', lastName: 'Smith', age: 40 },
    { id: 4, firstName: 'Jerry', lastName: 'Johnson', age: 35 }
];

interface User {
    id?: number;
    firstName?: string;
    lastName?: string;
    age?: number;
    [key: string]: any;
}

export function getModelData(modelName: string, fields?: string[], filters?: string) {
    if (modelName === 'User') {
        if (filters && filters.length > 0) {
            try {
                const filteredUsers: any = users.filter((user: User) => {
                    const filter = JSON.parse(filters);
                    for (const [key, value] of Object.entries(filter)) {
                        if (user[key] !== value) {
                            return false;
                        }
                    }
                    return true;
                });
                return filteredUsers;
            } catch (error) {
                console.error('Invalid filters');
            }
        }

        if (fields && Array.isArray(fields) && fields.length > 0) {
            console.log("Function called with fields:", fields);
            const filteredUsers: User[] = [];
            users.forEach((user: User) => {
                const filteredUser: User = {};
                fields.forEach((field: string | number) => {
                    filteredUser[field] = user[field];
                });
                filteredUsers.push(filteredUser);
            });
            return filteredUsers;
        }
        else {
            console.log("Function called without fields");
        }
        // return users;
    }
}

