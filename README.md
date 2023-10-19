# The Hmm's audio repository for AI anxieties

Node application that serves a set of webpages statically, that display an arxhive stored on a json file on disk and a web UI to record and submit audio files.

File server is Express
Template engine is EJS
Databse is stored on disk as a CSV file


## Environment

This project was set up with Node version 18.16.

Copy the .env.example file to .env
```
cp .env.example .env
```
Edit the environment variables to your liking.
```
PORT=3000
TITLE="AI Anxieties"
```
## Development

Install the required libraries
```
npm i
```
And run the development script
```
npm run dev
```

This uses the `nodemon` command to run the application with hot reload when changes are made. To run the application without hot reload:
```
npm run start
```


## Deployment

<!-- to do -->

## Authors

Forked and tweaked by Karl from [Mumories](https://github.com/hackersanddesigners/mumories), which was co-authored by Karl, Artemis, Simon, Margarita, Sofia, Victor, Angelique as part of INC's Going Hybrid / Living Archives working group.

## License

This repository is published under the [CC4r*](LICENSE) license.
