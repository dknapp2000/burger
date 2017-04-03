config = {
    app: { 
        port: 8080
    },
    db: {
        dev: {
            host: "localhost",
            port: "3309",
            user: "root",
            pass: "root",
            dialect: "MySql"
        },
        uat: {
            host: "localhost",
            port: "3309",
            user: "root",
            pass: "root",
            dialect: "MySql"
        },
        prod: {
            host: "localhost",
            port: "3309",
            user: "root",
            pass: "root",
            dialect: "MySql"
        }
    }
}

module.exports = config;