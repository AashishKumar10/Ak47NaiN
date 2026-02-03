import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { peopleData } from "../Pages/familyData";
import "./Aashu.css";

export default function Aashu() {
  const [search, setSearch] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);
  const navigate = useNavigate();

  const filtered = peopleData.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="aashu-page">

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search family member..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggest(true);
          }}
        />

        {showSuggest && search && (
          <div className="suggest-box">
            {filtered.length > 0 ? (
              filtered.map(item => (
                <div
                  key={item.id}
                  className="suggest-item"
                  onClick={() => {
                    navigate(`/${item.route}`);
                    setShowSuggest(false);
                    setSearch("");
                  }}
                >
                  {item.name}
                </div>
              ))
            ) : (
              <div className="suggest-no">Not Found</div>
            )}
          </div>
        )}
      </div>

      <h2 className="welcome-text">Welcome 😊</h2>

      <div className="photo-grid">
        {peopleData.map((item) => (
          <div
            key={item.id}
            className="photo-card"
            onClick={() => navigate(`/${item.route}`)}
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}