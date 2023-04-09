import express from 'express';
import cors from 'cors';

const App = express();
App.use(express.json());
App.use(cors());

const PORTA = 5000

App.listen( PORTA, ()=> console.log({PORTA}));