const mongoose = require("mongoose")

const app = require("./app");

const DB_HOST = "mongodb+srv://Okeksandr:CSIjqcS3tIOUfDob@cluster0.s6wvvm5.mongodb.net/db-contacts?retryWrites=true&w=majority"

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
.then(() => {
  app.listen(3000)
})
.catch(error => {
console.log(error.message);
process.exit(1);
})
