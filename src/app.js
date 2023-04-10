import express from 'express';
import cors from 'cors';

const App = express();
App.use(express.json());
App.use(cors());

const usuarios = [

];
const tweets = [

];

App.post("/sign-up", (request,retorno)=> {
    const { username, avatar } = request.body;

    usuarios.push({username, avatar});
    retorno.send("ok, tudo funfando");
})

App.post("/tweets", (request,retorno)=> {
    const postagem = request.body;

    const cadastrado = usuarios.find(item => item.username === postagem.username);
    if (!cadastrado) {
        return(retorno.send("UNAUTHORIZED, vacilou ai chapa"));
    }
    tweets.push(postagem);
    retorno.send("ok,tudo funfando");
})

App.get("/tweets", (request,retorno)=> {

    const postados = tweets.map(tweet => {
        const icone = usuarios.find(item => item.username === tweet.username);
        return {...tweet,avatar: icone.avatar };
    })
    retorno.send(postados.slice(-10));
})

const PORTA = 5000
App.listen( PORTA, ()=> console.log({PORTA}));