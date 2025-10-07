const express = require("express");
const City = require("../models/City");
const Society = require("../models/Society");
const Tower = require("../models/Tower");
const Flat = require("../models/Flat");
const Residence = require("../models/Residence");
const Vehicle = require("../models/Vehicle");

const router = express.Router();


// ➤ Create City
router.post("/city", async (req, res) => {
  try {
    const city = new City({ name: req.body.name });
    await city.save();
    res.json(city);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➤ Create Society inside City
router.post("/society", async (req, res) => {
  try {
    const society = new Society({
      name: req.body.name,
      cityId: req.body.cityId
    });
    await society.save();
    res.json(society);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➤ Create Tower inside Society
router.post("/tower", async (req, res) => {
  try {
    const tower = new Tower({
      name: req.body.name,
      societyId: req.body.societyId
    });
    await tower.save();
    res.json(tower);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➤ Create Flat inside Tower
router.post("/flat", async (req, res) => {
  try {
    const flat = new Flat({
      flatNumber: req.body.flatNumber,
      towerId: req.body.towerId
    });
    await flat.save();
    res.json(flat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➤ Create Residence inside Flat
router.post("/residence", async (req, res) => {
  try {
    const residence = new Residence({
      residentName: req.body.residentName,
      flatId: req.body.flatId,
      ownerType: req.body.ownerType,
      occupyStatus: req.body.occupyStatus
    });
    await residence.save();
    res.json(residence);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➤ Add Vehicle to Residence
router.post("/vehicle", async (req, res) => {
  try {
    const vehicle = new Vehicle({
      type: req.body.type,
      numberPlate: req.body.numberPlate,
      residenceId: req.body.residenceId
    });
    await vehicle.save();
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
