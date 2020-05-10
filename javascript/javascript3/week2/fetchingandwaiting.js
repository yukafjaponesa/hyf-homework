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
