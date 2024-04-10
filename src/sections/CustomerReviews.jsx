import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

function CustomerReviews() {
    return (
        <div>
            <section className="max-container">
                <h3 className="font-palanquin text-center text-4xl font-bold">
                    What our <span className="text-coral-red">Customers</span>{" "}
                    Say?
                </h3>
                <p className="info-text mt-4 m-auto max-w-lg text-center">
                    Hear genuine stories from our satisfied customers.
                </p>
                <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14">
                    {reviews.map((review) => {
                        return (
                            <ReviewCard
                                key={review.customerName}
                                imgURL={review.imgURL}
                                customerName={review.customerName}
                                rating={review.rating}
                                feedBack={review.feedback}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default CustomerReviews;
