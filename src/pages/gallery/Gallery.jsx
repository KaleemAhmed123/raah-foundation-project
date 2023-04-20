import { useEffect } from "react";
import "./gallery.css";
import Banner from "../../assets/images/Banner.jpg";
import TopBanner from "../../components/topBanner/TopBanner";
import port from "../../assets/images/gallery1_6.webp";
import land from "../../assets/images/gallery7_15.webp";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 0; i < galleryLength; i++) {
    if (i < 6) images.push(port);
    else images.push(land);
  }
  // console.log(images);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <TopBanner image={Banner} title="Our Gallery">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        corrupti molestias debitis nam repellendus. Quod!
      </TopBanner>
      <section className="gallery">
        <div className="container gallery__wrapper">
          {images.map((image, idx) => {
            return (
              <article key={idx}>
                <img src={image} alt={`image ${idx + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
