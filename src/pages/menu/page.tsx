import { db } from "../../lib/prisma";
import { BakeryHeader } from "./components/BakeryHeader";


interface BakeryMenuProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ consumptionMethod: string}>;
}

const isComsumptionMethod = (consumptionMethod: string) => ["DELIVERY", "TAKEAWAY"].includes(consumptionMethod);

const BakeryMenuPage = async ({ params, searchParams }: BakeryMenuProps) => {
    const { slug } = await params;
    const { consumptionMethod } = await searchParams;
    if(!isComsumptionMethod(consumptionMethod)) {
        throw new Error("Método inválido");
    }
    const bakery = await db.bakery.findUnique({
        where: { slug },
        include: {
            menuCategory: {
                include: {
                    products: true,
                }
            }
        },
    });
    if (!bakery) {
        throw new Error("Padaria não encontrada");
    }
    return (
        <div>
            <BakeryHeader bakery={ bakery } />
        </div>
    )
}   


export default async function Menu() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Cardápio</h1>
            <BakeryMenuPage params={Promise.resolve({ slug: "padaria-coisa-nova" })} searchParams={Promise.resolve({ consumptionMethod: "DELIVERY" })} />
        </div>
    );
}   