let faker = require('faker');
var fs = require('fs');

DUMMY_DATA_NUMBER = 4000;
TABLE_NAME = "students";
TABLE_COLUMNS = ["name", "surname", "email"]
let content = "";

for (i = 0; i < DUMMY_DATA_NUMBER; i++) {
    [firstName, lastName] = faker.name.findName().split(" ");
    email = faker.internet.email();
    content += "INSERT INTO " + TABLE_NAME + " (" + TABLE_COLUMNS.join(",") + ') VALUES ("' +
    firstName + '","' + lastName + '","' + email + '");\n';
}

fs.writeFile('dummyDataCreator/dummy_data_' + TABLE_NAME + '.txt', content, (err) => {
  if (err) throw err;
  console.log('File is created successfully.');
});
