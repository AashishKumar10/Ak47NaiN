import React from "react";

const FamilySection = () => {
  return (
    <section id="family" style={styles.section}>
      <h2 style={styles.heading}>Our Family Members</h2>

      <div style={styles.container}>
        <div style={styles.card}>
          <h3>Father</h3>
          <p>Mr Om Parkash Nain</p>
        </div>

        <div style={styles.card}>
          <h3>Mother</h3>
          <p>Mrs. Saroj bala</p>
        </div>

        <div style={styles.card}>
          <h3>You</h3>
          <p>Aashish Kumar</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px 20px",
    textAlign: "center"
  },
  heading: {
    fontSize: "30px",
    marginBottom: "30px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
  }
};

export default FamilySection;