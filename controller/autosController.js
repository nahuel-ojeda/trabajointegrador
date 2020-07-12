let fs = require('fs'); 
let dbConcesionarias= JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8')) 

const autos = {
    index:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let cantidad = 0;
        dbConcesionarias.forEach(element => {
            cantidad += element.autos.length})
         res.write ("Estos son todos nuestros autos" + '\n' + "Total: " + cantidad + '\n\n')
    
    dbConcesionarias.forEach(function(sucursal){
        sucursal.autos.forEach(function(autos){
            res.write("-MARCA: " + autos.marca + '\n' + "-MODELO: " + autos.modelo + '\n' + "-AÑO: " + autos.anio + '\n' + "-COLOR " + autos.color + '\n')
            res.write("-----" + '\n')            
        })
        })
            res.end()
           
    },
    id:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let Marca = req.params.marca;
        res.write ("Total de unidades disponibles de la marca "  + Marca +'\n');
        res.write("-----------------------------------------------------"+'\n')
        dbConcesionarias.forEach(function(sucursal){
            sucursal.autos.forEach(function(autos){
                if(autos.marca == Marca){
                 res.write("-MARCA: " + autos.marca + '\n' + "-MODELO: " + autos.modelo + '\n' + "-AÑO: " + autos.anio + '\n' + "-COLOR " + autos.color + '\n')
                res.write("-----" + '\n') }           
            })
            
         })
         
       res.end()
    },
}
module.exports = autos