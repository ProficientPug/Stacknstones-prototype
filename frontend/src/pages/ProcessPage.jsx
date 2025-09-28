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
    imageUrl: kitchenDemoImg, // Use the variable, not a string
  },
  {
    id: 2,
    title: 'Garden Project: Framing',
    description: 'The new raised garden beds have been framed and are ready for soil.',
    imageUrl: gardenBedsImg,
  },
  {
    id: 3,
    title: 'Deck Staining Prep',
    description: 'Power washing the deck to prepare it for a new coat of stain.',
    imageUrl: deckPowerwashImg,
  },
  // To repeat items, just reference the variables again.
  { id: 4, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl: kitchenDemoImg },
  { id: 5, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl: gardenBedsImg },
  { id: 6, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl: deckPowerwashImg },
  // ... continue for as many items as you need
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