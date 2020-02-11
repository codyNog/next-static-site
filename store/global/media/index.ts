import media from "use-media";
import { createContainer } from "unstated-next";

const useMedia = () => {
  const isWide = media({ minWidth: 1000 });
  const isMobile = media({ maxWidth: 720 });

  return { isWide, isMobile };
};

const MediaStore = createContainer(useMedia);

export default MediaStore;
