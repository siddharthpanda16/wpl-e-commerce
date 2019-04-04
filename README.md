# WPL Project E-Commerce

# Importing Movie Data

Assuming that you are set up on MLab, create a new database called movie-app and create a user for it. Then run the following command to import the ~2200 movies in the movieDetails.json file.
`mongoimport -h ds051334.mlab.com:51334 -d movie-app -c movies -u pat -p password1 --file ./seed/movieDetails.json`

# Todo

- encrypt password
- keep from creating duplicates in movies
- might run into issues grabbing all those movies at once? need to paginate?
- will you be able to police the adding of the correct "level" movies on front end?
