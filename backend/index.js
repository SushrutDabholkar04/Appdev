// index.js
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const Skill = require('./models/Skills');
const userRoutes = require('./routes/user');
const skillRoutes = require('./routes/skillRoutes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.json());

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  // Import skills from CSV and save to database
  importSkillsFromCSV();
})
.catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

// CSV handling function
function importSkillsFromCSV() {
  const skills = [];
  fs.createReadStream('skills_counts.csv')
    .pipe(csv())
    .on('data', (row) => {
      const skillName = row.skill;
      skills.push(skillName);
    })
    .on('end', async () => {
      console.log('CSV file successfully processed.');
      // console.log('Skills:', skills);
      await saveSkillsToDatabase(skills);
    });
}

// Function to save skills to the database
async function saveSkillsToDatabase(skills) {
  try {
    for (const skillName of skills) {
      // Skip empty skill names
      if (!skillName) {
        console.log('Skipping empty skill name.');
        continue;
      }
      const existingSkill = await Skill.findOne({ name: skillName });
      if (!existingSkill) {
        const skill = new Skill({ name: skillName });
        await skill.save();
      } else {
      }
    }
    console.log('Skills saved to database successfully.');
  } catch (error) {
    console.error('Error saving skills to database:', error);
  }
}

// Middleware and routes setup
app.use('/api/user', userRoutes);
app.use('/api/skills', skillRoutes);

// Start the server
const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
