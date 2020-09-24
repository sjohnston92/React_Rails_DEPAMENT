# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



store_1=Department.create(name: 'Shiny Store', description: 'This has Shiny things') 
store_2=Department.create(name: 'Fancy Store', description: 'This has Fancy things')
store_3=Department.create(name: 'Big Store', description: 'Would you look at that')


item_1=Item.create(name:'The other Thing', price: 6.99)
item_2=Item.create(name:'That Thing', price: 7.99)
item_3=Item.create(name:'This Thing', price: 1.99)

[store_1, store_2, store_3].each do |store|
  store.items << [item_1, item_2,item_3]
end