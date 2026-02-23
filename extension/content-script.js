const MAX_TEXT_LENGTH = 1_000;
const MAX_SUBTEXT_LENGTH = 200;

function parseTextContent(maxLen) {
  if (!document.body?.innerText) {
    return "";
  }

  let result = "";

  const maxText = document.body.innerText.trim().slice(0, maxLen);

  result += maxText;

  for (let i = 1; i <= 6; i++) {
    result += getAllHeaders(i);
  }

  const semanticSelectors = [
    "header",
    "footer",
    "nav",
    "aside",
    "section",
    "article",
    "main",
    "address",
  ];

  semanticSelectors.forEach((el) => {
    result += getSemanticSelectors(el);
  });

  const metaData = [
    `name="description"`,
    `name="keywords"`,
    `name="author"`,
    `property="og:image"`,
    `property="og:description"`,
    `property="article:published_time"`,
  ];

  metaData.forEach((el) => {
    result += getMetaData(el);
  });

  result += getImageDescriptions();

  return result;
}

function getAllHeaders(number) {
  const elements = document.querySelectorAll(`h${number}`);
  const headers = Array.from(elements)
    .map((el) => el.textContent.trim())
    .filter((el) => el !== "");
  
  return headers.length > 0 
    ? `\n\n Заголовки h${number}: ` + headers.join(", ")
    : "";
}

function getSemanticSelectors(selector) {
  const elements = document.querySelectorAll(selector);
  const texts = Array.from(elements)
    .map((el) => el.textContent.trim())
    .filter((el) => el !== "");
  
  return texts.length > 0
    ? `\n\n Семантический тег ${selector}: ` + texts.join(", ").slice(0, MAX_SUBTEXT_LENGTH)
    : "";
}

function getMetaData(meta) {
  const result = document.querySelector(`meta[${meta}]`);
  return result?.content 
    ? `\n\n Метаданные ${meta}: ` + result.content 
    : "";
}

function getImageDescriptions() {
  const images = document.querySelectorAll('img[alt]');
  const alts = Array.from(images)
    .map(img => img.alt.trim())
    .filter(alt => alt.length > 10 && alt.length < MAX_SUBTEXT_LENGTH)
    .slice(0, 5);
  
  return alts.length > 0 
    ? `\n\n Описания изображений: ` + alts.join(' | ')
    : "";
}

window.addEventListener("load", (event) => {
  const payload = {
    type: "view",
    url: location.href,
    title: document.title || "",
    lang: document.documentElement?.lang || "",
    text: parseTextContent(MAX_TEXT_LENGTH),
  };

  chrome.runtime.sendMessage(payload);
});
