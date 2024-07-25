import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const RecipeList = ({ recipeList }) => {
  console.log(recipeList);
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-gray-500 mb-12">recipes</h2>
      <Link href={"/"}>Go home</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeList && recipeList.length > 0
          ? recipeList.map((recipe) => (
              <Link key={recipe.id} href={`recipe-list/${recipe.id}`}>
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-18">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover object-top"
                      />
                      <div className="text-lg font-bold text-gray-900">
                        <h3>{recipe.name}</h3>
                      </div>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-lg text-gray-600 font-bold">
                          {recipe.rating}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <p className="text-lg text-gray-600">
                          {recipe.cuisine}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default RecipeList;
