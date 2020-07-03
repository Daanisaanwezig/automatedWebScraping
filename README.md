# **Automated Web Scraping**
A javascript script that allows you to create web scraping code by simply modifying a small json file.

## How to use:
* First you should install Node.js
* Once you have Node.js installed you should download the code and modify the json file to your likings
 * The 'url' variable should be replaced with the url of the website you would like to search for. Keep in mind not all websites support access from a automated script so it might be needed to modify it and emulate a custom htpp request from a specifc browser
 * The 'searching' variable should be replaced with the piece of text you would like to search for in the website
 * The 'type' variable should be replaced with one of the folowing: 'text', 'class' or 'id'. 'text' will search for a piece of text in the website, 'class' will search for a specific class in the website and 'id' will search for a specific id on the website.
* After having changed the json file you should start a command promt in the folder with the 'index.js' file in it and run the following command: 'node index.js'
## Used libraries and packages:
* Node.js - As a base for the code to run
* Axios   - To retrieve a website from the internet
* Cheerio - To convert the url html response to html elements in a similar way to jquery

## About
This project has been made due to the time it takes to trial and error to get the wanted result. The script is not perfect and will most likely get updated in the future to allow it to generate more complex code like loops and better optimized web scraping.
> Feel free to fork this repository and modify it and use it to your likings
