// declaring dependencies
const express = require('express');
const path = require('path');

// loading express.js application
const app = express();

// middleware for json
app.use(express.json());

// middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// middleware for api router
app.use('/api/notes', require('./middleware/api'));

// middleware for html router
app.use('/', require('./middleware/html'));

// starting server
const PORT = process.env.PORT || 3000;

// binding and listnening to port 3000
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}....`);
});