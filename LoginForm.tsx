import React, { useState } from 'react';
import type { AppAction } from '../types';
import { Mail } from 'lucide-react';
import { SiApple, SiGoogle } from 'react-icons/si';

interface LoginFormProps {
  dispatch: React.Dispatch<AppAction>;
}

const LoginForm: React.FC<LoginFormProps> = ({ dispatch }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login for email/password
    dispatch({ 
      type: 'SET_USER', 
      payload: { 
        id: 1, 
        name: 'John Doe', 
        email: formData.email, 
        phone: '+91-9876543210',
        verified: true 
      } 
    });
    dispatch({ type: 'SET_VIEW', payload: 'home' });
  };
  
  // Handlers for social logins (simulated)
  const handleGoogleLogin = () => {
    // In a real app, this would initiate the Google OAuth flow
    dispatch({ 
      type: 'SET_USER', 
      payload: { 
        id: 2, 
        name: 'Jane Smith', 
        email: 'jane.smith@google.com', 
        phone: 'N/A',
        verified: true 
      } 
    });
    dispatch({ type: 'SET_VIEW', payload: 'home' });
  };

  const handleAppleLogin = () => {
    // In a real app, this would initiate the Apple Sign-In flow
    dispatch({ 
      type: 'SET_USER', 
      payload: { 
        id: 3, 
        name: 'Adam Apple', 
        email: 'adam.apple@icloud.com', 
        phone: 'N/A',
        verified: true 
      } 
    });
    dispatch({ type: 'SET_VIEW', payload: 'home' });
  };


  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 mt-10 transition-transform transform hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Login to Avasa</h2>
      
      {/* Social Login Buttons */}
      <div className="space-y-4 mb-6">
        <button 
          onClick={handleGoogleLogin} 
          className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 transition-transform transform hover:scale-105 bg-gray-50 transition-colors"
        >
          <SiGoogle className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>
        <button 
          onClick={handleAppleLogin} 
          className="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 transition-transform transform hover:scale-105 bg-gray-50 transition-colors"
        >
          <SiApple className="w-5 h-5" color="black" />
          <span>Continue with Apple</span>
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center space-x-4 mb-6">
        <hr className="flex-1 border-gray-300" />
        <span className="text-gray-500 text-sm">or</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      {/* Email/Password Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
              placeholder="Enter your email"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button 
            onClick={() => dispatch({ type: 'SET_VIEW', payload: 'signup' })}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
