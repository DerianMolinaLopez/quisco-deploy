import { PrismaClient } from '@prisma/client'
import { categorias } from '../data/categorias'
import { productos } from '../data/productos'
const prisma = new PrismaClient()
//!si cambias algo del primsa y aun hay un error aqui, es ncecesario hacer una migracion para que se refleje
const main = async () : Promise<void> => {
    try {
        await prisma.categoria.createMany({
            data: categorias
        })
        await prisma.producto.createMany({
            data: productos
        })
    } catch (error) {
        console.log(error)
    }
}
//npx seed db seed --> para correr las inserciones de este seading
main()