import React from 'react';
import './ProjectsPage.css';

// Step 1: Import each image directly.
// The build process will fail if any of these paths are wrong, which is a good thing!
import kitchenDemoImg from '../assets/process/kitchen-demo.jpg';
import gardenBedsImg from '../assets/process/garden-beds.jpg';
import deckPowerwashImg from '../assets/process/deck-powerwash.png';

// Step 2: Use the imported image variables directly in your data array.
const updatesData = [
  {
    id: 1,
    title: 'Kitchen Remodel: Day 1',
    description: 'Demolition is underway! Clearing out the old cabinets and flooring.',
    imageUrl: 1, // Use the variable, not a string
  },
  {
    id: 2,
    title: 'Garden Project: Framing',
    description: 'The new raised garden beds have been framed and are ready for soil.',
    imageUrl: 2,
  },
  {
    id: 3,
    title: 'Deck Staining Prep',
    description: 'Power washing the deck to prepare it for a new coat of stain.',
    imageUrl: 3,
  },
 
  { id: 4, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl: 4 },
  { id: 5, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl: 5 },
  { id: 6, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl: 6 },
  { id: 7, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl: 7 },
  { id: 8, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl: 8 },
  { id: 9, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl: 9 },  
  { id: 10, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl: 10 },
  { id: 11, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl: 11 },
  { id: 12, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl: 12 },
  { id: 13, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl: 13 },
  { id: 14, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl: 14 },
    { id: 15, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl: 15 },
  { id: 16, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl: 16 },
  { id: 17, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl: 17 },
  { id: 18, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl: 18},
  { id: 19, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl: 19 },
  { id: 20, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl: 20 },
];

const tileColors = ['#00A3A3', '#E5A629', '#D95B3D', '#4B8BF5', '#9C3DD9'];

function UpdatesPage() {
  return (
    <section id="updates">
      <h1>Updates & Work in Progress</h1>
      <div className="project-grid">
        {updatesData.length > 0 ? (
          updatesData.map((update, index) => (
            <div
              key={update.id}
              className="project-card"
              style={{ backgroundColor: tileColors[index % tileColors.length] }}
            >
              {/* Step 3: The src attribute is now much simpler and safer */}
              <img
                src={update.imageUrl}
                alt={update.title}
                className="project-image"
              />
              <div className="project-info-overlay">
                <h3>{update.title}</h3>
                <p>{update.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No updates to display yet!</p>
        )}
      </div>
    </section>
  );
}

export default UpdatesPage;