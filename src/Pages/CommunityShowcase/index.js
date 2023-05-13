import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { images as IMAGES } from "../../assets/images";

import styles from "./communityShowcase.module.css";

const images = IMAGES.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      <div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))}
    </div>
  ),
}));

export default function CommunityShowcase() {
  const [isVisible, setIsVisible] = useState(null);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry columnsCount={3} gutter="10px">
        {images.map((image, i) => (
          <div
            key={i}
            className={styles.imageContainer}
            onMouseOver={() => setIsVisible(i)}
            onMouseOut={() => setIsVisible(null)}
          >
            <img
              alt={image.prompt}
              key={i}
              src={image.src}
              style={{ width: "100%", display: "block" }}
            />
            <div
              className={`${styles.prompt} ${
                isVisible === i ? "" : styles.hide
              }`}
            >
              {image.prompt}
            </div>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
