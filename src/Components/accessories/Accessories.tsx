import React from "react";
const Accessories = () => {
  return (
    <div className="bg-light-100 p-3 w-[100%] rounded-3xl mt-[10px] flex justify-center items-center">
      {/* First Column */}
      <div className="flex justify-center flex-col items-center m-12 ">
        <img src="/assets/svgs/watch.svg" alt="Image" className="mb-2 mr-10" />
        <div
          style={{
            marginTop: "-10px",
            width: "132px",
            height: "15px",
            flexShrink: 0,
            borderRadius: "70px",
            background: "#000",
            filter: "blur(22px)",
          }}
        ></div>

        <h2
          className="text-lg text-center mb-1 mt-10"
          style={{ wordSpacing: "2px", fontSize: "25px", fontWeight: 500 }}
        >
          Get WaveTag Accessories
        </h2>
        <p
          className="text-sm text-gray-500 mb-3"
          style={{
            width: "250px",
            textAlign: "center",
            wordSpacing: "1px",
            fontSize: "16px",
            fontWeight: 400,
            marginTop: "10px",
          }}
        >
          Don’t Have Any Accessories? Purchase them here.
        </p>
        <button className="bg-primary-100 text-light-100 px-10 py-2 rounded-md mt-5">
          Order
        </button>
      </div>

      {/* Second Column */}
      <div className="flex flex-col items-center mx-6">
        <img src="/assets/svgs/card_acc.svg" alt="Image" className="mb-2" />
        <div
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            width: "281px",
            height: "17px",
            flexShrink: 0,
            borderRadius: "70px",
            background: "#000",
            filter: "blur(22px)",
          }}
        ></div>

        <h2
          className="text-lg text-center mb-1 mt-10"
          style={{ wordSpacing: "2px", fontSize: "25px", fontWeight: 500 }}
        >
          Activate WaveTag Accessories
        </h2>
        <p
          className="text-sm text-gray-500 mb-3"
          style={{
            width: "250px",
            textAlign: "center",
            wordSpacing: "1px",
            fontSize: "16px",
            fontWeight: 400,
            marginTop: "10px",
          }}
        >
          If you have all the accessories you need, simply activate them.
        </p>
        <button className="bg-primary-100 text-light-100 px-10 py-2 rounded-md mt-5">
          Activate
        </button>
      </div>
    </div>
  );
};

export default Accessories;
