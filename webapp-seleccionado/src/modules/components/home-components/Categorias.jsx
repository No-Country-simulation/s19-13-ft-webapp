import  { useState } from "react"

const triviaCategories = [
  {
    id: 1,
    title: "Animales invertebrados",
    image: "https://www.shutterstock.com/image-vector/classification-invertebrates-animals-insect-arachnids-600nw-2247258627.jpg",
    rating: 3.2,
    category: "ciencias_naturales",
    author: "Martina Cruz"
  },
  {
    id: 2,
    title: "Edad media",
    image: "https://s1.elespanol.com/2023/09/29/historia/798180348_236402035_1024x576.jpg",
    rating: 4.5,
    category: "ciencias_sociales",
    author: "Alberto Sanchez"
  },
  {
    id: 3,
    title: "Verbos irregulares",
    image: "https://s1.significados.com/foto/ejemplos-de-verbos-og.jpg",
    rating: 5.0,
    category: "idiomas",
    author: "Roberto Smith"
  },
  {
    id: 4,
    title: "Reptiles",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Extant_reptilia.jpg/800px-Extant_reptilia.jpg",
    rating: 3.5,
    category: "ciencias_naturales",
    author: "Marcela Gomez"
  },
  {
    id: 5,
    title: "Gramatica italiana B1",
    image: "https://thumbs.dreamstime.com/z/libro-de-gram%C3%A1tica-italiana-y-varios-manuales-para-aprender-italiano-en-una-estanter%C3%ADa-pula-croatia-febrero-libros-referencia-175609210.jpg",
    rating: 4.2,
    category: "idiomas",
    author: "Isabella Ricci"
  },
  {
    id: 6,
    title: "Literatura clásica",
    image: "https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__fd8d8e3b-7daf-44c9-81d0-dfd1a4a22712&w=3840&q=75",
    rating: 4.6,
    category: "arte_y_literatura",
    author: "Martina Cruz"
  },
  {
    id: 7,
    title: "Ejercicios matemáticos",
    image: "https://aeac.science/wp-content/uploads/2020/06/matematicas.jpg",
    rating: 3.8,
    category: "ciencias_formales",
    author: "Cecilia Ortiz"
  },
  {
    id: 8,
    title: "Capitales de Europa",
    image: "https://www.paises.net/wp-content/uploads/2022/10/mapa-capitales-europa-1024x835.jpg",
    rating: 5.0,
    category: "ciencias_sociales",
    author: "Martina Cruz"
  },
]

export default function Categorias() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const filteredCategories = selectedCategory === "todos"
    ? triviaCategories
    : triviaCategories.filter(category => category.category === selectedCategory)

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="mb-8">
        <select
          className=" text-gray-700 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="todos">categorías</option>
          <option value="ciencias_naturales">Ciencias naturales</option>
          <option value="ciencias_sociales">Ciencias sociales</option>
          <option value="idiomas">Idiomas</option>
          <option value="arte_y_literatura">Arte y literatura</option>
          <option value="ciencias_formales">Ciencias formales</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCategories.map((category) => (
          <div key={category.id} className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={category.image}
                alt={category.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{category.author}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {renderStars(category.rating)}
                </div>
                <span className="text-sm font-medium">{category.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

