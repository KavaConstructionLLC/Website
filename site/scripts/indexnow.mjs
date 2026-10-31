// Tells Bing and other IndexNow engines about every page. Run after each production deploy.
const host = 'kavaconstructionllc.com';
const key = '46d364f053b2a1f78d8982f0141f8a61';
const index = await (await fetch(`https://${host}/sitemap-0.xml`)).text();
const urlList = [...index.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${response.status} for ${urlList.length} URLs`);
