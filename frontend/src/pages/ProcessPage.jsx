import React from 'react';
import './ProjectsPage.css';

// Step 1: Import each image directly.
// The build process will fail if any of these paths are wrong, which is a good thing!

import img1 from '../assets/process/img1.jpg';
import img2 from '../assets/process/img2.jpg';
import img3 from '../assets/process/img3.jpg';
import img4 from '../assets/process/img4.jpg';
import img5 from '../assets/process/img5.jpg';
import img6 from '../assets/process/img6.jpg';
import img7 from '../assets/process/img7.jpg';
import img8 from '../assets/process/img8.jpg';
import img9 from '../assets/process/img9.jpg';
import img10 from '../assets/process/img10.jpg';
import img11 from '../assets/process/img11.jpg';
import img12 from '../assets/process/img12.jpg';
import img13 from '../assets/process/img13.jpg';
import img14 from '../assets/process/img14.jpg';
import img15 from '../assets/process/img15.jpg';
import img16 from '../assets/process/img16.jpg';
import img17 from '../assets/process/img17.jpg';
import img18 from '../assets/process/img18.jpg';
import img19 from '../assets/process/img19.jpg';
import img20 from '../assets/process/img20.jpg';
import gardenBedsImg from '../assets/process/garden-beds.jpg';
import deckPowerwashImg from '../assets/process/deck-powerwash.png';

// Step 2: Use the imported image variables directly in your data array.
const updatesData = [
  {
    id: 1,
    title: 'Kitchen Remodel: Day 1',
    description: 'Demolition is underway! Clearing out the old cabinets and flooring.',
    imageUrl: img1, // Use the variable, not a string
  },
  {
    id: 2,
    title: 'Garden Project: Framing',
    description: 'The new raised garden beds have been framed and are ready for soil.',
    imageUrl: img2,
  },
  {
    id: 3,
    title: 'Deck Staining Prep',
    description: 'Power washing the deck to prepare it for a new coat of stain.',
    imageUrl: img3,
  },

 
  { id: 4, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl:   img4 },
  { id: 5, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl:   img5 },
  { id: 6, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl:   img6 },
  { id: 7, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl:   img7 },
  { id: 8, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl:   img8 },
  { id: 9, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl:   img9 },  
  { id: 10, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl:   img10 },
  { id: 11, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl:   img11 },
  { id: 12, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl:   img12 },
  { id: 13, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl:   img13 },
  { id: 14, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl:   img14 },
    { id: 15, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl:   img15 },
  { id: 16, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl:   img16 },
  { id: 17, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl:   img17 },
  { id: 18, title: 'Another Kitchen Day', description: 'More demo work.', imageUrl:   img18},
  { id: 19, title: 'Another Garden Day', description: 'Adding soil to beds.', imageUrl:   img19 },
  { id: 20, title: 'Another Deck Day', description: 'Sanding the deck.', imageUrl:   img20 },
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