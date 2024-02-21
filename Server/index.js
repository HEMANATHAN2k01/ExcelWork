import express from 'express'
import bodyparser from 'body-parser'
import Database from './config/dbs'
// import cors from 'cors'


// const db = require('./config/dbs')

const app = express()
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
// app.use(cors());


Database

app.listen(() => console.log(`Hello`))