import { linkedinUsername, title, username, instagramUsername, xUsername } from "@/constants/strings";

const linksMetadata = {
  x: "https://x.com/" + xUsername,
  linkedin: "https://linkedin.com/in/" + linkedinUsername,
  github: "https://github.com/" + username,
  instagram: "https://instagram.com/" + instagramUsername,
  youtube: "https://youtube.com/@" + username,
};

export const sourceCode = linksMetadata.github + "/" + title + ".com";

export default linksMetadata;
