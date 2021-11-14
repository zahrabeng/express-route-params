import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Try a more interesting route..."
  });
})

app.get("/echo/:exampleRouteParameter", (req, res) => {
  const echoContent = req.params.exampleRouteParameter;
  res.json({
    echo: echoContent,
    message: `I am echoing back to you: ${echoContent}`
  })
})

app.get("/multiply/:numOne/:numTwo", (req, res) => {
  const { numOne, numTwo } = req.params;
  const multiplication = parseInt(numOne) * parseInt(numTwo);
  res.json({
    original: `${numOne} x ${numTwo}`,
    result: multiplication,
  })
});

app.get("/shout/:sillyParamName", (req, res) => {
  const shoutContent = req.params.sillyParamName.toUpperCase();
  res.json({
    echo: shoutContent,
    message: `I am shouting back to you: ${shoutContent}`,
  });
});

app.get<{ name: string }>("/happy-birthday/:name", (req, res) => {
  res.json({
    lyrics: [
      "Happy birthday to you",
      "Happy birthday to you",
      `Happy birthday dear ${req.params.name}`,
      "Happy birthday to you!"
    ],
  });
});

// using 4000 by convention, but could be changed
const PORT_NUMBER = 4000;

app.listen(PORT_NUMBER, () => {
  console.log(`Server is listening on ${PORT_NUMBER}`);
});
