var faker = require('faker');

var database = {
user: [],
products: [],
commande:[],
message:[]
};

for (var i = 1; i <= 30; i++) {
database.user.push({
id: i,
Nom: faker.name.lastName(),
Prenom: faker.name.firstName(),
preference: faker.lorem.words(),
role: faker.random.boolean(),
promotion: faker.date.recent(),
email: faker.internet.email(),
img: faker.image.people(),
motdepass: faker.internet.password(),
lieu:faker.address.city()
})
database.products.push({
id: i,
name: faker.lorem.word(),
category: faker.commerce.productMaterial(),
description: faker.lorem.sentences(),
NomConsommateur: faker.name.lastName(),
imageUrl: faker.image.image(),
quantity: faker.random.number(),
date: faker.date.soon(),
etat: faker.random.boolean(),
pseudo:faker.name.lastName(),
modif:faker.random.boolean()
})
database.commande.push({
id: i,
name: faker.name.lastName(),
nameprod: faker.commerce.productName(),
imageUrl: faker.image.image(),
quantity: faker.random.number(),
date: faker.date.soon()

})
database.message.push({
id: i,
Nom: faker.lorem.word(),
description: faker.lorem.sentences(),
sujet: faker.lorem.word(),
date: faker.date.soon(),
type:faker.lorem.word(),
nature:faker.random.boolean()

});
}

console.log(JSON.stringify(database));

// npm run generate
// npm run server