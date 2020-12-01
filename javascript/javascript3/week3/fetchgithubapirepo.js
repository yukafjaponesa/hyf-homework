/*const url = 'https://api.github.com/search/repositories?q=user:benna100'

fetch(url)
  .then(res => res.json())
  .then(result => {
    console.log(result) //to check the data on server
    const gitData = result.items
    let gitFullName = gitData.map((m) => {
      return m.full_name
    })
    let gitHtmlUrl = gitData.map((m) => {
      return m.html_url
    })
    let gitOwner = gitData.map((m) => {
      return m.owner
    })
  })
  */
/*
const student1 = 'https://api.github.com/search/repositories?q=user:benna100';
const student2 = 'https://api.github.com/search/repositories?q=user:panivita';
const student3 = 'https://api.github.com/search/repositories?q=user:LucyChyzhova';

const student1url = fetch(student1);
const student2url = fetch(student2);
const student3url = fetch(student3);

const allStudentsUrl = [student1url, student2url, student3url]
Promise.all(allStudentsUrl)
  .then(res => {
    console.log(res)

    const jsonResult1 = res[0].json()
    const jsonResult2 = res[1].json()
    const jsonResult3 = res[2].json()
    return Promise.all([jsonResult1, jsonResult2, jsonResult3])
  })
  .then(result => {
    console.log(result)
    const gitData = result.items
    let gitFullName = gitData.map((m) => {
      return m.full_name
    })
    console.log(gitFullName[0])
    let gitHtmlUrl = gitData.map((m) => {
      return m.html_url
    })
    let gitOwner = gitData.map((m) => {
      return m.owner
    })
  })
*/

const student1 = "https://api.github.com/search/repositories?q=user:benna100";
const student2 = "https://api.github.com/search/repositories?q=user:panivita";
const student3 =
  "https://api.github.com/search/repositories?q=user:LucyChyzhova";
const allStudentsUrl = [student1, student2, student3];
Promise.all(
  allStudentsUrl.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.items);
        const gitData = result.items;
        const gitFullName = gitData.map((m) => {
          return m.full_name;
        });
        console.log(gitFullName[0]);
        let gitHtmlUrl = gitData.map((m) => {
          return m.html_url;
        });
        let gitOwner = gitData.map((m) => {
          return m.owner;
        });
      })
  )
);
