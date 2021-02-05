# Milestone 2 - Design and Design Patterns
# Brendan McDonald, Aaditya Shah, Nick Taber, Radha Mendapra
## September 30, 2016

## Team Members and Roles

Brendan McDonald
Aaditya Shah
Nick Taber
Radha Mendapra

## Background

Pocketfilms is a website that collects short films, documentaries, indie films, and ‘how to’ videos from various sources and makes it available for viewing on their site. It allows users to login and enter information about a short film and upload a two minute preview video of the film. 
There is currently no way for users to personalize their list of movies.

## Project Description

We plan on designing and building a system that addresses the problem identified by the stakeholders of allowing users to personalize their movies catalog. Users would be able to personalize their list of movies by adding movies to favorites list and also by following their friends to keep track of what their friends are watching.

## Project Requirements

Here are some of the requirements for this project:
* Users can add movies into two categories - Watched and To Watch
* Add a movie to your favorites list
* Review and rate the movies
* Users can search for their friends by username and follow them to be up to date with the movies their friends are watching

## Business Rules

* Users can follow other users
* Users can rate films and change their rating
* Users can search for movies and other users

## Technologies Used

* MySQL
* NodeJS(or PHP if NodeJS has no interest)
* Javascript (angular)
* HTML
* CSS

## Timeline

* Requirements - September 9, 2016

For this milestone, we plan on completing our requirements document that would include information about current system, goals for our project, stakeholders details, scope, input, processing, output, and the data sources we would be using.

* Design and Design Patterns - September 30, 2016

For milestone 2, we will start our development book and also details about some of the design patterns we plan on using.

* Layering - October 7

For milestone 3, we plan on adding brief descriptions about our 3 layers, business, data, and presentation layer in our development book. We also plan on starting to layout and add code for our three layers.

* Exception Handling - October 21

For milestone 4, we plan on adding information about how we plan on handling exceptions in our development book. We also plan on adding exception handling to our code.

* Refactoring - November 4

For milestone 5, we plan on adding performance and refactoring details including code snippets in our development book. We plan to clean up and refactor our existing code. Along with that, we also plan to discuss code written by each other and make sure it all fits together.

* Testing - November 18

For milestone 6, we would like to add our testing strategy including code snippets and diagrams in our development book. We also plan to test our code based on this testing strategy and refactor it accordingly.

* Packaging - November 25

For milestone 7, we plan on adding in our development book details about packaging and deployment which would also include instructions on how to use our application. We also plan on adding help tab on our application for users. 

* Final code - December 9

For this last milestone, we plan on taking a look at all of our code and make sure it is commented well. We also plan on reviewing our development book before submitting it.

## Design Patterns

* MVC:

The primary design pattern that we will employ is the model-view-controller or MVC.
Our model will handle the collections of films and users. The controller will handle user’s abilities to follow each other, rate films, and manage their lists of films desired to be watched and films they have watched. 

* Observer:

Another pattern we would be using is Observer pattern. Here the button to follow friends is observable. If the follow button was pressed by the user, then the observer (friend here) would get notified.

* Facade

We will also be using Facade pattern which would help us put together all our subsystem such as rating mechanism, user follow functionality, etc into a unified interface to make our subsystems easier to use.
