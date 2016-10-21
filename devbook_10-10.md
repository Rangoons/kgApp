# Milestone 3 - Layering
# Brendan McDonald, Aaditya Shah, Nick Taber, Radha Mendapra
## October 10, 2016

## Team Members and Roles

Brendan McDonald - Backend Developer

Aaditya Shah - Front-end Developer

Nick Taber - Database Developer

Radha Mendapra - Database Developer

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
* User doesn’t enter any information about the plot, the user only searches for movies

## Business Rules

* There is no limit to the number of users a user can follow
* There is no limit to the number of movies a user can add to any list
* Users can mark a movie watched from the “to watch” list and it will be moved to the “Watched list”.
* There will be no movie in both the to watch list and the watched list
* User can make his own lists but the default lists will be “To watch” and “Watched”

## Technologies Used

* MySQL
* NodeJS
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

The primary design pattern that we will employ is the model-view-controller or MVC. The central component of MVC, model will handle the collections of films and users here. The controller will handle user’s abilities to follow each other, rate films, and manage their lists of films desired to be watched and films they have watched. It will convert this user input to commands for either the model or the view. This view is the output frontend representation of our data. The controller sends commands to the model to update it as the changes are being made by the user. The model stores this user data that is retrieved according to user’s actions from controller and then displayed in the view. The view then displays new output from the commands sent by controller based on the updated user actions in model. 

* Observer:

Another pattern we would be using is Observer pattern. Here the button to follow friends is observable. If the follow button was pressed by the user, then the observer would get notified. We would have an abstract observer class that would extend the user observer class.

* Facade

We will also be using Facade pattern which would help us put together all our subsystem such as rating mechanism, user follow functionality, etc into a unified interface to make our subsystems easier to use. We will have facade profile and newsfeed classes which would use concrete classes to delegate user calls. Our facade classes will be used to display the results.

## Layering

* Data Layer

Data layer needs to access list of movies and users. It needs to search for users and follow them. 
Movies would be searched for by movie title, year, director, actor, and keyword. 
We will be using OMDB as a proxy to get the data since we cannot use data from pocketfilms.

* Business Layer

Recommend users who have over X followers or are tagged as film critics.
Recommend movies that more than X friends have already watched or want to watch and is not in already watched list.
Users will be able to view and edit their only profile but only view other user profiles

* Presentation Layer

The presentation layer will handle the event listeners for all user actions such as following a user or adding a movie to a certain list. It will display the lists and the feed from a user’s ‘following’ list.

## Classes

* Data Layer

Movie class

Movie class is an object class that represents an individual movie object. Movie stores movie info including cast, crew, release year, and plot keywords. Movie class is not aware of the user class.

User class

Users are objects stored in our own database (not through movie API) that have name and basic personal information. They can also be related to movies through favoriting movies, rating movies, placing movies on watch lists, etc.

List class

Handles the individual user’s lists, containing a collection of movie objects, writing to and reading from the database.

* Business Layer

At this point, we do not see the business layer having any classes here.

* Presentation Layer

Profile class

The profile class will receive the data layer’s user class display it as a profile, allowing for edits if the profile is the that of the current user logged in.

Newsfeed class

The newsfeed class will have methods to process all of the information needed to create an individualized feed for each user. The constructor will accept a user id and construct the feed based on the user data. 

## Exception Handling

* Data Input invalid/unsanitary (dangerous syntax, etc.)
Layer: Data Layer and Business Layer 
Prevent it from going to data layer
In case if it goes to data layer, it will be handled in business layer
Exception: Query something that is invalid or syntactically problematic
Our Solution: Handled by preventing the query from getting through the database and inform with an error message
Example: User searches for a movie titled “Drop table `users` where 1=1”

* Using both client-side and server-side data validation and sanitization
Data no longer exists/updated
Layer: Data Layer, because you won’t know that the data has been until you try to access it.
Exception: Trying to access data that no longer exists or has been updated
Our Solution: Handled by informing user
Example: User deletes their account, other users’ following them need to have their lists updated

* Removing occurrences of the deleted user ID from related tables’ rows
Unable to access the database
Layer: Data Layer, for some reasons as above.
Exception:
Our Solution: Handled by informing user to re-install the application or contact the development
Example: Internal change that is not accounted for by the application such as operating system or architecture update, Passwords might be changed

* Incorrect Login Credentials	
Layer: Business Layer
Pull from the data layer and handled in business layer
Exception: Login credentials do not meet the requirements
Our Solution: Handled by informing user to re-enter their login information
Example: User either forgets their login information or types it incorrectly, User tries to access someone else’s account

* Duplicate Data 
Layer: Business Layer
Exception: Unique data would be overwritten if the query was to be committed
Our Solution: Handled by preventing user to register and informing them to re-register using different credentials
Example: Registering an account with a username/email that already exists

## Code Snippets

* Data / Business Layer

```
var express = require('express')
var mdb = require('moviedb')('7227ee533c81a8acbb443c98ec625841')
var app = express()
var movieRes = '';
  mdb.movieInfo({id: 666}, function(err, res){
    movieRes = JSON.stringify(res)
  })
app.get('/', function(req, res){
  res.send(movieRes)
})


app.listen(3000)
```

* Presentation Layer - Javascript

```
$(document).ready(function(){
	
	$(".movie-image").hover(function(){
		$(this).find(".play").show();

	},
	function()
	{
		$(this).find(".play").hide();
	});


	$(".blink").focus(function() {
            if(this.title==this.value) {
                this.value = '';
            }
        })
        .blur(function(){
            if(this.value=='') {
                this.value = this.title;                    
			}
		});
});

HTML

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en-US" xmlns="http://www.w3.org/1999/xhtml" dir="ltr">
<head>
	<title>Pocket Films</title>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
	<!--[if IE 6]>
		<link rel="stylesheet" href="css/ie6.css" type="text/css" media="all" />
	<![endif]-->
	<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
	<script type="text/javascript" src="js/jquery-func.js"></script>
</head>
<body>
<!-- Shell -->
<div id="shell">
	<!-- Header -->
	<div id="header">
		<h1 class="logo" id="logo"><a href="#">Pocket Films</a></h1>
		
		<!-- Navigation -->
		<div id="navigation">
			<ul>
			    <li><a class="active" href="#">HOME</a></li>
			    <li><a href="#">NEWS</a></li>
			    <li><a href="#">IN THEATERS</a></li>
			    <li><a href="#">COMING SOON</a></li>
			    <li><a href="#">CONTACT</a></li>
			    <li><a href="#">LOG IN / SIGN UP</a></li>
			</ul>
		</div>
		<!-- end Navigation -->
		
		<!-- Sub-menu -->
		<div id="sub-navigation">
			<ul>
			    <li><a href="#">SHOW ALL</a></li>
			    <li><a href="#">LATEST TRAILERS</a></li>
			    <li><a href="#">TOP RATED</a></li>
			    <li><a href="#">MOST COMMENTED</a></li>
			</ul>
			<div id="search">
				<form action="home_submit" method="get" accept-charset="utf-8">
					<label for="search-field">SEARCH</label>					
					<input type="text" name="search field" value="Enter search here" id="search-field" title="Enter search here" class="blink search-field"  />
					<input type="submit" value="GO!" class="search-button" />
				</form>
			</div>
		</div>
		<!-- end Sub-Menu -->
		
	</div>
	<!-- end Header -->
	
	<!-- Main -->
	<div id="main">
		<!-- Content -->
		<div id="content">

			<!-- Box -->
			<div class="box">
				<div class="head">
					<h2>LATEST TRAILERS</h2>
					<p class="text-right"><a href="#">See all</a></p>
				</div>
				
				<!-- Movie -->
				<div class="movie">
					<div class="movie-image">
						<a href="#"><span class="play"><span class="name">SPIDER MAN 2</span></span><img src="css/images/movie2.jpg" alt="movie" /></a>
					</div>
					<div class="rating">
						<p>RATING</p>
						<div class="stars">
							<div class="stars-in">
								
							</div>
						</div>
						<span class="comments">12</span>
					</div>
				</div>
				<!-- end Movie -->
				
				<!-- Movie -->
				<div class="movie">
					<div class="movie-image">
						<a href="#"><span class="play"><span class="name">SPIDER MAN 3</span></span><img src="css/images/movie3.jpg" alt="movie" /></a>
					</div>
					<div class="rating">
						<p>RATING</p>
						<div class="stars">
							<div class="stars-in">
								
							</div>
						</div>
						<span class="comments">12</span>
					</div>
				</div>
				<!-- end Movie -->
			
				<div class="cl">&nbsp;</div>
			</div>
			<!-- end Box -->
			
		</div>
		<!-- end Content -->

		<!-- NEWS -->
		<div id="news">
			<div class="head">
				<h3>NEWS</h3>
				<p class="text-right"><a href="#">See all</a></p>
			</div>
			
			<div class="content">
				<p class="date">12.04.09</p>
				<h4>Disney's A Christmas Carol</h4>
				<p>&quot;Disney's A Christmas Carol,&quot; a multi-sensory thrill ride re-envisioned by Academy Award&reg;-winning filmmaker Robert Zemeckis, captures... </p>
				<a href="#">Read more</a>
			</div>
		</div>
		<!-- end NEWS -->
		
		<!-- Coming -->
		<div id="coming">
			<div class="head">
				<h3>COMING SOON<strong>!</strong></h3>
				<p class="text-right"><a href="#">See all</a></p>
			</div>
			<div class="content">
				<h4>The Princess and the Frog </h4>
					<a href="#"><img src="css/images/coming-soon1.jpg" alt="coming soon" /></a>
				<p>Walt Disney Animation Studios presents the musical "The Princess and the Frog," an animated comedy set in the great city of New Orleans...</p>
				<a href="#">Read more</a>
			</div>			
		</div>
		<!-- end Coming -->
		<div class="cl">&nbsp;</div>
	</div>
	<!-- end Main -->

	<!-- Footer -->
	<div id="footer">
		<p>
			<a href="#">HOME</a> <span>|</span>
			<a href="#">NEWS</a> <span>|</span>
			<a href="#">IN THEATERS</a> <span>|</span>
			<a href="#">COMING SOON </a> <span>|</span>
			<a href="#">LATERS TRAILERS</a> <span>|</span>
			<a href="#">TOP RATED TRAILERS</a> <span>|</span>
			<a href="#">MOST COMMENTED TRAILERS</a> <span>|</span>
			<a href="#">ADVERTISE</a> <span>|</span>
			<a href="#">CONTACT </a>
		</p>
		<p> &copy; 2016 POCKET FILMS, LLC. All Rights Reserved. Designed by Aaditya Shah</p>
	</div>
	<!-- end Footer -->
</div>
<!-- end Shell -->
</body>
</html>

CSS

* { margin: 0; padding: 0; outline:0; }

body {
    font-size: 12px;
    line-height: 1.3;
    font-family: Arial, Helvetica, Sans-Serif;
    color: #ccc;
    background: url('images/body-bg.gif');
}

a { color: #e7b038; text-decoration: underline; cursor:pointer; }
a:hover { text-decoration: none; }
a img { border: 0; }

input, textarea, select { font-size: 12px; font-family: Arial, Helvetica, sans-serif; }
textarea { overflow: auto; }

.cl { display: block; height: 0; font-size: 0; line-height: 0; text-indent: -4000px; clear: both; }
.notext { font-size: 0; line-height: 0; text-indent: -4000px; }

.left, .alignleft { float: left; display: inline; }
.right, .alignright { float: right; display: inline; }
.text-right { text-align:right; }

h2 { font-size:10px; color:#f2a223; font-weight:bold; }
h3 { font-size:14px; color:#fff; font-weight:bold; }
h4 { font-size:14px; color:#f3b12b; font-weight:bold; }

#shell { width:980px; margin:0 auto; }

#header { position:relative; }

h1#logo { position:absolute; top:37px; left:0; }
h1#logo a { float:left; width:239px; height:100px; background:url('images/logo.png') no-repeat 0 0; font-size: 0; line-height: 0; text-indent: -4000px; }

#navigation { float:right; clear:right; padding-top:28px; padding-bottom:47px; }
#navigation ul { list-style:none; }
#navigation ul li { float:left; display:inline; padding-left:29px;  }
#navigation ul li a { font-size:14px; font-weight:bold; color:#fff; text-decoration:none; }
#navigation ul li a.active,
#navigation ul li a:hover { color:#d91d2a; }

#sub-navigation { display:block; clear:right; border-top:1px dashed #666; border-bottom:1px dashed #666; padding:8px 0;  }
#sub-navigation ul { list-style:none; }
#sub-navigation ul li { float:left; display:inline; padding-right:23px;  }
#sub-navigation ul li a { font-size:14px; font-weight:bold; color:#fff; line-height:24px; text-decoration:none; }
#sub-navigation ul li a:hover { text-decoration:underline; }

#search { width:346px; margin:0 0 0 auto; }
#search label { float:left; display:inline; font-size:14px; font-weight:bold; color:#fff; line-height:24px; padding-right:6px; }
#search .search-field { width:238px; border: 1px solid #413e3e; background:#000; color:#787878; padding:2px 0 2px 2px; }
#search .search-button { font-size:14px; font-weight:bold; border:0; background:none; color:#fff;   cursor:pointer; }

#main { border-bottom:1px dashed #413e3e; }
#content {  }

.box { width:980px; border-bottom:1px dashed #413e3e; padding-bottom:21px; }

.box .head { width:980px; padding-top:14px; padding-bottom:11px; }
.box .head h2 { float:left; display:inline; }

.box .movie { width:152px; float:left; padding-right:12px; }
.movie-image { float:left; width:152px; height:214px; position:relative; }
.movie-image img { width:152px; height:214px; }
.movie-image a { float: left; display: inline; width:152px; height:214px; position: relative; z-index: 2; }
.play { position: absolute; top: 0; left: 0; width:152px; height:214px; background: url('images/image-hover.png'); display:block; z-index: 5; cursor:pointer; display:none; }
.movie span.name { font-weight:bold; color:#fff; font-size:14px; text-align:center; padding-top:160px; display:block; }

.box .last { padding:0; }

.rating { float:left; width:152px; padding-top:8px; }
.rating p { float:left; font-size:10px; color:#fff; font-weight:bold; }
.rating .stars { float:left; width:60px; height:11px; background:url('images/stars.gif') no-repeat 0 0; margin-left:2px;}
.rating .stars-in { width:48px; display:inline; background:url('images/stars.gif') no-repeat 0 bottom; position:absolute; height:11px; font-size: 0; line-height: 0; text-indent: -4000px;}
.comments { background:url('images/comments.gif') no-repeat 0 center; padding-left:12px; float:right; }

#news { width:460px; float:left; }
#news .head { width:460px; padding-top:11px; padding-bottom:14px;  }
#news h3, #coming h3 { float:left;  }

#coming { width:490px; float:left; padding-left:30px; }
#coming .head { width:490px; padding-top:11px; padding-bottom:14px;  }
#coming .head strong { color:#ff361a; }
#coming .content { min-height:130px; height: auto !important; height:130px; padding-bottom:20px; }
#coming .content h4 { padding-bottom:3px; }

.content { padding-bottom:28px; }
.content .date { font-size:10px; color:#fff; }
.content img { float:left; width:68px; padding-right:8px; }
.content p { font-size:13px; color:#fff; line-height:16px; }
.content a { font-size:11px;  }

#footer { padding:15px 0 0 0; }
#footer p { text-align:center; font-size:10px; padding-bottom:11px; }
#footer a { color:#9c9c9c; font-size:10px; }
#footer a:hover { color:#e44400; text-decoration:none; }

#footer a:hover.designby { color:#9c9c9c; text-decoration:none; }
```
