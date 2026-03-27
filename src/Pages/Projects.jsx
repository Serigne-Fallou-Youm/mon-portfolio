import { useState } from "react";





function Projects() {
  const [modalImage, setModalImage] = useState(null);

  const projets = [
  { id: 1, title: "Site1", image: "src/assets/Images/Site2.jpg" },
  { id: 2, title: "Site2", image: "src/assets/Images/Site2.jpg" },
  { id: 3, title: "Site3", image: "src/assets/Images/Site2.jpg" },
  { id: 4, title: "Site4", image: "src/assets/Images/Site2.jpg" },
  { id: 5, title: "Site5", image: "src/assets/Images/Site2.jpg" },
];

  return (
    <section id="projects" className="projects">
      <h2>Portfolio</h2>

      <div className="grid">
        {projets.map((site) => (
          <div
            key={site.id}
            className="card"
            onClick={() => setModalImage(site.image)}
          >
            <img src={site.image} alt={site.title} />
            <div className="overlay">
              <h3>{site.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Projet" />
        </div>
      )}
    </section>
  );
}

export default Projects