import { Bakery } from "@prisma/client";

interface BakeryHeaderProps {
    bakery: Pick<Bakery, "name" | "avatarImageUrl">;
}

export const BakeryHeader = ({ bakery }: BakeryHeaderProps) => {
    return (
        <div className="flex items-center space-x-4">
            <img src={bakery.avatarImageUrl} alt={bakery.name} className="w-16 h-16 rounded-full" />
            <h1 className="text-2xl font-bold">{bakery.name}</h1>
        </div>
    );
}