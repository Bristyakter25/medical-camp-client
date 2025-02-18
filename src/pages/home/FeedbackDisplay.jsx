import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const FeedbackDisplay = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axiosSecure.get("/feedback");
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, [axiosSecure]);

  return (
    <div className="container mx-auto my-10 ">
      <h2 className="text-center text-3xl mt-16 mb-10 text-[#A294F9] font-bold">
        Our Clients Feedback
      </h2>
      {/* Swiper Component */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={100}
        slidesPerView={1}
        loop={true}
        className="mySwiper"
      >
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <SwiperSlide key={feedback._id}>
              <div className="p-4 shadow-lg">
                {}
                <div className="flex justify-center mb-4 px-6">
                  <img
                    src={feedback.image || "https://via.placeholder.com/150"}
                    alt={feedback.name}
                    className="w-12 h-12 rounded-full mr-4 "
                  />
                  <div>
                    <h3 className="font-bold text-black dark:text-white  text-xl ">{feedback.name}</h3>
                    <p className="text-gray-700 text-sm dark:text-white ">{feedback.email}</p>
                  </div>
                </div>
                {/* Display the feedback text */}
                <div className="px-10">
                <p className="text-gray-700 dark:text-white text-center ">{feedback.feedback}</p>
                <p className="text-gray-500  dark:text-white mt-2 text-center">
                  {new Date(feedback.createdAt).toLocaleDateString()}
                </p>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="p-4 text-center">No feedback available</div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default FeedbackDisplay;
