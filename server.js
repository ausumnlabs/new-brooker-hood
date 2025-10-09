const express = require('express');
const dotenv = require('dotenv');
const DB = require('./config/db');

// Models - ONLY EXACT FILE NAMES USED!
require('./models/City');
require('./models/City_Project');
require('./models/Directory_contacts');
require('./models/Flat_Residences_movedOut');
require('./models/Flats_id');
require('./models/Local_directory');                   // Note: "Local_Directory.js" is lowercase in folder!
require('./models/project_towers');                    // Note: "project_towers.js", not Project_Towers
require('./models/Ticket_response_sheet');
require('./models/ammenties_booking');                 // Your file name: ammenties_booking.js (not "ammneties_booking")
require('./models/daily_help_assignmet');
require('./models/emergency_number');
require('./models/flat_daily_help');
require('./models/new_user_onboarding');
require('./models/society_ammenities');                // Your file: society_ammenities.js
require('./models/society_help_desk_ticket');
require('./models/society_member');
require('./models/society_staff');
require('./models/vehicle_search');                   // File: vehicle_search.js (NOT vehcile_search)

dotenv.config();

const app = express();
app.use(express.json());

DB(); // MongoDB Atlas connect

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/location', require('./routes/locationRoutes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
