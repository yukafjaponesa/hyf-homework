const getGiphy = () => {
  const getWord = document.getElementById("word");
  const query = getWord.value;
  const url = `http://api.giphy.com/v1/gifs/search?&api_key=xaoGqJvlFyO1480AAIPRg1FecpwZETEq&q=${query}&limit=25&offset=0&rating=G&lang=en`;
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      console.log(result)
      const gifData = result.data;
      let gifImg = gifData.map((m) => {
        return m.images.downsized_medium.url;
      });
      gifImg.forEach((imgUrl) => {
        const gifImgTag = document.createElement("img");
        const divContainer = document.getElementById("result");
        divContainer.appendChild(gifImgTag);
        gifImgTag.setAttribute("src", imgUrl);
      });
    });
};
const searchBtn = document.getElementById("submit");
searchBtn.addEventListener("click", getGiphy);
