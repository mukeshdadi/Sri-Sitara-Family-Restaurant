import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    { name: "Rahul", text: "The Kunda Biryani is absolutely delicious.", stars: 5 },
    { name: "Suresh", text: "One of the best family restaurants.", stars: 5 },
    { name: "Priya", text: "Excellent service and amazing taste.", stars: 5 },
    { name: "Kiran", text: "Highly recommended.", stars: 5 },
    { name: "Swathi", text: "Delicious food with excellent ambience.", stars: 5 },
    { name: "Ramesh", text: "Will definitely visit again.", stars: 5 }
  ];

  return (
    <section id="reviews" className="bg-primary">
      <div className="container mx-auto">
        <h2 className="section-title reveal">Customer Reviews</h2>
        <p className="section-subtitle reveal">What our valued guests say about us.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-secondary p-8 rounded-2xl border border-gray-800 hover:border-accent transition duration-300 shadow-lg reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                  <div className="flex text-accent text-sm">
                    {"★".repeat(review.stars)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 font-light italic leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
