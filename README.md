# Milestone 1 - Requirements
# Brendan McDonald, Aaditya Shah, Nick Taber, Radha Mendapra
## September 9, 2016


## Glossary

* __Pocketfilms__ - It is an Indian aggregator and distributor of alternate content. They help short films, documentaries, etc., find their target audience on internet and mobile platforms.

* __OMDb API__ - An unofficial API for IMDb, a massive online database with extensive information on all types of movies and TV shows.

## Current System

The existing system used by pocketfilms is a website that collects short films, documentaries, indie films, and ‘how to’ videos from various sources and makes it available for viewing on their site. It allows user to login and enter information about a short film and upload a two minute preview video of the film. The information available on their site is limited to each channel and contest. There is currently no way for users to personalize their list of movies.

## Goals
We plan on designing and building a system that addresses the problem identified by the stakeholders of allowing users to personalize their movies catalog. Here are some of the requirements outlined:
* Users can add movies into two categories - Watched and To Watch
* Add a movie to your favorites list
* Review and rate the movies
* Users can search for their friends by username and follow them to be up to date with the movies their friends are watching


## Stakeholders

* Users:
 They want to keep track of movies they have watched and want to watch
 They want to be up to date with the movies their friends are watching

* Admin:
 This system would be independent and admins would be the developers

* Developers: 
 Brendan McDonald, Aaditya Shah, Nick Taber, Radha Mendapra

* Sponsor:
 PocketFilms - They are the customer and would want to integrate this system for their mobile app

## Scope
 It will be a web based application involving user profile, favorite movies, and follow friends.

## Input
Users can add the following inputs:
* Have they watched it? Yes or No -> Would go into two categories.. Watched and To Watch
* Movies list from OMDb API
* Movie title, year, plot, and response for plot in json format entered by the user when searching the log by title
* ID, plot, and response for plot in json entered by the user when searching the log by ID
* User input will be received as users queries the data
* Users would be able to favorite and rate a movie
* User will be able to view what their friends they follow favorited
* User will be able to search for their friends by username


## Processing
* Searches will be run based on movie titles, year, plot, and movie ID
* Searches will be run for other users by username or real name
* IMDb information will be constantly added to the database
* If movies or users are removed, databases will be updated

## Output
For users, developers, sponsor, admin:
 * Tracking of films watched and want to watch
 * Feed of what your friends that you follow are watching

## Data Sources
* [Pocket Films](http://pocketfilms.in/)

Pocket Films bridges the gap between filmmakers and audiences. They are based out of Mumbai, India. They enable filmmakers to showcase their creativity to a large audience and also to monetise. Users can upload their short films (which are different from mainstream Hollywood and Bollywood movies) to the Pocket Films website and then allow the Pocket Films team to upload, advertise and generate profit for the film.

* [OMDb](http://www.omdbapi.com) 

The OMDb API is a free web service to obtain movie information, all content and images on the site are contributed and maintained by the users. Requests sent to OMDb return a JSON object of almost everything about the movie, from plot, runtime, and director to IMdb rating, awards, the poster, and other sites’ scores. The IMDb ID for the movie is also returned which help with data about films with the same titles and other database aspects as we develop it further.
