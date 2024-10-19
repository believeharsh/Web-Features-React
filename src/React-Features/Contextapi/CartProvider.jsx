import React from "react";

export const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: [
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ],
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
  },
];

function Recipe({ id, name, ingredients }) {
  return (
    <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md my-4">
      <h2 className="font-mono text-xl font-bold mb-2">{name}</h2>
      <hr className="mb-2"/>
      <ul className=" list-inside mx-auto list-none">
    
        {ingredients.map((ingredient) => (
          <div className="flex justify-center items-center">
          <li>*</li>
          <li key={ingredient}>{ingredient}</li>
          </div>
        
        ))}
      </ul>
    </div>
  );
}

const RenderingList = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="w-full max-w-lg mx-auto text-white text-center">
        <h1 className="text-3xl font-bold mb-6">Recipes</h1>
        {recipes.map((recipe) => (
          <Recipe {...recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default RenderingList;