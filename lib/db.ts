import {PrismaClient} from "@prisma/client"
// development mode so that in hot reload it does not create any new prisma client 
declare global{
    var prisma: PrismaClient | undefined
}
export const db = globalThis.prisma ||  new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;

// production  mode
// export const db =  new PrismaClient();

