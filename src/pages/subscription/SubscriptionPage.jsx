import React from 'react';
import Navbar from '../../component/nav/Sidebar';

const SubscriptionPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">

      {/* Sidebar (sticky on desktop) */}
      
        <Navbar />
      

      {/* Main Content (scrollable on mobile) */}
      <div className="flex-grow overflow-auto px-4 py-6 md:py-10 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col items-center gap-6">

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-[#191919]">Subscription Plans</h1>
            <p className="text-[#606F7B] mt-2">Choose the best plan for your business.</p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">

            {/* Freemium Plan */}
            <div className="flex flex-col items-center p-6 font-roboto">
              <div className="bg-[#EDFAF2] w-full text-center py-6 rounded-lg mb-6">
                <h2 className="text-[#257F4B] text-2xl font-semibold">Freemium</h2>
                <p className="text-[#3D4852] mt-2">Flexible pricing without monthly fees</p>
              </div>
              <p className="text-xl font-bold mb-2">$0/month</p>
              <ul className="text-[#3D4852] text-sm mb-6 space-y-2 text-center">
                <li>0% fee per transaction</li>
                <li>Limited pages</li>
                <li>Limited number of poems</li>
                <li>No email notifications</li>
                <li>No weekly reports</li>
                <li>No customization options</li>
                <li>No ranking preference</li>
              </ul>
              <button className="border border-[#044AB1] text-[#044AB1] bg-[#09264F0A] font-roboto px-28 py-2 rounded-full hover:bg-blue-50 transition">
                Subscribe
              </button>
            </div>

            {/* Premium Plan */}
            <div className="flex flex-col items-center p-6 font-roboto">
              <div className="bg-[#FFF0E2] w-full text-center py-6 rounded-lg mb-6">
                <h2 className="text-[#DF6C03] text-2xl font-semibold">Premium</h2>
                <p className="text-[#3D4852] mt-2">Monthly pricing that automatically adjusts</p>
              </div>
              <p className="text-xl font-bold mb-2">$5/month</p>
              <ul className="text-[#3D4852] text-sm mb-6 space-y-2 text-center">
                <li>2% fee per transaction</li>
                <li>Unlimited pages</li>
                <li>Unlimited number of poems</li>
                <li>Email notifications</li>
                <li>Weekly reports</li>
                <li>Customization options</li>
                <li>Ranking preference</li>
              </ul>
              <button className="border border-[#B2B2B2] bg-[#044AB1] text-white px-28 py-2 font-roboto rounded-full hover:bg-blue-800 transition">
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
