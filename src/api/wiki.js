import request from '@/utils/request';


export function getWikiList(data) {
  let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + data;
  return request({
    url: url,
    method: 'get'
  });
}

