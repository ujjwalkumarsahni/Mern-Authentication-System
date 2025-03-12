npm init 
npm i express mongoose cors dotenv nodemon jsonwebtoken bcryptjs nodemailer cookie-parser

step 1: Create server with the help of server.js

step 2: connect the database with the help of config inside mongoDB.js and server.js in importing the file that is mongoDB.js

step 3: setting nodeMailer.js 
step 3: create userModel.js from models folder

step 4: create controller function from controllers folder with help of userModel

-----> register the user
        1. check the user exist or not 
        2. hash the password
        3. create the user in database
        4. Generate the token with the help of jsonwebtoken
        5. Setting the token in the cookie and send it
        6. Sending welcome email 
        7. Sending the final response 
-----> login the user
        1. check the user exist or not
        2. Checking if the password is correct
        3. Generating the token
        4. Setting the token in the cookie and send it
        5. Sending the response
        
-----> logout the user
        1. Clearing the cookie
        2. Sending the response

step 5: create authRoutes.js from routes with help of controller functions
-----> register routes : authRouter.post('/register', register);
-----> login routes : authRouter.post('/login', login);
-----> logout routes : authRouter.post('/logout', logout);




