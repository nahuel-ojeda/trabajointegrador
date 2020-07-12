const fs = require('fs')
const db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const marcasControllers = {
    index: function(req, res){        
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('Marcas que disponemos \n\n')
        let lista = []
        db.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
                if (!lista.includes(auto.marca)){
                    lista.push(auto.marca)
                }
            })
        })
        lista.forEach(function(listar){
            res.write(`Marca: ${listar}\n`)
        })
    },
    id:function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let idMarcas = req.params.marcas
        res.write('Autos de la marca '+idMarcas+' en stock\n\n')
        db.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
                if(auto.marca == idMarcas){
                    res.write('\n -------\n\n')
                    res.write('Modelo del auto : '+auto.modelo+'\n\n')
                    res.write('Año del auto: ' + auto.anio+'\n\n')
                }
            })
        })
        res.end()
      }
    }
    
module.exports = marcasControllers