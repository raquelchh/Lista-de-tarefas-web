const express = required ("express") //usa framework Express 
const app = express ();              //cria servidor
app.used(express.json());            //permite receber dados JSON

app.get ('/', (req, res) => {
    res.send("Servidor funcionando"); //rota de test
});

app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000');
});