export function openSession(urls) {
  urls.forEach((url, i) => {
    chrome.tabs.create({
      url,
      active: (i === urls.length - 1) ? true : false,
    })
  })
}
