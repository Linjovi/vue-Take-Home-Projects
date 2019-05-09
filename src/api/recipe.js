import request from "@/utils/request";

export function getRecipeList(data) {
  const url = 'http://localhost:3000/api/recipe';
  return request({
    url: url,
    method: "get"
  })
}

export function saveRecipe(data = {}){
  const url = 'http://localhost:3000/api/addRecipe';
  console.log(data);
  return request({
    // headers: {'Content-Type': 'application/json'},
    url:url,
    method:"post",
    data
  })
}