// ********************************************************
// ********************** MUMORIES ************************
// ********************************************************


// Imporitng libraries

const path = require( 'path' )
const env = require( 'dotenv' )
const express = require( 'express' )
const ejs = require( 'ejs' )



// configuring environemnt, extracting constants

env.config()

const PORT = process.env.PORT
const TITLE = process.env.TITLE
const VIEWS_PATH = 'views'
const PUBLIC_PATH = 'public'


// Initializing express app and configure EJS as engine

const app = express()
app.engine( '.html', ejs.__express )
app.set( 'views', path.join( __dirname, VIEWS_PATH ) )
app.use( express.static( path.join( __dirname, PUBLIC_PATH ) ) )
app.set( 'view engine', 'html' )


// main route! what people get when they go to '/'

app.get( '/', (req, res) => {
  res.render( 'base', {
    title: TITLE,
    message : 'Hello World!'
  })
})


// create routes here

app.get( '/kororo', ( req, res ) =>  {
  res.render( 'base', {
    title : TITLE,
    message : 'Artemis, go wild <3'
  })
})




// start server

app.listen(PORT, () => {
  console.log(`Example app listening on port ${ PORT }`)
})
