import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export default async function handler(req, res) {
  const categorias = await prisma.categoria.findMany({
    include:{
      productos:true
    }
  })
 // console.log(categorias)
  res.status(200).json(categorias)
}

/*
 *el includes me modifica el json que me devuelve la api
*/
//?el concepto se llama eader loanding