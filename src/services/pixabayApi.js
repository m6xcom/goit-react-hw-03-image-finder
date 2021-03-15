import axios from "axios";

async function getFetch(query, page) {
  const key = "19787532-99c32fb0a864719ee4b9d7cb0";
  let url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  const photos = await axios
    .get(url)
    .then((response) => response.data)
    .then((data) => data.hits);
  return photos;
}

export default getFetch;
