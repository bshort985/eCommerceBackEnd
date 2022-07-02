const router = require('express').Router();
const { where } = require("sequelize");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    include: [Product],
    where: {
      id: req.params.id
    }
  })
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: "No category with this ID!" });
        return;
      }
      res.json(category);
    })
    .catch((err) => res.status(500))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  .then((category) => {
    if (!category) {
      res.status(404).json({ message: "No category with this ID!" });
      return;
    }
    res.json(category);
  })
  .catch((err) => res.status(500))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.body, {
    where: {
      id: req.params.id
    },
  })
  .then((category) => {
    if (!category) {
      res.status(404).json({ message: "No category with this ID!" });
      return;
    }
    res.json(category);
  })
  .catch((err) => res.status(500))
});

module.exports = router;
