// ********************************************************
// ********************** MUMORIES ************************
// ********************************************************


// Imporitng libraries

const fs = require( 'fs' )
const path = require( 'path' )
const env = require( 'dotenv' )
const express = require( 'express' )
const multer = require( 'multer' )
const ejs = require( 'ejs' )


// configuring environemnt, extracting constants

env.config()
const PORT = process.env.PORT
const TITLE = process.env.TITLE


// Our views path for templates and public path for css

const VIEWS_PATH = path.join( __dirname, 'views' )
const PUBLIC_PATH = path.join( __dirname, 'public' )
const SOUND_PATH = path.join( PUBLIC_PATH, 'sound_files' )


// Sound upload function

const upload = multer({ storage: multer.diskStorage({
  destination: SOUND_PATH,
  filename: (req, file, cb ) => { cb( null, file.originalname )}
})})


// Initializing express app and configure EJS as engine

const app = express()
app.engine( '.html', ejs.__express )
app.set( 'views', VIEWS_PATH )
app.set( 'view engine', 'ejs' )
app.use( express.static( PUBLIC_PATH ) )


// main route! what people get when they go to '/'

app.get( '/', (req, res) => {
  res.render( 'index', {
    TITLE,
    STEP: 'Welcome' ,
  })
})


// Recording a sound contribution

app.get( '/Record', ( req, res ) =>  {
  res.render( 'index', {
    TITLE,
    STEP: 'Record',
  })
})


// Listening to a sound contribution

app.get( '/Listen', ( req, res ) => {
  res.render( 'index', {
    TITLE,
    STEP: 'Listen',
    TRACKS: fs.readdirSync( SOUND_PATH )
  })
})


// Uploading a sound file

app.post( '/Upload', upload.single( 'file' ), (req,res) => {
  res.status(200).send("The recording has been uploaded!");
})



// Error route

app.get( '/Error?message=:message', (req, res) => {
  res.render( 'Error', {
    TITLE,
    message: req.params.message
  })
})


// start server

app.listen( PORT, () => {
  console.log(`Example app listening on port ${ PORT }`)
})
