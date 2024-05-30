import Image from "next/image";

export default function Home() {
  const dogs = [
    {
      name: "Luna",
      transform: "scale-110 -rotate-6"
    },
    {
      name: 'Daisy',
      transform: "scale-75"
    },
    {
      name: 'Lupo',
    },
    {
      name:
        'Legacy',
    },
    {
      name:
        'Tedd',
      transform: "scale-75 -rotate-6 skew-y-6 translate-x-2 translate-y-15"
    },
    {
      name:
        'Max'
    },


  ]
  return (
    <main className="py-20 px-10 min-h-screen p-16 m-auto max-w-6xl">
      <h1 className="">Hi, Doggos 🐶</h1>
      <h2 className="my-12">The Best doggos in town</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-12 my-20 lg:my-32">
        {
          dogs.map(({ name, transform }, index) => {
            return (
              <div key={index} className={`border-2 border-opacity-50 border-indigo-400 shadow-xl shadow-purple-300 rounded-xl px-5 py-2 pb-5 m-auto hover:scale-105 hover:duration-500 hover:transition
              backdrop-blur-sm bg-white/30 ${transform}
              `}>
                <div className="my-2">
                  <h2 className="truncate w-60">{name}</h2>
                </div>

                <div>
                  <Image
                    className="rounded-lg"
                    src={`/images/${index + 1}.jpg`}
                    height={160}
                    width={260}
                    alt={`${name} dog`}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  );
}


