import { useState } from "react";
import PropTypes from "prop-types";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

StarRating.propTypes = {
  maxRating: PropTypes.number.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  defaultRating: PropTypes.number,
  onSetTextStarsRate: PropTypes.func,
};

export default function StarRating({
  maxRating = 1,
  color = "#f8bd65",
  size = 48,
  messages = [],
  defaultRating = 0,
  onSetTextStarsRate,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function onStarClick(i) {
    setRating(i);
    // onSetTextStarsRate(i);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div className="star-text-wrapper">
      <div className="star-container">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={crypto.randomUUID()}
            color={color}
            size={size}
            onRate={() => onStarClick(i + 1)}
            full={
              tempRating ? tempRating >= i + 1 : rating >= i + 1 ? true : false
            }
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
    // <div style={containerStyle}>
    //   <div style={starContainerStyle}>
    //     {Array.from({ length: maxRating }, (_, i) => (
    //       <Star
    //         key={crypto.randomUUID()}
    //         color={color}
    //         size={size}
    //         onRate={() => onStarClick(i + 1)}
    //         full={
    //           tempRating ? tempRating >= i + 1 : rating >= i + 1 ? true : false
    //         }
    //         onHoverIn={() => setTempRating(i + 1)}
    //         onHoverOut={() => setTempRating(0)}
    //       />
    //     ))}
    //   </div>
    //   <p style={textStyle}>
    //     {messages.length === maxRating
    //       ? messages[tempRating ? tempRating - 1 : rating - 1]
    //       : tempRating || rating || ""}
    //   </p>
    // </div>
  );
}
