import React from "react";
import { useNavigate } from "react-router-dom";
import "./FamilyTree.css";

import papa from "../assets/Images/AllFamily/Papa Ji/papa3 - Copy.jpeg";
import mummy from "../assets/Images/AllFamily/Mummy Ji/IMG_4928.JPG";
import aashu from "../assets/Images/Family/vvvv.png";
import didi from "../assets/Images/Photos Section/taru.jpg";
import sister from "../assets/Images/Photos Section/lalu.jpg";

export default function FamilyTree() {

  const navigate = useNavigate();

  return (
    <div className="family-wrapper">
      <div className="family-card">
        <div className="tree-section">
          <div className="tree">
            <img src={papa} className="node papa" alt="Papa" />
            <img src={mummy} className="node mummy" alt="Mummy" />
            <img src={aashu} className="node child center" alt="Aashu" />
            <img src={didi} className="node child left" alt="Didi" />
            <img src={sister} className="node child right" alt="Sister" />
            <div className="ajet"></div>
            <div className="ajett"></div>
            <div className="ajettt"></div>
            <div className="ajetttt"></div>
            <div className="ajettttv"></div>
            <div className="ajettttvv"></div>
            <div className="ajettttt"></div>
          </div>
        </div>

        <div className="content-section">
          <h2>THE FAMILY TREE & ANCESTRY</h2>
          <p>Trace your roots and build your family’s legacy.</p>
          <button
            className="explore-btn"
            onClick={() => navigate("/AllFamilys")}
          >
            EXPLORE TREE
          </button>

          <div className="features">
            <div>📷 Photo Restoration</div>
            <div>🎤 Oral History</div>
          </div>
          <div className="featuress">
            <div>☁️ Digital Archive</div>
          </div>
        </div>

      </div>
    </div>
  );
}