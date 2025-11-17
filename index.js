import express from "express";

const port = 8000;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/forum", (req, res) => {
  res.render("", {
    title: "Kategorie",
    categories: flashcards.getCategorySummaries(),
  });
});