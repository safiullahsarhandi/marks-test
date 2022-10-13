const { env } = require('../@core/helpers');

module.exports = {
    app_name : env('APP_NAME','Express-Wrapper'),
    
    providers : [
        require('../app/providers/appProvider'),
    ],
}