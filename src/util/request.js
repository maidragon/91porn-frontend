export default function request(api, config) {
  return fetch(api)
  .then((response) => {
    return response.json();
  })
}