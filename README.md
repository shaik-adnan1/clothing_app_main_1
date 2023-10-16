# How to fork and clone
One quick note about cloning this project. If you wish to make commits and push your own code, you'll need to fork the project first. Forking allows you to have your own copy of this repository by adding a duplicate version in your own profile!

You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.

<img width="612" alt="github fork" src="https://user-images.githubusercontent.com/10578605/157998981-4bfd1f83-825c-4664-b22d-b2c7d471dc70.png">

After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely!

# After you fork and clone:

## Install dependencies
In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.

## Set your firebase config

Remember to replace the config variable in your firebase.utils.js with your own config object from the firebase dashboard! Navigate to the project settings gear icon > project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

<img width="1261" alt="Screen Shot 2022-03-11 at 8 51 22 PM" src="https://user-images.githubusercontent.com/10578605/157999158-10e921cc-9ee5-46f6-a0c5-1ae5686f54f3.png">

# Branching strategy

After forking this repository and cloning it down, you will have access to all the lesson branches with code at different checkpoints throughout the course. If for some reason you need to work from the codebase at one of these lesson branch checkpoints, follow these steps:

1. Checkout to the lesson-# (let's use lesson-15 as an example) branch
```
git checkout lesson-15
```
2. Branch off from lesson-15. This will create a new branch where the code of lesson-15 is the basis for your new branch. You can name your new branch whatever you want! Let's say we use my-main-branch as the name.
```
git checkout -b my-main-branch
```
3. Now you can just code on this branch, push code from this branch up to your forked repo etc. The main thing to remember is that you want to be on this branch for your own code, so remember what you named this branch!


<!-- REACT ROUTING -->

// BrowserRoute

first importing the BrowserRoute component in the Top most level component in out application 

import { BrowserRouter } from 'react-router-dom';

In this case it is our Highest level component is <App />

<App /> component  in the index.js file

Now the <App /> component must  be nested inside the <BrowserRoute /> component!

with the <BrowserRoute /> placed, 

It unlocks or enables us to use the routing features in the browser

<!-- Routing -->


Now Setting up the Routing part itself

For that we need to first import {Routes and Route} components form the 'react-route-dom'

<import { Routes, Route } from "react-router-dom";> 

Now Routes and Route can be used as follows

<Routes>  ---> Enables us to use the Route component
      <Route path='/home' element={<Home />}> ----> the path prop checks if the url is ending with '/home' and renders the element prop.. Here <Home /> component is rendered to page
        <Route path='shop' element={<Shop />} />
      </Route>
</Routes>

<!-- Using <Link /> -->

# hey there

[] done => abc


Link component will creates a link through which you can route between pages!!

<Link className="nav-link" to='/shop'>Shop</Link> ----> The "to" attribute sets the destination of the route and you can also pass in component into the Link tag



<!-- Heeyyyyyy

  OKok chudu see nenu anni sarlu important ani anttuu
  and also ivale chepthe excitment pothadhi ante 
  pakka neeku ardam aipoyi untadhi that it was about your birthday 😭😭😭
  okk yess it is

  sooo seee First thingg advance happyyy birthday reeee
  you're 20 years old now, numbers tho count chesthe technically 2 years older than mee
  not fairrr😭😭😭😭

  see pakka there will bee full calls and stuff and then you'll be tired after that
  i will send you a feww videos i made for your birthday 
  seee ivvi are not the same talk video
  
  there is something more special for you nanaa
  i hope you'll like ittt😶‍🌫️

  seee motham free ayaka when you're alone in your bed or whatever watch them nana
  ee sarii watch them in one goooo please reee😭

  you'll really like them
  i hope you do😶‍🌫️

  evaru lenapudu when you're all free then watch itt nanna
  Happy birthday love youuu

 -->
