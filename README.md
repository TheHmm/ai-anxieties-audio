# Mumories

Node application that serves a set of webpages statically, that display an arxhive stored on a json file on disk and a web UI to record and submit audio annotations to this archive.

File server is Express
Template engine is EJS
Databse is stored on disk as a CSV file

## Environment

Copy the .env.example file to .env
```
cp .env.example .env
```
Edit the environment variables to your liking.
```
PORT=3000
TITLE=Mumories
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

Karl, Artemis, Simon, Margarita, Sofia, Victor, Angelique as part of INC's Going Hybrid / Living Archives working group

## License

This repository is published under the [CC4r*](LICENSE) license.
