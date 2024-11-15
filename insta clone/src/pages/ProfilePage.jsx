import React, { useState } from "react";

function ProfilePage() {
  const [selectPosts, setSelectPosts] = useState(true);
  const [selectReels, setSelectReels] = useState(false);
  const [selectSaved, setSelectSaved] = useState(false);

  const handlePostsSelect = () => {
    setSelectPosts(true);
    setSelectReels(false);
    setSelectSaved(false);
  };

  const handleReelsSelect = () => {
    setSelectPosts(false);
    setSelectReels(true);
    setSelectSaved(false);
  };

  const handleSavedSelect = () => {
    setSelectPosts(false);
    setSelectReels(false);
    setSelectSaved(true);
  };

  return (
    <div>
      <div
        style={{
          height: "235px",
          width: "900px",
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          marginLeft: "40px",
          borderBottom: "1px solid #333333",
        }}
      >
        {/* profile pic */}
        <div
          style={{
            height: "235px",
            width: "283px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ height: "150px", width: "150px" }}>
            <img
              src="https://imgs.search.brave.com/V75w2A2FCSCtt4jgIe476J3zsJuKYmqK7u1OLlEwe44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM5LzYy/L2I3LzM5NjJiN2E5/NmY1NmZjYmMzZTk0/NTlhMTEwYmYxNTZk/LmpwZw"
              style={{
                borderRadius: 100,
                border: "2px solid black",
              }}
            />
          </div>
        </div>

        {/* details */}
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "5px",
              color: "white",
              fontWeight: "500",
            }}
          >
            <h1 style={{ fontSize: 18 }}>userName</h1>
            <button
              style={{
                backgroundColor: "#424242",
                marginLeft: "15px",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingTop: "2px",
                paddingBottom: "2px",
                color: "white",
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 14,
              }}
            >
              <h1>Edit Profile</h1>
            </button>
            <button>
              <i
                className="fi fi-sr-settings mt-1"
                style={{ marginLeft: "400px" }}
              ></i>
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "white",
              marginTop: "20px",
              fontWeight: 500,
            }}
          >
            <h1> X posts </h1>
            <h1 style={{ marginLeft: "20px" }}> Y followers</h1>
            <h1 style={{ marginLeft: "20px" }}> Z following</h1>
          </div>

          <h1
            style={{
              fontSize: 18,
              color: "white",
              fontWeight: 500,
              marginTop: "18px",
            }}
          >
            NAME
          </h1>

          <div
            style={{
              color: "white",
              height: "auto",
              width: "550px",
              marginTop: "18px",
              borderRadius: "5px",
            }}
          >
            <p
              style={{
                wordWrap: "break-word",
                whiteSpace: "normal",
                fontSize: 12,
              }}
            >
              BIO...............................................................................................................................................................................................................................................................................................
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            height: "50px",
            width: "300px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            fontSize: 13,
          }}
        >
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              borderTop: selectPosts ? "2px solid white" : "none",
              height: "50px",
              alignItems: "center",
            }}
            onClick={handlePostsSelect}
          >
            <i className="fi fi-rr-grid"></i>
            <h1 style={{ marginLeft: "7px" }}>POSTS</h1>
          </button>
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              borderTop: selectReels ? "2px solid white" : "none",
              height: "50px",
              alignItems: "center",
            }}
            onClick={handleReelsSelect}
          >
            <i className="fi fi-tr-films"></i>
            <h1 style={{ marginLeft: "7px" }}>REELS</h1>
          </button>
          <button
            style={{
              display: "flex",
              flexDirection: "row",
              borderTop: selectSaved ? "2px solid white" : "none",
              height: "50px",
              alignItems: "center",
            }}
            onClick={handleSavedSelect}
          >
            <i className="fi fi-rr-bookmark"></i>
            <h1 style={{ marginLeft: "7px" }}>SAVED</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
