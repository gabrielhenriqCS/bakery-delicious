import { PrismaClient } from "@prisma/client";

declare global {
    // allow global `var` declarations
    // eslint-disable-next-line no-var, vars-on-top
    var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
}
else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient();
    }
    prisma = global.cachedPrisma;
}
export const db = prisma;