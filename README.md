# E-commerce Back End Starter Code

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

Your database should contain the following four models, including the requirements listed for each model:



*Tag
-id
Integer
Doesn't allow null values
Set as primary key
Uses auto increment

-tag_name
String

*ProductTag
-id
Integer
Doesn't allow null values
Set as primary key
Uses auto increment

-product_id
Integer
References the product model's id

-tag_id
Integer
References the tag model's id