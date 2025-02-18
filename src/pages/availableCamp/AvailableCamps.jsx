import { useEffect, useState } from "react";
import AvailableCampCard from "./AvailableCampCard";

const AvailableCamps = () => {
  const [availableCamps, setAvailableCamps] = useState([]);
  const [filteredCamps, setFilteredCamps] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isTwoColumnLayout, setIsTwoColumnLayout] = useState(false);

  useEffect(() => {
    fetch("https://medical-camp-server-five.vercel.app/addCamp")
      .then((res) => res.json())
      .then((data) => {
        setAvailableCamps(data);
        setFilteredCamps(data); 
      });
  }, []);

  // Handle search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = availableCamps.filter((camp) => {
      return (
        camp.name.toLowerCase().includes(query) ||
        camp.location.toLowerCase().includes(query) ||
        camp.date.includes(query)
      );
    });

    setFilteredCamps(filtered);
  };

  // Handle sorting functionality
  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sorted = [...filteredCamps];
    if (option === "mostRegistered") {
      sorted.sort((a, b) => b.participantCount - a.participantCount);
    } else if (option === "campFees") {
      sorted.sort((a, b) => a.fees - b.fees); 
    } else if (option === "alphabetical") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredCamps(sorted);
  };

  
  const toggleLayout = () => {
    setIsTwoColumnLayout(!isTwoColumnLayout);
  };

  return (
    <div>
      <h2 className="text-center w-full my-5 text-3xl text-[#A294F9] font-bold">
        Available Camps
      </h2>

      <div className="lg:w-[1024px] mx-auto w-[380px] mb-5">
       
        <input
          type="text"
          placeholder="Search camps by name, location, or date"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 mb-4 border rounded-md"
        />

        
        <select
          value={sortOption}
          onChange={handleSort}
          className="w-full p-2 mb-4 border rounded-md"
        >
          <option value="">Sort By</option>
          <option value="mostRegistered">Most Registered</option>
          <option value="campFees">Camp Fees</option>
          <option value="alphabetical">Alphabetical (Camp Name)</option>
        </select>

       
        <button
          onClick={toggleLayout}
          className="btn w-full bg-[#C5BAFF] glass text-violet-500"
        >
          Switch to {isTwoColumnLayout ? "Three" : "Two"} Column Layout
        </button>
      </div>

      <div
        className={`grid ${
          isTwoColumnLayout ? "grid-cols-2" : "grid-cols-3"
        } gap-6 lg:w-[1024px] mx-auto w-[380px]`}
      >
        {filteredCamps.map((availableCamp) => (
          <AvailableCampCard
            key={availableCamp._id}
            availableCamp={availableCamp}
          ></AvailableCampCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableCamps;
