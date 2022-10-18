<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

ChatRoom
========

Build a simple chatroom using Angular, services, and the $http service

We're going to be dealing with a 'back-end' and now all of our data is going to persist. IE when you refresh, the data will still be there. 

We're going to be building a basic chatroom so by the end of class, you'll all be able to chat with each other. Here's what you'll be working towards (http://jaredbeauchamp.com/experiments/chatroom/index.html). You'll have to do some CSS magic to make it look that good, but feel free to get creative with the styling once you finish the core project.

![alt text](https://github.com/DevMountain/chatroom/blob/master/preview.png?raw=true)


The concepts this project will cover are 

1. Angular Services
2. $http
3. Injecting a service into a controller

## Instructions

### Clone and Dissect the Repo
#### 
* Fork and clone this repository.
* You should only touch mainCtrl.js and parseService.js, everything else is already set up for you
* Although very convenient, because other parts of the application are already set for you, you need to understand what that code is doing in order to work with it. 
* Go and check out the index.html page. You'll notice that in the message-container class there's an ng-repat looping over messages. This means that somehow, you need to have 'messages' on the scope.  Each message should  have a 'text' property.


### Build your parseService
#### 
* In Angular we use 'services' to outsource some of our heavy lifting. That's exactly what we're going to do with this app. 
* Open up parseService.js and read the instructions. The bigger picture is that this service is going to have two methods, getData and postData. getData will get the chats from our parse backend, and postData will be able to post new messages to the parse backend.


### Tie in your Controller
#### 
* Now that your parseService is finished, we somehow need a way to tie the data we're getting from parseService.getData to our scope to show in our view. This sounds like the perfect use case for a controller. 
* Open up mainCtrl.js and follow the instructions. The bigger picture here is that we're going to utilize the methods that we added to parseService to do some of the 'heavy' lifting, then just add what we get back from those methods to the $scope


### Review
#### 
* If all went well you should be able to open up your index.html page and chat with those who also finished. If you got this far, great job! Review angular promises and $http. They're fundamental to any apps built with Angular.


### Add Some Flavor
#### 
* Right now it just shows the message. The object you get back from parse also has a createdAt property. Change the UI to show the message, and what time it was created at in normal, human readable formats.
* Make the Chatroom filterable by message
* Be able to order the chatroom by date posted
* Reformat the App (and research more with Parse) on how to create your own rooms so that users can create a room then see only the chats in those specific rooms, then create a button for which users can create their own rooms.
* Make the styling look more...professional.
* Sign up with parse and create your own private chatroom with your own API keys.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>

