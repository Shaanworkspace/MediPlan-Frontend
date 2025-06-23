"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HomeHeader from "./HomeHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E6E6FA] p-6">
        <HomeHeader/>
      <div className="max-w-4xl mx-auto space-y-8 mt-20">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">About Us</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <p className="text-lg text-gray-700">
              Welcome to our healthcare platform! We are dedicated to providing the best medical services and connecting patients with highly qualified doctors. Our mission is to enhance healthcare accessibility and ensure every patient receives top-notch care.
            </p>
            <p className="text-lg text-gray-700">
              Founded with a vision to revolutionize healthcare, our team consists of experienced professionals who strive to deliver excellence. We offer a wide range of specialties, ensuring that you find the right doctor for your needs.
            </p>
            <div className="text-center">
              <Button className="mt-4" onClick={() => window.location.href = "/doctors"}>
                Explore Our Doctors
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">Our Team</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <p className="text-lg text-gray-700">
              Our team comprises dedicated doctors, nurses, and support staff who work tirelessly to provide exceptional care. Each member brings a wealth of experience and a passion for improving patient outcomes.
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Dr. A.K. Sharma - Chief Cardiologist</li>
              <li>Dr. Meena Rao - Lead Neurologist</li>
              <li>Dr. Rohit Bansal - Orthopedic Specialist</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <p className="text-lg text-gray-700">
              Have questions? Feel free to reach out to us at:
            </p>
            <p className="text-lg text-gray-700">Email: support@healthcare.com</p>
            <p className="text-lg text-gray-700">Phone: +91-9876543210</p>
            <p className="text-lg text-gray-700">Address: 123 Health Lane, Medical City, India</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}