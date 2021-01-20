var cors = require('cors');

function cors_config(app)
{
    app.use(cors({
        origin: ['http://localhost:4200', 'https://artemis-art.netlify.app'],
        methods: ['GET', 'PATCH', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
        credentials: true
    }));
}

module.exports={cors_config}