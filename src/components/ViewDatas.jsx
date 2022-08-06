import React from "react";

export default function ViewDatas({ userInfo, resetBtn }) {
  const { firstName, lastName, username, email, contact, password, portfolio } =
    userInfo;
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-sm-12 col-md-9 mx-auto">
          <div className="card">
            <div className="card-header text-center">
              <h2 style={{ fontFamily: "'Lobster', cursive" }}>
                Submitted Data
              </h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12 col-md-6 mb-3">
                  <blockquote className="blockquote mb-0">
                    <p>{firstName}</p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">First Name</cite>
                    </footer>
                  </blockquote>
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                  <blockquote className="blockquote mb-0">
                    <p>{lastName}</p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Last Name</cite>
                    </footer>
                  </blockquote>
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                  <blockquote className="blockquote mb-0">
                    <p>{username}</p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Username</cite>
                    </footer>
                  </blockquote>
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                  <blockquote className="blockquote mb-0">
                    <p>{email}</p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Email Address</cite>
                    </footer>
                  </blockquote>
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                  <blockquote className="blockquote mb-0">
                    <p>{contact}</p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Contact Details</cite>
                    </footer>
                  </blockquote>
                </div>
                <div className="col-sm-12 col-md-6 mb-3">
                  <blockquote className="blockquote mb-0">
                    <p>{password}</p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Password</cite>
                    </footer>
                  </blockquote>
                </div>
                <div className="col-12 mb-3">
                  <blockquote className="blockquote mb-0">
                    <p>{portfolio}</p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Portfolio URL</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <button
                    type="btn"
                    className={"btn btn-dark btn-lg"}
                    onClick={resetBtn}
                  >
                    Test Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
