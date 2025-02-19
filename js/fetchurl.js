console.log("im in fetchurl")

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url)
    return fetch(url).then(response => response.json()); }

function fetchAnyUrlText(url) {
    console.log("inside fetch text url=" + url)
    return fetch(url).then(response => response.text()); }

async function actionFetchUrl(btn) {
    console.log(btn)
    const url = inpUrl.value
    console.log(url)
    //const jsonOutput = await fetchAnyUrl(url)
    const jsonOutput = await fetchAnyUrlText(url);
    textArea.textContent = jsonOutput
    console.log(jsonOutput) }



const inpUrl = document.getElementById("inpUrl")
const textArea = document.getElementById("txt")
const pbFetch = document.getElementById("pbFetchUrl")
pbFetch.addEventListener('click', actionFetchUrl)