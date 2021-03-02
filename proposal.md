## Project name

Choose a name for your project. Don’t worry, it doesn’t need to be fancy, it’s just a way to identify it (e.g. "Hipstacam", or "Woofie").

**Answer:** Wevva

## Repository

Create a public GitHub repo to host your project and paste its URL here.

**Answer:** https://github.com/smartin88/wevva-app.git

## One liner

Write a very short sentence (< 10 words) that describes what your app is about (e.g. "Airbnb for boats", or "Movies recommendation engine").

**Answer:** Location based native weather app

## Project description

Provide a short description of what the app does (< 1000 characters).

**Answer:** The app allows the user to view the current and future weather conditions for their current location, as well as different locations of their choice. It also includes information such as the air quality, UV index and pollen count. It sends push notifications to the user to alert them to the coniditons for their current location. 

## MVP

Choose the core feature that most defines your app and you’ll start to tackle first (e.g. "Users should be able to take a picture of a food item with their smartphone and receive a list of recipes based on that ingredient").

**Answer:** User should be able to open the app and instantly see the conditions and forecast information for their current location and be able to search for the weather elsewhere by city name.

## Tech stack

Does your app have a client, a server, or both? If it has a client, is it web or mobile? What frameworks, databases, or relevant libraries are you going to use? Fill the fields here below as needed.

**Front End:** React Native via Expo, Redux (possibly?), Galio (for styling)

**Back End:** OpenWeather API or AccuWeather API, React Native Async Storage for data persistence

## Data sources

In case your app relies on some data to work properly, where are you planning to get that data from?

**Answer:** All data will be sourced using either OpenWeather API or Accuweather API. I have obtained keys for both. Accuweather has a lot more information but the amount of calls you can make is very limited (50 per day) whereas OpenWeather is 60 per minute. Whilst I am working on the UI I would stick with OpenWeather and perhaps look to move to Accuweather once the functionality is all working. 