import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
/**
 * 
 * @param {*} req -->aquello que tu envias al servidor 
 * @param {*} res -->la respuesta del servidor hacia el cliente
 */
export default async function handler(req, res) {
    //obtener ordenes
const ordenes = await prisma.orden.findMany({
    where:{
        estado: false
    }
})

res.json(ordenes)
    //crear ordenes
    
    if(req.method == "POST"){
        /**CUIDADO CON LA DISLEXIA */
        const orden = await prisma.orden.create({
            data:{
                nomrbre:req.body.nombre,
                total:req.body.total,
                pedido:req.body.pedido,
                fecha:req.body.fecha
            }
        })
        res.json(orden)
    }
}