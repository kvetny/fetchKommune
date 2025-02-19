const urlKommune = "https://api.dataforsyningen.dk/kommuner";

function fetchKommuner(any) {
    return fetch(any).then(response => response.json());
}

const kommuneMap = new Map();

function fillDropdown(kom) {
    const el = document.createElement("option");
    console.log("her kommer kom");
    console.log(kom);
    el.textContent = kom.navn;
    el.value = kom.kode;
    kommuneMap.set(kom.kode, kom);
    ddKommuner.appendChild(el);
}


async function actionFetch() {
    const kommuner = await fetchKommuner(urlKommune);
    kommuner.sort((a, b) => a.navn > b.navn ? 1 : -1); //Sorterer i alfabetisk rækkefølge
    kommuner.forEach(fillDropdown);
    console.log(kommuneMap);
}

function createdHrefTag(kommune) {
    console.log("createHrefTag");
    const el = document.createElement("a");
    console.log(kommune.ertaget);
    if (!kommune.ertaget) {
        el.href = kommune.href;
        el.textContent = kommune.navn;
        divHrefs.appendChild(el);
        const br = document.createElement("br"); // ny linje efter hver valgte kommune
        divHrefs.appendChild(br);
    }
    kommune.ertaget = true;
}

function selectKommune(ev) {
    console.log(ev);
    const sel = ddKommuner.selectedIndex;
    const selectedOption = ddKommuner.options[sel];
    console.log(selectedOption);
    const kom = selectedOption.value;
    console.log("Primary key for kommunen: " + kom);
    const komObj = kommuneMap.get(selectedOption.value);
    console.log(komObj);
    createdHrefTag(komObj);
}

const divHrefs = document.getElementById("kommunehrefs");
const ddKommuner = document.getElementById("ddKommuner");
const pbFetchKommuner = document.getElementById("pbFetchKommuner");
ddKommuner.addEventListener('change', selectKommune);
pbFetchKommuner.addEventListener('click', actionFetch);