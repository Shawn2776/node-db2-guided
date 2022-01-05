exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { fruit_name: 'apple', avg_weight: 10.5, is_delicious: true},
        { fruit_name: 'orange', avg_weight: 4.5, is_delicious: false},
        { fruit_name: 'strawberry', avg_weight: 1.5, is_delicious: true, fruit_color: 'red' }
      ]);
    });
};