import { GrTumblr } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";

const shareButtons = [
  {
    id: "tweet-quote",
    icon: <GrTwitter />,
    altText: "Make a Tweet!",
    baseHref: "https://twitter.com/intent/tweet?text="
  },
];

export default shareButtons;
