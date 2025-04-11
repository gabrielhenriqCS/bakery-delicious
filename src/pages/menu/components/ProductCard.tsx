import { Card } from "@heroui/card";
import { Product } from "@prisma/client";
import { useNavigate, useParams } from "react-router-dom";

interface ProductCardProps {
    product: Pick<Product, "name" | "price" | "imageUrl">;   
}

export default function ProductCard({ product }: ProductCardProps) { 
    const { slug } = useParams<{ slug: string }>();
    const router = useNavigate();
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <Card>
                <div className="flex flex-col items-center">
                    <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover rounded-lg mb-4" />
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-500 text-sm">${product.price.toFixed(2)}</p>
                    <button
                        onClick={() => router(`/${slug}/products/${product.name}`)}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        View Details
                    </button>
                </div>
            </Card>
        </div>
    )
 }