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
    <div>
      <h2 className="font-mono text-xl ">{name}</h2>
      <hr/>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

const RenderingList = () => {
  return (
    <div>
      <div className="bg-slate-900 text-white mx-auto">
        <h1>Recipes</h1>
        {recipes.map((recipe) => (
          <Recipe {...recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default RenderingList;
