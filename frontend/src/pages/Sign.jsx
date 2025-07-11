const Sign = () => {
  return (
    <div className="sign">
      <div className="form-container">
        <div className="text">
          <h1>Greetings! Welcome to luxury gift shop.</h1>
          <p>Use your mobile number to sign up or log in</p>
          <input type="tel" placeholder="+380 XX XXX XX XX" />
          <button className="continue-btn">CONTINUE</button>
        </div>
        <div className="policy">
          <h4>
            Privacy Policy <span className="line"></span> Terms and Conditions
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Sign;
