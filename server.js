
const express = require('express');
const sequelize = require('sequelize');
const passport = require('passport');


const db = require('./models');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());  
app.use(passport.initialize());
require("./config/passport")(passport);

// db.sequelize.sync({force: true}).then(() => {
//   console.log("db has been re sync");
// });

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));