/*
const fetchAdataByPromise = () => {
  const url = 'https://dog.ceo/api/breeds/image/random'
    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(result => {
          console.log(url, result)
        })
    }, 3000)
}
fetchAdataByPromise();

//using async/await
const fetchAdata = async () => {
  setTimeout(() => {
  }, 3000)
  const url = 'https://dog.ceo/api/breeds/image/random'
  const res = await fetch(url)
  const result = await res.json()
  console.log('async/await', result)
}
fetchAdata();
*/

const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });

const url = 'https://dog.ceo/api/breeds/image/random';
fetch(url)
  .then(res => res.json())
  .then(data => setTimeout(() => console.log(data), 3 * 1000))
  .catch(err => console.log('fetching the data went wrong', err));

const getPic = async () => {
  const result = await fetch(url);
  const data = await result.json();
  await delay(5);
  console.log(data);
};
getPic();
