import React, { useState } from 'react'
import ButtonLoadingSpinner from "../components/loader/ButtonLoadingSpinner";
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { registerUser } from '../redux/actions/authActions';

const SignUp = () => {

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarError, setAvatarError] = useState(null);
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const dispatch = useDispatch();

  const handleAvatarChange = () => {
    const file = e.target.files[0];
    if(!file){
      setAvatar(null);
      setAvatarError(null);
      return;
    }
    if(file.type !== "image/jpeg" && file.type !== "image/png" && file.type !== "image/jpg"){
      setAvatar(null);
      setAvatarError("Please upload a valid image file (jpeg, jpg, png)");
    } else if(file.size > 10 * 1024 * 1024){
      setAvatar(null);
      setAvatarError("Please upload an image file less than 10MB");
    } else {
      setAvatar(file);
      setAvatarError(null);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingText("Signing up...");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);
    formData.append("role", "general");
    formData.append("isConsentGiven", isConsentGiven.toString());

    const timeout = setTimeout(() => {
      setLoadingText(
        "This is taking longer than usual. Please wait while backend services are getting started."
      );
    }, 5000);

    await dispatch(registerUser(formData));
    setLoading(false);
    clearTimeout(timeout);
  }

  return (
    <section className='bg-white'>
      <div className='container mx-auto flex min-h-screen items-center justify-center px-6'>
        <form className='w-full max-w-md' onSubmit={handleSubmit}>
          <div className="mt-6 flex items-center justify-center">
              <Link
                to={"/signin"}
                className="w-1/3 border-b border-gray-400 pb-4 text-center font-medium text-gray-800"
              >
                Sign In
              </Link>
              <Link
                to={"/signup"}
                className="text-cente w-1/3 border-b-2 border-blue-500 pb-4 font-medium text-gray-800"
              >
                Sign Up
              </Link>
            </div>
            <div className="relative mt-8 flex items-center">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-3 h-6 w-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="block w-full rounded-lg border bg-white px-11 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Username"
                required
                autoComplete="off"
              />
            </div>
            <label
              htmlFor="avatar"
              className="mx-auto mt-6 flex cursor-pointer items-center rounded-lg border-2 border-dashed bg-white px-3 py-3 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <h2 className="mx-3 text-gray-400">Profile Photo</h2>
              <input
                id="avatar"
                type="file"
                className="hidden"
                name="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
                autoComplete="off"
              />
            </label>
            <div className="relative mt-6 flex items-center">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-3 h-6 w-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                id="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                className="block w-full rounded-lg border bg-white px-11 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Email address"
                required
                autoComplete="off"
              />
            </div>
            <div className="relative mt-4 flex items-center">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-3 h-6 w-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="block w-full rounded-lg border bg-white px-10 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder="Password"
                required
                autoComplete="off"
              />
            </div>
            <div className="mt-6">
              <button
                disabled={loading}
                type="submit"
                className={`w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {loading ? (
                  <ButtonLoadingSpinner loadingText={loadingText} />
                ) : (
                  <span>Sign Up</span>
                )}
              </button>
            </div>
        </form>
      </div>
    </section>
  )
}

export default SignUp