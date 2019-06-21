db.createUser(
        {
            user: "ufood",
            pwd: "ufood@QWERTY",
            roles: [
                {
                    role: "readWrite",
                    db: "ufood"
                }
            ]
        }
);