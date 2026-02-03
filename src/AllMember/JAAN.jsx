import React from "react";

// Images import karo
import img1 from "../assets/Images/Aashish/ERRER.png";

const images = [
    img1
];

export default function Gourav() {
    return (
        <>
            <style>
                {`
        .gallery-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 25px;
          max-width: 100%;
          margin: 20px 80px;
        }
          .headdr{
          text-align: center;
          font-size: 40px;
          font-family: "Saira", sans-serif;
          color: rgb(64, 34, 34);
    margin-top: 20px;
          padding-bottom: 10px;
          font-weight: 400;
         }

        .gallery-item {
        flex: 1 1 calc(33.333% - 25px);
        display: flex;
        width: 100%;
        height: 300px;
        border: 3px solid #443333;
        border-radius: 25px;
        object-fit: cover;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        animation: float 3s ease-in-out infinite;
        }

        .gallery-item.center-row {
          justify-content: center;
        }

        .gallery-item img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          transition: transform 0.3s;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        /* Responsive Breakpoints */
        @media screen and (max-width: 900px) {
          .gallery-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
    max-width: 100%;
    margin: 20px 50px;
}
    .headdr {
    margin-top: 20px;
    }
    .gallery-item {
            flex: 1 1 calc(50% - 10px); /* 2 photos per row */
            height: 285px
          }
          .gallery-item.center-row {
            justify-content: center;
          }
        }

        @media screen and (max-width: 600px){
        .gallery-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 15px;
    max-width: 100%;
    margin: 20px 25px;
}
    .headdr {
    margin-top: 20px;
    }
        .gallery-item {
            flex: 1 1 calc(50% - 10px); /* 2 photos per row */
            height: 235px
          }
          .gallery-item.center-row {
            justify-content: center;
          }
            }


        @media screen and (max-width: 435px) {
          .gallery-item {
            flex: 1 1 100%; /* 1 photo per row */
          }
          .gallery-item.center-row {
            justify-content: center;
          }
            .gallery-container{
          margin: 0px 25px;
            }
          h2{margin-top: 14px;}
        }
        `}
            </style>

            <h2 className="headdr">WELCOME 🙏</h2>

            <div className="gallery-container">
                {images.map((img, index) => (
                    <div
                        className={`gallery-item ${index % 6 >= 3 ? "center-row" : ""}`}
                        key={index}
                    >
                        <img src={img} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </div>
        </>
    );
}
