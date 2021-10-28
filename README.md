# README


Materials on Rails:

https://guides.rubyonrails.org/getting_started.html
https://guides.rubyonrails.org/active_record_basics.html
https://guides.rubyonrails.org/action_controller_overview.html


Setup:

1) All you need is to run this app is to

   1. Install Docker or Docker Desktop on your computer - you can follow this link to do it:
     https://docs.docker.com/get-docker/. You don't need to know Docker to complete the tasks, but feel free to read and learn more about it, it is pretty cool!

  2. Run the following commands sequentially in your shell:

      docker-compose build (installs dependencies and ruby gems)
      docker-compose run web rake db:create (creates a local database)
      docker-compose up (starts a rails server)


      So as you can see you do not have to install Ruby or Rails on your machine, they are already installed for you when you run this Docker container

  3. docker-compose up starts the rails server, so your app is ready to accept http requests




Tasks:

1) Create a controller action in names_controller.rb that accepts a POST http request with a person's name as a parameter and responds with a country code of a country where this name occurs most often (using this API):

https://api.nationalize.io/?name=jimmy (visit this link in your browser to see sample output!)


In addition this endpoint should create a Person object (an instanse of a Person model), containing the following columns: name and country_code (this should be the same country code as in the endpoint's response). Make sure that no duplicate objects are created for the same name (for example, if an object with a name Jimmy already exists, don't create another object with the same name).

Your endpoint's response can be in any data format, but probably JSON would be the easiest.
To respond with JSON from a rails controller action, you can simply do something like

render json: country_code, status: 200

2) Create another controller action called client_num in names_controller.rb accepting a country code as a request parameter and returning the number of Person objects in the database that have this country code

  Example:

    Person 1
      name: Jimmy
      country: US

    Person 2

      name: Clara
      country: UK

    Person 3
      name: Austin
      country: US

  If a request come with as country_code = 'US', response should be 2


Feel free to reach me with any questions at yshneyderman@rentnobee.com and good luck!
