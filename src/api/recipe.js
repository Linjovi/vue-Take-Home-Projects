import request from "@/utils/request";

export function getRecipeList(data) {
  const url = 'http://localhost:3000/api/recipe';
  return request({
    url: url,
    method: "get"
  })
}

export function saveRecipe(data = {}){
  const url = 'http://localhost:3000/api/saveRecipe';
  return request({
    url:url,
    method:"post",
    data
  })
}

export function delRecipe(data){
  console.log(data);
  const url = 'http://localhost:3000/api/delRecipe/' + data;
  return request({
    url:url,
    method:"delete",
    data
  })
}