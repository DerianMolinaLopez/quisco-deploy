import { PrismaClient } from "@prisma/client"
export default async function handler(req, res) {
    const prisma = new PrismaClient()
    if(req.method == "POST"){
        const{id} = req.query//esto es similar a como lo veriamos en express 
        const ordenActualziada = await prisma.orden.update({
            where: {
                //cuando mandamos el id por medio del query, normalmente es un string
                //prisma si o si quiere que le des un un entero asi que
                //se debe parsear
                id: parseInt(id)
            },
            data:{//el data es obligatorio, en el ponemos el campo que vamos a actualizar
                estado: true
            }
        })
        res.status(200).json(ordenActualziada)
    }
}