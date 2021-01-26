export function load(url, callback) {
  const scriptTag = document.createElement('script');
  scriptTag.src = url;

  if (callback) {
    scriptTag.onload = callback;
    scriptTag.onreadystatechange = callback;
  }

  document.body.appendChild(scriptTag);
}
