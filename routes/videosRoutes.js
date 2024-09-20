const express =  require('express');
const { videos }  = require("../mock/dados.json");


servidor.get("/videos", (resquest, response)=> {
    if (videos.length === 0)
  res.status(484).json(((mensagem)))
})

servidor.get("/videos/id", (request,response) => {
    const id = request.params.id;
    
    const [videoEncontrado]= videos.filter(video =>  video.id === number(id));
    response.status(200).json(videoEncontrado);
})

Router.post("/videos" , (req, res) => {
 const novovideo = req.body;

 function gerarId(){
    do {
        let id = math.floor(Math.random())  * 10000000
    }  while (videos.some(video => video.id === id))
     
        return id;

 }
const novovideo = {
    id: gerarId(),
    titulo: titulo
    descrição:descrição
    quantidadeviews: quantidadeviews
    Image: image
    canalID: canalID
};
 videos.push(videoNovo)
 res.status(201).json(videoNovo);

 response.json(body)
})



servidor.post("/videos/.id", (req, res) => {}) 
servidor.put("/videos/.id", (req, res) => {})
servidor.delete("/videos/.id",  (req, res) => {})


module.exports = Router;

