# README

Setup:

1) build rails server

   1. Install Docker or Docker Desktop on your computer - you can follow this link to do it:
     https://docs.docker.com/get-docker/. You don't need to know Docker to complete the tasks, but feel free to read and learn more about it, it is pretty cool!

   2. Run the following commands sequentially in your shell:

      docker-compose build (installs dependencies and ruby gems)
      
      docker-compose run web rake db:create (creates a local database)
      
      docker-compose up (starts a rails server)


2) build client with react
   
   1. go to /client folder: cd /client
   
   3. run yarn install
   
   5. run yarn start

