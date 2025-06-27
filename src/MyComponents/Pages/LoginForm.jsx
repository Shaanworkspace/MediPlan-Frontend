import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import HomePageHeader from "../UI/HomePageHeader";
import axios from "axios";
import HomeHeader from "../UI/HomeHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    useEffect(() => {
        let timeout;
        if (loading) {
            timeout = setTimeout(() => {
                setError('Server is waking up. Please wait a bit longer...');
            }, 15000);
        }
        return () => clearTimeout(timeout);
    }, [loading]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload on form submission
        setError(null);
        setSuccess(null);
        setLoading(true); // START LOADING

        // Validate email format
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Invalid email format");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
                email: formData.email,
                password: formData.password
            });

            console.log(response.data);

            const { token, roles, firstName, lastName, email } = response.data;
            // Combine firstName and lastName for display
            const adminName = `${firstName} ${lastName}`.trim() || 'Admin'; // Fallback to 'Admin' if empty

            // Store token and roles in localStorage (key , value) pairs
            localStorage.setItem('token', token);
            localStorage.setItem('roles', JSON.stringify(roles));
            localStorage.setItem('adminName', adminName); // Store admin name for fallback
            localStorage.setItem("email", response.data.username); // Assuming backend returns email

            const idByEmail = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/patient/email/${response.data.username}`);
            localStorage.setItem("id", idByEmail.data.id);

            // Clear the form fields
            setFormData({
                email: '',
                password: '',
            });
            setSuccess('Login successful! Redirecting...');
            setLoading(false); // END LOADING
            // Redirect based on role
            if (roles.includes('ADMIN')) {
                navigate('/admin-dashboard', { state: { adminName } });
            } else if (roles.includes('PATIENT') || roles.includes('DOCTOR') || roles.includes('CARE_GIVER')) {
                navigate('/user-dashboard');
            } else {
                setError('Unknown role. Please contact support.');
                navigate('/error');
            }
        } catch (err) {
            console.error('Login failed:', err.response);
            setError(err.response?.data?.error || 'Login failed. Please try again.');
            setLoading(false); // END LOADING
        }
    };

    const handleNavigation = (route) => {
        navigate(route);
    };

    return (
        <div className="bg-[#E6E6FA]">


            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-1">
                <HomeHeader />
            </div>
            <div className="mt-8 sm:mt-4 min-h-screen mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-cover bg-center flex flex-col items-center justify-center">
                <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg mx-4">
                    <h2 className="text-3xl font-bold text-center text-black mb-6">
                        Welcome to MediPlan
                    </h2>

                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
                            {success}
                        </div>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit} aria-busy={loading}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="example@email.com"
                                className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleInputChange}
                                value={formData.password}
                                placeholder="********"
                                className="w-full px-4 py-2 mt-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div>
                            <button
                                disabled={loading}
                                type="submit"
                                className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}  text-white flex justify-center items-center py-2 rounded-xl transition-all`}
                            >
                                {loading ? (<>
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8H4z"
                                        ></path>
                                    </svg>
                                    Please wait...
                                </>) : ('Login')}

                            </button>
                        </div>
                    </form>

                    <div className="my-4 flex items-center justify-between">
                        <hr className="w-1/3 border-gray-300" />
                        <span className="text-gray-500 text-sm">or continue with</span>
                        <hr className="w-1/3 border-gray-300" />
                    </div>

                    <div className="flex flex-col gap-4 justify-center">
                        <button className="flex justify-center flex-nowrap items-center gap-2 border px-4 py-2 rounded-lg hover:shadow transition">
                            <FcGoogle alt="Google" className="w-5 h-5" />
                            <span > Login with Google</span>
                        </button>
                        <button className="flex justify-center  items-center gap-2 border px-4 py-2 rounded-lg hover:shadow transition">
                            <FaGithub alt="GitHub" className="w-5 h-5" />
                            <span>Login with GitHub</span>
                        </button>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <a
                            href="#"
                            onClick={() => handleNavigation("/signup")}
                            className="text-blue-600 underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div >
            {/* Floating demo credentials */}
            < div className=" flex justify-center flex-wrap items-center lg:flex-col gap-4  lg:fixed lg:top-24 lg:right-8" >
                <Card className="w-72 shadow-lg border-blue-400 border-2">
                    <CardHeader>
                        <CardTitle>Patient Demo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-2">
                            <span className="font-semibold">Email:</span> neha.patel@patient.com
                            <br />
                            <span className="font-semibold">Password:</span> 1234
                        </div>
                        <div>
                            <span className="font-semibold">Email:</span> vikram.rao@patient.com
                            <br />
                            <span className="font-semibold">Password:</span> 1234
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-72 shadow-lg border-green-400 border-2">
                    <CardHeader>
                        <CardTitle>Admin Demo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-2">
                            <span className="font-semibold">Email:</span> ravi.kumar@admin.com
                            <br />
                            <span className="font-semibold">Password:</span> 1234
                        </div>
                        <div>
                            <span className="font-semibold">Email: </span> anuj.singh@admin.com
                            <br />
                            <span className="font-semibold">Password:</span> 1234
                        </div>
                    </CardContent>
                </Card>
            </div >
        </div >
    );
};

export default LoginForm;