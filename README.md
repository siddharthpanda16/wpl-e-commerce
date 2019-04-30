# WPL Project E-Commerce

## Getting Started

In one terminal tab start up the express server by running `npm start`

In another terminal tab start up the Angular Server by changing into the angular-app directory and running `ng serve`

In a browser visit `localhost:4200`

# Importing Movie Data

Assuming that you are set up on MLab, create a new database called movie-app and create a user for it. Then run the following command to import the ~2200 movies in the movieDetails.json file.
`mongoimport -h ds051334.mlab.com:51334 -d movie-app -c movies -u pat -p password1 --file ./seed/movieDetails.json`
