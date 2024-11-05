import { useState } from 'react';

function AddJobs() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    jobType: 'remote',
    location: '',
    salaryRange: '',
    description: '',
    deadline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 rounded-lg shadow-md mt-8  via-pink-700 to-blue-700 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-3xl font-bold mb-6">Post a Job</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label className="block font-medium">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500"
          >
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">On-Site</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500"
            placeholder="City, Country"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Salary Range</label>
          <input
            type="text"
            name="salaryRange"
            value={formData.salaryRange}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500"
            placeholder="e.g., $50,000 - $70,000"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500"
            placeholder="Provide a detailed job description"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-medium">Application Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}

export default AddJobs;
