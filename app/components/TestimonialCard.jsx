"use client";
import { useEffect, useState } from "react";

const ProjectCard = ({ quote, author }) => (
  <div className="px-1 relative">
    <div className="flex flex-col justify-between items-start p-2 gap-y-2 mt-6">
      <div className="text-base font-medium">{quote}</div>
      <div className="text-sm text-gray-500">— {author}</div>
    </div>
  </div>
);

const TestimonialCard = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function updateQuote() {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes?category=best", {
          headers: {
            "X-Api-Key": "qJd5X0UDNmwe3Nx+/+fINw==dOlh6aSj5deYrZCY", // Replace YOUR_API_KEY with the actual API key
          },
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        console.log(data);

        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setError("Failed to load quote. Please try again.");
      } finally {
        setIsLoading(false);
        
      }
    }

    updateQuote();
  }, []);

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-fit col-span-2 row-span-2 relative">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">Quote of the day</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-8 px-2">
        {isLoading ? (
          <div>Looking for wisdom 🧙</div>
        ) : error ? (
          <div className="text-red-500 text-sm">{error}</div>
        ) : (
          <ProjectCard quote={quote} author={author} />
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
