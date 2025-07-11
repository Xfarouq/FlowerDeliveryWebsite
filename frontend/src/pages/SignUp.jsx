const SignUp = () => {
  return (
    <div className="signup">
      <div className="form-wrapper">
        <h1>Sign up</h1>
        <p className="description">
          Become a member and enjoy personalized gift recommendations, fast
          checkout, and more.
        </p>

        <div className="phone-display">
          <span className="phone-number">+380980275095</span>
          <img src="/images/edit-icon.svg" alt="edit" className="edit-icon" />
        </div>

        <div className="input-group">
          <label htmlFor="sms-code">Enter code from sms</label>
          <input type="text" id="sms-code" placeholder="XX XX XX" />
          <small>
            Please check your phone for a message containing a code to enter
          </small>
        </div>

        <button className="join-btn">JOIN US</button>

        <p className="resend">
          Didn’t receive a code? <span className="link">Resend code</span>
        </p>

        <div className="terms">
          <a href="/">Privacy Policy</a> <span>|</span>{" "}
          <a href="/">Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
