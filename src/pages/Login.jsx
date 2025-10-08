import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';


function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    otp: ''
  });
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();

  // Countdown timer for OTP resend
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const startOtpCountdown = () => {
    setCountdown(30); // 30 seconds countdown
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (forgotPassword) {
      // Handle forgot password logic
      alert('Password reset link sent to your email!');
      setForgotPassword(false);
      return;
    }
    
    if (isLogin) {
      // Handle login logic
      if (!formData.email || !formData.password) {
        alert('Please enter both email and password');
        return;
      }
      console.log('Login data:', { email: formData.email });
      // Here you would typically call your authentication API
      // For demo, we'll just log in the user
      // navigate('/dashboard');
      return;
    }
    
    // Signup flow
    if (!showOtp) {
      // First step: Send OTP to email
      if (!formData.email) {
        alert('Please enter your email address');
        return;
      }
      console.log('Sending OTP to:', formData.email);
      // Here you would typically call your API to send OTP
      setShowOtp(true);
      setOtpSent(true);
      startOtpCountdown();
    } else {
      // Second step: Verify OTP
      if (formData.otp.length === 6) { // Assuming 6-digit OTP
        console.log('Verifying OTP:', formData.otp);
        // Here you would typically verify the OTP with your backend
        // For demo, we'll just show success
        alert('ERROR NOT FOUND');
        // After successful verification, you can redirect or show a success message
        // navigate('/dashboard');
      } else {
        alert('Please enter a valid 6-digit OTP');
      }
    }
  };
  
  const handleResendOtp = (e) => {
    e.preventDefault();
    if (countdown === 0) {
      console.log('Resending OTP to:', formData.email);
      // Here you would typically call your API to resend OTP
      startOtpCountdown();
      alert('OTP has been resent to your email');
    }
  };

  const renderSignupForm = () => (
    <div className="login-header">
      <h2>Welcome to AUSUMN</h2>
      <p>Create your account</p>
    </div>
  );

  const renderLoginForm = () => (
    <div className="login-header">
      <h2>Welcome back</h2>
      <p>Login to your account</p>
    </div>
  );

  const renderOtpForm = () => (
    <div className="login-header">
      <h2>Verify your email</h2>
      <p>We've sent a 6-digit code to {formData.email}</p>
    </div>
  );

  const renderForgotPasswordForm = () => (
    <div className="login-header">
      <h2>Reset Password</h2>
      <p>Enter your email to receive a reset link</p>
    </div>
  );

  return (
    <div className="login-container">
      <div className="login-box">
        {showOtp ? renderOtpForm() : 
         forgotPassword ? renderForgotPasswordForm() :
         isLogin ? renderLoginForm() : renderSignupForm()}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              disabled={showOtp && !forgotPassword}
            />
          </div>
          
          {isLogin && !forgotPassword && !showOtp && (
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          )}
          
          {showOtp && (
            <div className="form-group">
              <div className="otp-container">
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter 6-digit code"
                  value={formData.otp}
                  onChange={handleChange}
                  maxLength="6"
                  pattern="\d{6}"
                  title="Please enter a 6-digit OTP"
                  required
                  className="form-input otp-input"
                />
                <div className="otp-actions">
                  {countdown > 0 ? (
                    <span className="otp-timer">Resend in {countdown}s</span>
                  ) : (
                    <button 
                      type="button" 
                      className="text-button"
                      onClick={handleResendOtp}
                    >
                      Resend code
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {isLogin && !forgotPassword && !showOtp && (
            <div className="forgot-password">
              <button 
                type="button" 
                className="text-button"
                onClick={() => setForgotPassword(true)}
              >
                Forgot Password?
              </button>
            </div>
          )}
          
          {!isLogin && !forgotPassword && !showOtp && (
            <div className="terms">
              By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
            </div>
          )}
          
          <button type="submit" className="submit-btn">
            {showOtp ? 'Verify' : 
             forgotPassword ? 'Send Reset Link' : 
             isLogin ? 'Login' : 'Request OTP'}
          </button>
          
          <div className="form-footer">
            {showOtp ? (
              <p className="text-center">
                <button 
                  type="button" 
                  className="text-button"
                  onClick={() => {
                    setShowOtp(false);
                    setOtpSent(false);
                    setFormData({...formData, otp: ''});
                  }}
                >
                  ← Back to {isLogin ? 'Login' : 'Sign Up'}
                </button>
              </p>
            ) : forgotPassword ? (
              <p className="text-center">
                Remember your password?{' '}
                <button 
                  type="button" 
                  className="text-button"
                  onClick={() => setForgotPassword(false)}
                >
                  Back to Login
                </button>
              </p>
            ) : (
              <p className="text-center">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button 
                  type="button" 
                  className="text-button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setForgotPassword(false);
                    setShowOtp(false);
                    setOtpSent(false);
                  }}
                >
                  {isLogin ? 'Sign Up' : 'Login'}
                </button>
              </p>
            )}
          </div>
        </form>
        
        <div className="back-home">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
