import React, {useState} from "react";

function BoxComponent({ title, content, image }) {
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  

    return (
      <div
      className="min-h-96 w-full items-center bg-custom-secondary text-center rounded-md sm:h-72 h-72 py-5 text-gray-200"
      onClick={handleClick}
      style={{
        backgroundImage: isClicked ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.3s ease",
      }}
    >
         {!isClicked && (
        <>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p>{content}</p>
          <div className="mt-4 flex justify-center items-center max-h-full bg-cover bg-center rounded-md">
            <img
              src={image}
              alt={title}
              className="h-full max-h-64 w-auto object-contain p-2 px-10"
            />
          </div>
        </>
      )}
      </div>
    );
  }
export default BoxComponent  