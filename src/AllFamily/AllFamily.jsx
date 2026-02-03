import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { peopleData } from "./data";
import "./AllFamily.css";

export default function AllFamily() {
  const [search, setSearch] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);
  const navigate = useNavigate();
  const filtered = peopleData.filter((p) =>
    (p.name || "").toLowerCase().includes((search || "").toLowerCase())
  );


  return (
    <div className="allfamily-page">

      <div className="search-wrapperer">
        <input
          type="text"
          className="search"
          placeholder="Search family member..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggest(true);
          }}
          onFocus={() => setShowSuggest(true)}
          onBlur={() => setTimeout(() => setShowSuggest(false), 150)}
        />

        {showSuggest && search && (
          <div className="suggest-box">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <div
                  key={item.id}
                  className="suggest-item"
                  onClick={() => {
                    setSearch(item.name);
                    setShowSuggest(false);
                  }}
                >
                  {item.name}
                </div>
              ))
            ) : (
              <div className="suggest-no">No result found</div>
            )}
          </div>
        )}
      </div>

      {filtered.map((item, index) => {
        const isRight = index % 2 !== 0;

        return (
          <div key={item.id} className="row hh">

            {!isRight && (
              <>
                <div className="image-box">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="arrow-icon ">◀</div>
              </>
            )}

            <div className="content-box">
              <h2>{item.name}</h2>
              <p>{item.describe}</p>
              <button onClick={() => navigate(`/family/${item.id}`)}>
                View More..
              </button>
            </div>

            {isRight && (
              <>
                <div className="arrow-icon jkjk">▶</div>
                <div className="image-box">
                  <img src={item.image} alt={item.name} />
                </div>
              </>
            )}

          </div>
        );
      })}
    </div>
  );
}