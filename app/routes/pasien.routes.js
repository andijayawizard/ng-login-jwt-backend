module.exports = app => {
  const pasiens = require("../controllers/pasien.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", pasiens.create);

  // Retrieve all Tutorials
  router.get("/", pasiens.findAll);

  // Retrieve all published Tutorials
  router.get("/published", pasiens.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", pasiens.findOne);

  // Update a Tutorial with id
  router.put("/:id", pasiens.update);

  // Delete a Tutorial with id
  router.delete("/:id", pasiens.delete);

  // Delete all Tutorials
  router.delete("/", pasiens.deleteAll);

  app.use('/api/pasiens', router);
};
