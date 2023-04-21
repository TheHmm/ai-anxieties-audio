// ********************************************************
// ********************** MUMORIES ************************
// ********************************************************


// Imporitng libraries

const path = require( 'path' )
const env = require( 'dotenv' )
const express = require( 'express' )
const body_parser = require( 'body-parser' )
const ejs = require( 'ejs' )



// configuring environemnt, extracting constants

env.config()
const PORT = process.env.PORT
const TITLE = process.env.TITLE


// Our views path for templates and public path for css

const VIEWS_PATH = path.join( __dirname, 'views' )
const PUBLIC_PATH = path.join( __dirname, 'public' )


// Our data paths

const DATA_PATH = path.join( PUBLIC_PATH, 'data' )
const PROMPTS_PATH = path.join( DATA_PATH, 'PROMPTS.json' )
const ARCHIVE_PATH = path.join( DATA_PATH, 'ARCHIVE.json' )


// Our data

const PROMPTS = require( PROMPTS_PATH )
const ARCHIVE = require( ARCHIVE_PATH )


// Initializing express app and configure EJS as engine

const app = express()
app.use( body_parser.urlencoded({ extended: true }) )
app.engine( '.html', ejs.__express )
app.set( 'views', VIEWS_PATH )
app.use( express.static( PUBLIC_PATH ) )
app.set( 'view engine', 'ejs' )


// main route! what people get when they go to '/'

app.get( '/', (req, res) => {
  res.redirect( 'Welcome' )
})


// Error route

app.get( '/Error?message=:message', (req, res) => {
  const message = req.params.message
  res.render( 'Error', {
    TITLE,
    message
  })
})


// create routes here

app.get( '/:step', ( req, res ) =>  {
  const STEP = req.params.step || '__DEFAULT__'
  res.render( 'index', {
    TITLE,
    PROMPTS,
    ARCHIVE,
    STEP,
  })
})



// for when someone chooses prompts or archive entries to
// respond to, process them and send them to record area

app.post( '/Record', ( req, res ) =>  {
  const chosen_prompts = req.body.prompts
  const chosen_exhibit = Object.values( ARCHIVE ).find( e => e.slug == req.body.exhibit )
  console.log( req.body )
  res.render( 'index', {
    TITLE,
    PROMPTS,
    ARCHIVE,
    STEP: 'Record',
    data: {
      chosen_prompts,
      chosen_exhibit,
    }
  })
})



























// start server

app.listen(PORT, () => {
  console.log(`Example app listening on port ${ PORT }`)
})
