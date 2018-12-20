## Objective

* My objective was to develop a full-stack web application that creates lodging listings to help users find accomodations. The app is intended to accept a users' location, dates (check-in/out), and price-per-night as parameters for its searches. Appter also enables a dual interface between renters (individuals renting-out their apartments) and guests.

* [Front-end repo](https://github.com/Jp293/appter-client)
* [Appter Application](https://jp293.github.io/appter-client/)
* [Back-end repo](https://github.com/Jp293/appter-rails-api)
* [Heroku Server](https://appter.herokuapp.com/)

## Technologies Used

* HTML
* CSS/SASS
* Javascript
* JQuery
* Handlebars
* AJAX
* Bootstrap

## Thought Process & Execution

* For the front-end of the project I had 3 main goals;
  - 1. Create a simple yet user-friendly webpage using HTML & SASS.
  - 2. Use Forms and Buttons (with Handlebars) to allow the user to initiate CRUD actions, which trigger AJAX calls to API.
  - 3. Create visual feedback for users via JQuery calls in the UI file. This would allow the user to be aware of what was happening as they interacted with the web page.
* Initially I created an appropiate repo for the front-end to be hosted on GitHub.
* Then I created some basic HTML for the webpage and assigned some of the elements classes and Ids.
* Using Javascript as the main language, I created code that would authenticate users by interacting with the back-end and yield tokens.
* Once authenticated, I made it possible for users to perform CRUD actions on the resource (listings) by communicating with the back-end.
* Users' authentication (token) would be destroyed once they decided to end their session or if the page refreshed/closed maintaining their resources protected.
* Once the I had the front-end making the right API calls and the back-end responding appropiately to those calls, I deployed the application. 
## User Stories & Wireframe

* After accessing the webpage users can sign-up/create an account which will render a success or error message.
* Users will be able to sign-in/log-in which will render a success or error message.
* Users will be able to view other their own and other users' listings by pressing a designated button to view listings.
* Users will be able to create listings, which accept address, check-in/check-out in dates, price per night as inputs. This action will also render a success or error message.
* Users will be able to delete only their own listings if desired. This action will also render a success message and an error message (particularly if users try to delete another user's listing.)
* Users will be able to update their only their own listings. Success and error messages will be rendered.
* Users will be able to sign-out/log-out. Success and error messages will be rendered in this instance as well.

## Wireframe

![Wireframe Images](https://i.imgur.com/mnphO7Y.jpg)
![Wireframe Images](https://i.imgur.com/Ryt4Dw6.jpg)
![Wireframe Images](https://i.imgur.com/d5pHJvU.jpg)
![Wireframe Images](https://i.imgur.com/c7jjdQh.jpg)

## Future Versions

I planned four more versions of the app to enable users to filter data with more efficiency.
* Attach images/photos to each listing for better advertisement.
* Filter data by price per night, location, availability in dates.
* Render a map to help users locate the listings by location.
* Create a communication feature to enable users chat amongst themselves to discuss listing details.
