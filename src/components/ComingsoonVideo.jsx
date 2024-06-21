// const VideoPage = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//       <div className="text-center p-8 bg-white bg-opacity-30 rounded-lg shadow-xl backdrop-blur-md">
//         <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
//           Coming Soon
//         </h1>
//         <p className="mt-4 text-lg text-white">
//           Stay tuned for something amazing!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default VideoPage;

// Second Approach
import videoSrc from "../images/coming-soon.mp4";

const VideoPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-30 text-center p-8 bg-black bg-opacity-20 rounded-lg shadow-xl backdrop-blur-md">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          {/* Coming Soon */} Stay tuned for something amazing!
        </h1>
        {/* <p className="mt-4 text-lg text-blue-500">
          Stay tuned for something amazing!
        </p> */}
      </div>
    </div>
  );
};

export default VideoPage;
