export default async function handler(req, res) {
  const feedUrl = "https://wwm.bdstoryo.com/feed";

  const response = await fetch(feedUrl);
  const text = await response.text();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).send(text);
}