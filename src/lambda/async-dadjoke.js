// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"
export async function handler(event, context) {
  try {
    const response = await axios.get("https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api", { headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '6fb4fdf3d5msh1fb32d396ea1d20p1956f2jsn9c5782003e2a',
      'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
    } });
    const data = response.data;
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data })
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
