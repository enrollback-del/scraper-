export default async function handler(req, res) {
  try {
    const response = await fetch("https://wwm.bdstoryo.com/feed");
    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(text);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feed" });
  }
}
