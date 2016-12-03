# Milestone 7 - Testing
# Brendan McDonald, Aaditya Shah, Nick Taber, Radha Mendapra
## December 2, 2016

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

	* Layer: Data Layer and Business Layer 
		* Prevent it from going to data layer
		* In case if it goes to data layer, it will be handled in business layer
	* Exception: Query something that is invalid or syntactically problematic
	* Our Solution: Handled by preventing the query from getting through the database and inform with an error message
	* Example: User searches for a movie titled “Drop table `users` where 1=1”

		* Using both client-side and server-side data validation and sanitization

* Data no longer exists/updated

	* Layer: Data Layer, because you won’t know that the data has been until you try to access it.
	* Exception: Trying to access data that no longer exists or has been updated
	* Our Solution: Handled by informing user
	* Example: User deletes their account, other users’ following them need to have their lists updated
		* Removing occurrences of the deleted user ID from related tables’ rows
		
* Unable to access the database
	* Layer: Data Layer, for some reasons as above.
	* Exception: Connection string has become corrupt
	* Our Solution: Handled by informing user to re-install the application or contact the development
	* Example: Internal change that is not accounted for by the application such as operating system or architecture update, Passwords might be changed

* Incorrect Login Credentials	
	* Layer: Business Layer
		* Pull from the data layer and handled in business layer
	* Exception: Login credentials do not meet the requirements
	* Our Solution: Handled by informing user to re-enter their login information
	* Example: User either forgets their login information or types it incorrectly, User tries to access someone else’s account

* Duplicate Data 
	* Layer: Business Layer
	* Exception: Unique data would be overwritten if the query was to be committed
	* Our Solution: Handled by preventing user to register and informing them to re-register using different credentials
	* Example: Registering an account with a username/email that already exists

* Exception Handling Code Snippets

```
//validate title input
function validateData() {
	title = document.getElementById("title");
    title.innerHTML = "";
    x = document.getElementById("datainput").value;
try {
	if (x == "") throw "is empty. Please enter a value";
	if (x > 50) throw "is too long of a title. Please enter a valid program title ";
	if (x < 1) throw "is too short of a title. Please enter a valid program title";
} catch (err) {
	title.innerHTML = "Input" + err;
} finally {
	document.getElementById("datainput").value = "";
}
}

//Page not found error message
try {
	var node = document.getElementsByTagName('h1').item(0);
  	var refnode = node.nextSibling;
  	var newnode = document.createTextNode('You came across a page that no longer exists. Please navigate back.');
  	node.insertBefore(newnode, refnode);
} catch(err) {
	alert(err.code);
}
```

## Performance and Refactoring

* Coding Practices

	* Minimize unnecessary database access
	* To improve code consistency:
		* Using a function declaration instead of a var declaration
		* Using [] instead of charAt()
	* Not leaking the arguments object to improve performance
	* Avoiding executing callback twice and making sure to return after the first time
	* Making sure to cache
		* Since node.js runs permanently, frequently used variables could be set only once and reuse for each user during every request
		* Performance will be better if more high-use items are cached
	* Node project was started with npm init
	* API and route calls are handled and delivered asynchronously with callbacks.
	* All dependencies are required as the server starts to ensure that no errors occur once the application is spun up.
	* Helmet used to help secure the application by setting various HTTP headers
	
## Testing

We are testing based on each functionality in our system. We are doing scenario based testing in order to figure out what to test and then using these scenarios to create test cases. 

* Test Scenarios

	* User needs to be able to login
	* User needs to be able to search for the movies
	* User needs to be able to click on the movie name to find out more details about it
	* User needs to be able to search for their friends
	* User should be able to view their friends profile
	* After searching for their friends, user should have the ability to follow their friends
	* User should be able to view their own profile to keep track of their followers and who they are following
	* User should be able to favorite and view their favorite movies
	
* Test Cases

	* User navigates to login icon from the homepage and logs in using their username and password
	* User types the movie name in the search bar on the homepage
	* User clicks on the name of the movie which opens up another view with more detailed information about the movie
	* User goes to “Search Friends” tab on navigation menu to search for their friends
	* User clicks on their friends name to view their profile
	* User can click on “Follow” to follow their friends
	* User clicks on “My profile” on the navigation menu and be able to view a list of who they are following and who is following them
	* User can click on the star next to the movies to favorite them and can view favorited movies in their profile.

## Deployment

* Our application is hosted on a web server. Firstly, the files needed for the application can be cloned from git here: https://github.com/Rangoons/kgApp.git. The system uses a MySQL database that can be set up by running the `install.sql` script provided. The install script can be ran on your server by navigating to your database admin panel; generally phpMyAdmin or Adminer. Copy the lines of code within `install.sql` and paste them into the raw sql section of the admin panel and run the commands. The credentials in the db connection file (connectdb.php) need to be modified to work with the destination server’s credentials. The rest of the files then need to be uploaded to the server. Folder permissions should be set to 755 and file permissions should be set to 644.

* Here is the git clone command: git clone https://github.com/Rangoons/kgApp.git. Please refer to this link for any additional help with cloning our application from github: https://help.github.com/articles/cloning-a-repository/

## Help System

* Our application will have a separated help center similar to many social media websites and applications. Rather than integrating page by page help in each part of the application, the help system will be independent from the application pages and be accessed through a persistent help link in the interface. Once a user goes to the help website, they will be met with an organized list of topics to find help on as well as a keyword search function. The downside of this system is that no matter what page the user is on, they will need to have some idea of how to find the help they need as the help pages are not associated with the different screens of the application. This can be mitigated by creating clear categorization using simple language that will allow users to easily identify what part of the help they are looking for. The benefit that this provides is that all the help will be sorted into a central help area rather than being page based, keeping it out of the way of users that do not need it and isolating its organization from that of the app.

* A good example of a similar help system for a relatively simple social media app is Instagram, which can be found at https://help.instagram.com/. 

* The aspect we have chosen to hone in for the help system is account management. Our application is largely account-based, as the application will require login to use. The account management section of the help system would include at least the following:
	* Note: Italicized text denotes hyperlinks to associated pages of the website.
	
	* Account Management
		* Account Creation: 
			* Making the most out of Pocketfilms requires users to create an account. The account creation page can be found *here*.
			* Account creation requires the following information:
				* Username: A unique name that will be displayed to other Pocketfilms users, including your friends. May include letters and numbers but no special characters.
				* Password: A password of at least six characters that is used to access your account. Passwords are case sensitive and may include letters, numbers, and a variety of special characters. For maximum security, we recommend including lowercase and uppercase letters, numbers, and special characters.
				* Repeat password: You will be asked to enter the same password twice for verification that you have correctly typed your desired password.
				* Email: Pocketfilms requires users to sign up with an email address for account verification. Your email will not be displayed to other users and you will not receive anything from Pocketfilms other than account verification. The email may also be used to reset your password and by other Pocketfilms users to search for your account.
				* Name (optional): Your real name, or as much of it as you are comfortable displaying to other Pocketfilms users. Including your name will allow your friends to more easily find and identify you on Pocketfilms.
				* Location (optional): Often, users can find others with similar interests in their area for a movie night or get-together! Not required, but will be displayed to other Pocketfilms users if entered.

	* Account Settings
		* On the account settings page, you can change any of your account information that was set during account creation. No matter what you change, your account details will be preserved! See *Account Creation* for an explanation of the field available to change.

	* Finding Friends
		* A big part of the Pocketfilms experience is social, or sharing your favorite movies and short films with your friends! The *friend search page* contains one simple search bar that allows you to find friends using any piece of their public account information. The search function will find users by matching your search query to existing usernames, email addresses, and real names.

	* Privacy and Security
		* Pocketfilms will not reveal any private account information to other users or outsiders, including your password, email address, IP address, or any other information about you or your computer. All account information is stored in a secure database that cannot be accessed without proper authentication. 
