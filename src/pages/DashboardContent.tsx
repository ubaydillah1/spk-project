import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiArrowUpRight, FiTrendingUp, FiDollarSign, FiTruck } from "react-icons/fi";

const DashboardContent: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Chart data (mock)
  const salesData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 59 },
    { month: "Mar", value: 80 },
    { month: "Apr", value: 81 },
    { month: "May", value: 56 },
    { month: "Jun", value: 55 },
    { month: "Jul", value: 40 }
  ];

  const inventoryData = [
    { category: "Sedan", value: 35 },
    { category: "SUV", value: 25 },
    { category: "Sports", value: 15 },
    { category: "Luxury", value: 25 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-6">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
          Dealership Dashboard
        </h1>
        <p className="text-gray-400">Overview of your car dealership performance</p>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {[
          { title: "Total Cars", value: "50", icon: <FiTruck className="text-2xl" />, trend: "2%", color: "from-blue-500 to-blue-600" },
          { title: "New Arrivals", value: "10", icon: <FiTrendingUp className="text-2xl" />, trend: "15%", color: "from-teal-500 to-teal-600" },
          { title: "Sold Cars", value: "20", icon: <FiDollarSign className="text-2xl" />, trend: "8%", color: "from-purple-500 to-purple-600" },
          { title: "Pending Orders", value: "5", icon: <FiArrowUpRight className="text-2xl" />, trend: "3%", color: "from-indigo-500 to-indigo-600" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5 }}
            className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl shadow-2xl hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-300 text-sm font-medium">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className="bg-black bg-opacity-20 p-2 rounded-lg">
                {stat.icon}
              </div>
            </div>
            <p className="text-xs mt-4 text-gray-200 opacity-80">
              <span className="text-green-400">↑ {stat.trend}</span> from last month
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Sales Table */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-700">
                  <th className="pb-3 font-medium">Car Model</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { model: "Tesla Model S", customer: "John Smith", price: "Rp 500,000,000", date: "2023-10-01", status: "Completed" },
                  { model: "BMW M5", customer: "Sarah Johnson", price: "Rp 300,000,000", date: "2023-09-25", status: "Pending" },
                  { model: "Mercedes S-Class", customer: "Michael Lee", price: "Rp 400,000,000", date: "2023-09-20", status: "Completed" },
                  { model: "Audi Q7", customer: "Emma Wilson", price: "Rp 350,000,000", date: "2023-09-18", status: "Completed" },
                  { model: "Porsche 911", customer: "David Kim", price: "Rp 600,000,000", date: "2023-09-15", status: "Processing" }
                ].map((sale, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="border-b border-gray-800 hover:bg-gray-700 hover:bg-opacity-30 transition-colors"
                  >
                    <td className="py-4 font-medium">{sale.model}</td>
                    <td className="py-4 text-gray-400">{sale.customer}</td>
                    <td className="py-4 font-medium">{sale.price}</td>
                    <td className="py-4 text-gray-400">{sale.date}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        sale.status === "Completed" ? "bg-green-900 text-green-300" :
                        sale.status === "Pending" ? "bg-yellow-900 text-yellow-300" :
                        "bg-blue-900 text-blue-300"
                      }`}>
                        {sale.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Inventory Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Inventory Summary</h2>
          <div className="space-y-4">
            {inventoryData.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-300">{item.category}</span>
                  <span className="text-gray-400">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                    className={`h-2 rounded-full ${
                      index === 0 ? "bg-blue-500" :
                      index === 1 ? "bg-teal-500" :
                      index === 2 ? "bg-purple-500" :
                      "bg-indigo-500"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-md font-medium mb-3">Top Selling Models</h3>
            <div className="space-y-3">
              {["Tesla Model 3", "Toyota RAV4", "Honda CR-V"].map((model, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    index === 0 ? "bg-blue-500" :
                    index === 1 ? "bg-teal-500" :
                    "bg-purple-500"
                  }`} />
                  <span className="text-sm text-gray-300">{model}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Sales Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Monthly Sales</h2>
            <select className="bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-lg px-3 py-1">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div className="h-64 relative">
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end h-48">
              {salesData.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${data.value}%` }}
                  transition={{ delay: 0.9 + index * 0.05, duration: 0.6 }}
                  className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm relative"
                >
                  <div className="absolute -bottom-6 text-xs text-gray-400 w-full text-center">
                    {data.month}
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-xs text-white px-2 py-1 rounded">
                    {data.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profit Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Profit Margin</h2>
            <div className="flex space-x-2">
              <button className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition-colors">
                Monthly
              </button>
              <button className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded transition-colors">
                Quarterly
              </button>
            </div>
          </div>
          <div className="h-64 relative">
            {/* This would be a line chart in a real implementation */}
            <div className="absolute bottom-0 left-0 right-0 h-48 border-t border-l border-gray-600">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.1, duration: 1.5 }}
                  d="M0,80 C10,60 20,70 30,50 C40,30 50,40 60,20 C70,10 80,30 90,40 C100,50 100,50 100,50"
                  stroke="url(#profitGradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient id="profitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
                  <div key={i} className="text-xs text-gray-400">
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardContent;