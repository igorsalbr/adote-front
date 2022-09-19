# Flok Interview

Today we'll be building a Todo List app together. The code here contains a work in progress version of a working todo list application. Together, we'll be working to add as much functionality as possible to this app.

## Client

The client is a react app created using create-react-app. This app relies on the use of a couple dependencies:

- material-ui
- react-router
- redux
- redux-api-middleware

Don't worry if not all of these technologies are familiar to you, we'll work through together on exactly how to use them.

## Server

The server is a very simple Flask server. Its dependencies are:

- Flask
- Flask SQLAlchemy
- SQLlite

Don't worry too much about implementing any functionality. We'll be focused primarily on building out the react frontend. The backend won't need any further development.

## REST endpoints

The backend currently implements the following endpoints:

POST /todos  
GET /todos

GET /todos/:id  
PATCH /todos/:id  
DELETE /todos/:id

## Model definitions

The `Todo` model that will be used throughout the entirety of this exercise has the following properties:

id: number  
title: string (required)  
description: string  
created_at: number  
completed: boolean

## Current functionality

Like I mentioned, the react app currently isn't developed very much at all. It contains a navigation bar and 1 page that displays the todo list. The react application is setup so that it will make an API call and store all the todo items in it's redux store each time the todo list page is loaded. There is also the start of a "new todo list item" modal that is present in the todo list page, but that modal doesn't actually send any API calls to the backend yet.

## Our goals

1. Add a todo item
2. Mark a todo item as completed
3. Display todo items separately from completed items
4. Prettify the todo list
5. Delete items
6. Display the time/date of items
7. Add sorting to the todo list
8. Add labels to a todo list item (discussion question)

Keep in mind, we won't be able to get to all of these problems! Let's work together to make the application "as finished as possible" but strive for correctness over completeness. I will be evaluating you on the way you think and approach problems, as opposed to how many problems you can solve or how quickly you can solve them. A big part in software engineering is asking questions. Please don't be afraid to ask questions, I want to see that you can effectively communicate and engage with myself (or Google, Stack Overflow, etc.) when you aren't sure how to approach something.
