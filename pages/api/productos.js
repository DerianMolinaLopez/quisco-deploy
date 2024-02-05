import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export default async function handler(req, res) {
  const productos = await prisma.producto.findMany({
    where:{
        categoriaId:1
    }
  })
  res.status(200).json(productos)
}
//!cuando agregamos ese where cierto me da todo los productos de la categoria
//!pero en el otro archivo de categoria si agregamos el includes
//!el resultado es un json con la categoria envolviendo los productos 
//!que le corresponden