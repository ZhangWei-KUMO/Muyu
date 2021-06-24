const MOVIE_API = 'http://apis.juhe.cn/fapig/douyin/billboard';
const KEY = '6251e1f204a038621f4c8811bb417dc4';

// function queryString(query) {
//   if (query) {
//     return Object.entries(query)
//       .map(([index, val]) => `${index}=${val}`)
//       .join('&');
//   } else {
//     return '';
//   }
// }

export default async function request(query, debug = false) {
  let api = '';
  if (query === 'discover/movie') {
    api = `${MOVIE_API}?key=${KEY}&type=hot_video`;
  }
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.toString());
  }
}
