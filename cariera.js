 
const http=require('http');
cosnt server=http.createServer( (req,res)=>{
  console.log("request made");
});
server.listen(3000,'localhost'=>{console.log("listen and req")});
/*
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'cariera.html'));
});

app.post('/', function (req, res) {
  const { name, birthDate } = req.body;
  const age = Date.now() - new Date(birthDate).getTime();
  const ageDays = Math.floor(age / (1000 * 60 * 60 * 24));
  res.send(`Salut, ${name}! Trăiești de ${ageDays} zile.`);
}); 

 
 
 
 
app.get("*",(req,res) => {
    res.sendFile(__dirname + "/404.html")
})
 
app.listen(4000,() => {
    console.log("App is listening on Port 4000")
})*/