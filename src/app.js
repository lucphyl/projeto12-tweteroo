import express from 'express';
import cors from 'cors';

const App = express();
App.use(express.json());
App.use(cors());

const usuarios = [
    {
        username: 'jiraya',
        avatar: 'https://64.media.tumblr.com/264050e3c779435129463ad9848ea1e4/tumblr_inline_p6m5hslrDc1rqtyie_1280.jpg'
    }
];
const tweets = [
    {
        username:'jiraya',
        tweet: 'Eu amo uma mulher, mas não vou obrigá-la a me amar, vou cercá-la com meu amor enquanto... rezo por sua felicidade.'
    }
];

App.post("/sign-up", (request,retorno)=> {
    const { username, avatar } = request.body;

    usuarios.push({username, avatar});

    retorno.send("ok, tudo funfando");
})


const PORTA = 5000

App.listen( PORTA, ()=> console.log({PORTA}));