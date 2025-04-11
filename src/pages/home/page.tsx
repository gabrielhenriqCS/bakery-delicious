

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-green-50 bg-gray-500/50 p-0.5">
      <h1 className="text-6xl font-bold mb-6">Bem-vindo à Padaria Coisa Nova</h1>
      <p className="text-xl mb-4 text-center">
        A melhor padaria da cidade! Conheça nossos produtos frescos feitos diariamente. 
        <br />
        Venha conhecer o nosso cardápio e faça seu pedido online.
      </p>
      <button className="mt-3 py-2.5 px-5 text-lg font-bold uppercase bg-orange-600 cursor-pointer rounded-full hover:bg-orange-900 duration-100 transition-transform active:scale-95">Conheça nosso cardápio</button>
    </div>
  )
}