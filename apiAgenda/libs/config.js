module.exports = {
    database: "bancotcc",
    username: "sysdba",
    password: "masterkey",
    params: {
        dialect: "sqlite",
        storage: "bancotcc.sqlite",
        define: {
            underscored: true
        }
    }
};