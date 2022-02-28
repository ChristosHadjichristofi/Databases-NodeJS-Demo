const app = require('./app');

const chalk = require("chalk");

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    console.log(chalk.green(`🚀 Server running on port ${port}!`));
});