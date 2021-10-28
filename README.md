# README

Setup:

1) build rails server

   1. Install Docker or Docker Desktop on your computer - you can follow this link to do it:
     https://docs.docker.com/get-docker/. You don't need to know Docker to complete the tasks, but feel free to read and learn more about it, it is pretty cool!

  2. Run the following commands sequentially in your shell:

      docker-compose build (installs dependencies and ruby gems)
      docker-compose run web rake db:create (creates a local database)
      docker-compose up (starts a rails server)


      So as you can see you do not have to install Ruby or Rails on your machine, they are already installed for you when you run this Docker container

  3. docker-compose up starts the rails server, so your app is ready to accept http requests

2) build client with react
   
   1. go to /client folder: cd /client
   2. run yarn install
   3. run yarn start

