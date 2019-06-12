### Node Express Knex Router with middleware (logger, validateId, validateBody)

Ready to roll out the box with several features. A .env file is set up, and used in the get route found on the server's '/' route. This in my opinion allows for a basic message about deployment and any other vital information as well as allowing for the client to verify the server is active.

File structure
Routing
Knex configuration for development
Helmet for extra security
Ready for model implementation
Simply change some of the semantics to personalize to your application.

###Initialzation
-download repo from zip
-load all files/folders from inside root, into desired location of project
-npm i

###Start Server
-npm run server 

###Initiate database
-npx knex migrate:make create_example_table
-npx knex migrate:latest
-npx knex seed:make create_example_seed
-inside of seed, make sure to change return knex('example').del() to return knex('example').truncate()
-npx knex seed:run

