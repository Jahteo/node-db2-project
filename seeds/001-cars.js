
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "id": 1,
          "VIN": 2342,
          "Make": "CHEBY",
          "Model": "thiingamagiv",
          "Mileage": 3453,
          "Transmission": "maybe",
          "Title Status": "who knows"
        },
        {
          "id": 2,
          "VIN": 98743,
          "Make": "doge",
          "Model": "whatchamacaliit",
          "Mileage": 23,
          "Transmission": "YES",
          "Title Status": "Married"
        },
        {
          "id": 3,
          "VIN": 92348743,
          "Make": "doggye",
          "Model": "whhhhosamacaliit",
          "Mileage": 23,
          "Transmission": "YES",
          "Title Status": "Married"
        },
        {
          "id": 4,
          "VIN": 92348743,
          "Make": "KITTYe",
          "Model": "whhhhosamacaliit",
          "Mileage": 23,
          "Transmission": "YES",
          "Title Status": "Married"
        }
      ]);
    });
};
