import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import { peopleData } from "../AllFamily/data";
import "./FamilyDetail.css";

export default function FamilyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const member = peopleData.find((p) => p.id == id);
  if (!member) return <h2>Member Not Found</h2>;

  return (
    <div className="family-detail">
      {member.heading && (
        <h2 className="top-heading">{member.heading}</h2>
      )}
      {member.imagei && (
        <img src={member.imagei} alt={member.name} />
      )}
      <h1>{member.name}</h1>

      {member.age && <p><b>Age :</b> {member.age}</p>}
      {member.work && <p><b>Work :</b> {member.work}</p>}
      {member.mobile && <p><b>Mobile :</b> {member.mobile}</p>}
      {member.Relation && <p><b>Relation :</b> {member.Relation}</p>}
      {member.location && <p><b>Location :</b> {member.location}</p>}
      {member.shortDesc && <p><b>About :</b> {member.shortDesc}</p>}

      {member.paragraphs &&
        member.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

      {member.socials && (
        <div className="social-links">
          {member.socials.instagram && (
            <a href={member.socials.instagram} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          )}
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          )}
          {member.socials.facebook && (
            <a href={member.socials.facebook} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
          )}
          {member.socials.twitter && (
            <a href={member.socials.twitter} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          )}
          {member.socials.youtube && (
            <a href={member.socials.youtube} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          )}
        </div>
      )}
      {member.buttons && (
        <div className="family-buttons">

          {member.buttons.map((btn, index) => {

            if (btn.text === "All Family Members" && member.familyDropdown) {
              return (
                <div key={index} className="dropdown-wrapper">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDropdown(prev => !prev);
                    }}
                  >
                    {btn.text}
                  </button>

                  {showDropdown && (
                    <div className="dropdown">
                      {member.familyDropdown.map((person, i) => (
                        <div
                          key={i}
                          className="dropdown-item dorr"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDropdown(false);
                            navigate(person.link);
                          }}
                        >
                          {person.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(btn.link);
                }}
              >
                {btn.text}
              </button>
            );
          })}

        </div>
      )}

      {member.extraImage && (
        <div className="extra-image">
          <img src={member.extraImage} alt="extra" />
        </div>
      )}
      {member.Bheading && (
        <h3 className="bottom-heading">{member.Bheading}</h3>
      )}
    </div>
  );
}