import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./Post.module.scss";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="83" cy="167" r="2" />
    <rect x="0" y="305" rx="0" ry="0" width="350" height="0" />
    <rect x="1" y="3" rx="10" ry="10" width="424" height="133" />
    <rect x="0" y="158" rx="5" ry="5" width="79" height="20" />
    <rect x="87" y="158" rx="5" ry="5" width="57" height="20" />
    <rect x="0" y="187" rx="5" ry="5" width="179" height="24" />
    <rect x="0" y="223" rx="0" ry="0" width="260" height="15" />
    <rect x="0" y="242" rx="0" ry="0" width="239" height="15" />
    <rect x="0" y="263" rx="0" ry="0" width="227" height="15" />
    <rect x="0" y="282" rx="0" ry="0" width="242" height="15" />
  </ContentLoader>
);

export default Skeleton;
