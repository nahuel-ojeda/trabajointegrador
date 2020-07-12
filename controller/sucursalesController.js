const fs = require('fs')
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const sucursales = {
    index:function(req, res) {
        res.write('Listado de sucursales: \n');
        dbConcesionarias.forEach(function(sucursales){
            res.write('\n');
            res.write(sucursales.sucursal);
            res.write('\n');
            res.write(sucursales.direccion);
            res.write('\n');
            res.write(sucursales.telefono);
        })
        res.end()
    },
    id:function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'});
        let idSucursales = req.params.sucursal
        dbConcesionarias.forEach(function(sucursal) {
        if(sucursal.sucursal == idSucursales){
            res.write('Bienvenido a la sucursal: ' + sucursal.sucursal +'\n\n' + 'Direccion: ' + sucursal. direccion +'\n\n' + 'Telefono' + sucursal.telefono + '\n\n')
            res.write('disponemos de esta cantidad de vehiculos: ' + sucursal.autos.length + '\n')
            sucursal.autos.forEach(function(auto){
             res.write('\n')    
             res.write('Marca: ' + auto.marca)
             res.write('\n')
             res.write('Modelo: ' + auto.modelo)
             res.write('\n')
             res.write('Año: ' + auto.anio)
             res.write('\n')
             res.write('Color: ' + auto.color)
             res.write('\n')

             
            })

         res.end();   
        }
        })
        res.send('Error. Sucursal no encontrada ): ')
        

    }

    


}



module.exports = sucursales;