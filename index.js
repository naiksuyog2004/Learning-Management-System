const port = process.env.PORT || 3002; //just to make sure app opens fast

const app = require("./app");

app.listen(port, () => {
    console.log(`Started express server at port ${port}`);
});
