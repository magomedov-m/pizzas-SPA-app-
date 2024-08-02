import React from "react";
import ContentLoader from "react-content-loader";

const Sceletone = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={476}
    height={465}
    viewBox="0 0 476 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="295" rx="10" ry="10" width="280" height="32" />
    <rect x="0" y="465" rx="10" ry="10" width="280" height="77" />
    <circle cx="140" cy="140" r="140" />
    <rect x="0" y="350" rx="0" ry="0" width="280" height="70" />
    <rect x="19" y="465" rx="0" ry="0" width="100" height="25" />
    <rect x="0" y="440" rx="15" ry="15" width="100" height="25" />
    <rect x="180" y="440" rx="15" ry="15" width="100" height="25" />
  </ContentLoader>
);

export default Sceletone;
