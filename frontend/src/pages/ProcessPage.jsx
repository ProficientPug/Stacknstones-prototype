  import React from 'react';
  import './ProjectsPage.css';

  // The dynamic image import logic remains the same.
  // UPDATED: The path now points to the 'assets/process' folder as you specified.
  const imageModules = import.meta.glob('../assets/process/*.{jpg,jpeg,png}', { eager: true });

  const localImagesMap = Object.keys(imageModules).reduce((acc, path) => {
    const fileName = path.split('/').pop();
    acc[fileName] = imageModules[path].default;
    return acc;
  }, {});

  // Static array to hold your update data.
  // Make sure the 'imageUrl' filenames exist in your 'assets/process' folder.
  const updatesData = [
    {
      id: 1,
      title: 'Kitchen Remodel: Day 1',
      description: 'Demolition is underway! Clearing out the old cabinets and flooring.',
      imageUrl: 'kitchen-demo.jpg',
    },
    {
      id: 2,
      title: 'Garden Project: Framing',
      description: 'The new raised garden beds have been framed and are ready for soil.',
      imageUrl: 'garden-beds.jpg',
    },
    {
      id: 3,
      title: 'Deck Staining Prep',
      description: 'Power washing the deck to prepare it for a new coat of stain.',
      imageUrl: 'deck-powerwash.png',
    },
    {
      id: 4,
      title: 'Kitchen Remodel: Day 1',
      description: 'Demolition is underway! Clearing out the old cabinets and flooring.',
      imageUrl: 'kitchen-demo.jpg',
    },
    {
      id: 5,
      title: 'Garden Project: Framing',
      description: 'The new raised garden beds have been framed and are ready for soil.',
      imageUrl: 'garden-beds.jpg',
    },
    {
      id: 6,
      title: 'Deck Staining Prep',
      description: 'Power washing the deck to prepare it for a new coat of stain.',
      imageUrl: 'deck-powerwash.png',
    },
    {
      id: 7,
      title: 'Kitchen Remodel: Day 1',
      description: 'Demolition is underway! Clearing out the old cabinets and flooring.',
      imageUrl: 'kitchen-demo.jpg',
    },
    {
      id: 8,
      title: 'Garden Project: Framing',
      description: 'The new raised garden beds have been framed and are ready for soil.',
      imageUrl: 'garden-beds.jpg',
    },
    {
      id: 9,
      title: 'Deck Staining Prep',
      description: 'Power washing the deck to prepare it for a new coat of stain.',
      imageUrl: 'deck-powerwash.png',
    },
    {
      id: 10,
      title: 'Kitchen Remodel: Day 1',
      description: 'Demolition is underway! Clearing out the old cabinets and flooring.',
      imageUrl: 'kitchen-demo.jpg',
    },
    {
      id: 11,
      title: 'Garden Project: Framing',
      description: 'The new raised garden beds have been framed and are ready for soil.',
      imageUrl: 'garden-beds.jpg',
    },
    {
      id: 12,
      title: 'Deck Staining Prep',
      description: 'Power washing the deck to prepare it for a new coat of stain.',
      imageUrl: 'deck-powerwash.png',
    },
    {
      id: 13,
      title: 'Kitchen Remodel: Day 1',
      description: 'Demolition is underway! Clearing out the old cabinets and flooring.',
      imageUrl: 'kitchen-demo.jpg',
    },
    {
      id: 14,
      title: 'Garden Project: Framing',
      description: 'The new raised garden beds have been framed and are ready for soil.',
      imageUrl: 'garden-beds.jpg',
    },
    {
      id: 15,
      title: 'Deck Staining Prep',
      description: 'Power washing the deck to prepare it for a new coat of stain.',
      imageUrl: 'deck-powerwash.png',
    },
    {
      id: 16,
      title: 'Kitchen Remodel: Day 1',
      description: 'Demolition is underway! Clearing out the old cabinets and flooring.',
      imageUrl: 'kitchen-demo.jpg',
    },
    {
      id: 17,
      title: 'Garden Project: Framing',
      description: 'The new raised garden beds have been framed and are ready for soil.',
      imageUrl: 'garden-beds.jpg',
    },
    {
      id: 18,
      title: 'Deck Staining Prep',
      description: 'Power washing the deck to prepare it for a new coat of stain.',
      imageUrl: 'deck-powerwash.png',
    },
    {
      id: 19,
      title: 'Kitchen Remodel: Day 1',
      description: 'Demolition is underway! Clearing out the old cabinets and flooring.',
      imageUrl: 'kitchen-demo.jpg',
    },
    {
      id: 20,
      title: 'Garden Project: Framing',
      description: 'The new raised garden beds have been framed and are ready for soil.',
      imageUrl: 'garden-beds.jpg',
    }
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
                <img
                  src={localImagesMap[update.imageUrl]}
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