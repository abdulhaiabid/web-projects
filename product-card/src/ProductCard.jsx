import React from "react";
import { useState } from "react";
import styles from "./ProductCard.module.css";
import yellowStar from "../src/assets/star-solid-full.svg";
import greyStar from "../src/assets/star-solid-empty.svg";

const ProductCard = ({ cardDetails }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    function truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) return text;

    let truncated = text.substring(0, maxLength);

    const lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace > 0) {
        truncated = truncated.substring(0, lastSpace);
    }

    return truncated + "...";
    }

    const Rating = (rating) => {
        const totalStars = 5; // maximum stars
        const stars = [];
        for (let i = 1; i <= totalStars; i++) {
            stars.push(
            <img
                key={i}
                src={
                i <= rating
                    ? yellowStar // filled star
                    : greyStar // empty star
                }
                alt=""
            />
            );
        }
        return <div className={styles["rating"]}>{stars}</div>;
    };

    return (
    <div className={styles["card"]}>
        <div className={`${styles["card-image"]} ${isLoaded ? styles["loaded"] : ""}`}>
            <img src={cardDetails.imgReference} onLoad={() => setIsLoaded(true)} alt={cardDetails.title} draggable="false"/>
        </div>
        <div className={styles["card-content"]}>
            <h3 className={styles["card-title"]}>
                {truncateText(cardDetails.title, 40)}
            </h3>
            <p className={styles["card-description"]}>
                {truncateText(cardDetails.description, 100)}
            </p>
        </div>
        <div className={styles["card-pricing-rating"]}>
            {Rating(cardDetails.rating)}
        <h3 className={styles["pricing"]}>{cardDetails.price}</h3>
        </div>
    </div>
    )
}

export default ProductCard