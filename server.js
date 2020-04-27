import express from "express";
import htmlRoutes from "./app/routing/htmlRoutes.js";
import apiRoutes from "./app/routing/apiRoutes.js";

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, () => {
    console.log("app listening on PORT: " + PORT);
});