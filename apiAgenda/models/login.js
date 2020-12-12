module.exports = app => {
    return {
        findAll: (parametros, callback) => {
            return callback([
                { title: "tela de login" },
                { title: "insira seus dados"},
            ]);
        }
    };
};
