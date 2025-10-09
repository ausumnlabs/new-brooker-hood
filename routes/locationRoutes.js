const express = require("express");

// ----------- All 18 Models -------------
const AmmenitiesBooking = require("../models/ammenties_booking");
const CityProject = require("../models/City_Project");
const City = require("../models/City");
const DailyHelpAssignment = require("../models/daily_help_assignmet");
const DirectoryContacts = require("../models/Directory_contacts");
const EmergencyNumber = require("../models/emergency_number");
const FlatDailyHelp = require("../models/flat_daily_help");
const FlatResidencesMovedOut = require("../models/Flat_Residences_movedOut");
const Flats = require("../models/Flats_id");
const LocalDirectory = require("../models/Local_directory");
const NewUserOnboarding = require("../models/new_user_onboarding");
const ProjectTowers = require("../models/project_towers");
const SocietyAmmenities = require("../models/society_ammenities");
const SocietyHelpDeskTicket = require("../models/society_help_desk_ticket");
const SocietyMember = require("../models/society_member");
const SocietyStaff = require("../models/society_staff");
const TicketResponseSheet = require("../models/Ticket_response_sheet");
const Vehicle = require("../models/vehicle_search");

const router = express.Router();

// -------🔥 CRUD ROUTES FOR ALL MODELS 🔥--------

function genericCrud(name, Model) {
  // CREATE
  router.post(`/${name}`, async (req, res) => {
    try {
      const doc = new Model(req.body);
      await doc.save();
      res.json(doc);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // GET ALL
  router.get(`/${name}`, async (req, res) => {
    try {
      const docs = await Model.find();
      res.json(docs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // GET ONE
  router.get(`/${name}/:id`, async (req, res) => {
    try {
      const doc = await Model.findById(req.params.id);
      if (!doc) return res.status(404).json({ error: "Not found" });
      res.json(doc);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // UPDATE
  router.put(`/${name}/:id`, async (req, res) => {
    try {
      const doc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!doc) return res.status(404).json({ error: "Not found" });
      res.json(doc);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // DELETE
  router.delete(`/${name}/:id`, async (req, res) => {
    try {
      const doc = await Model.findByIdAndDelete(req.params.id);
      if (!doc) return res.status(404).json({ error: "Not found" });
      res.json({ msg: "Deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
}

// --------- Add CRUD endpoints for each model -------------
genericCrud('ammenties_booking', AmmenitiesBooking);
genericCrud('city_project', CityProject);
genericCrud('city', City);
genericCrud('daily_help_assignment', DailyHelpAssignment);
genericCrud('directory_contacts', DirectoryContacts);
genericCrud('emergency_number', EmergencyNumber);
genericCrud('flat_daily_help', FlatDailyHelp);
genericCrud('flat_residences_movedout', FlatResidencesMovedOut);
genericCrud('flats', Flats);
genericCrud('local_directory', LocalDirectory);
genericCrud('new_user_onboarding', NewUserOnboarding);
genericCrud('project_towers', ProjectTowers);
genericCrud('society_ammenities', SocietyAmmenities);
genericCrud('society_help_desk_ticket', SocietyHelpDeskTicket);
genericCrud('society_member', SocietyMember);
genericCrud('society_staff', SocietyStaff);
genericCrud('ticket_response_sheet', TicketResponseSheet);
genericCrud('vehicle', Vehicle);

module.exports = router;
