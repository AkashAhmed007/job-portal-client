import PropTypes from 'prop-types';
function CategoryTable({title}) {
  return (
    <div>
    <h2 className="mb-4 text-2xl font-semibold leading-tight">
      {title}
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full text-xs">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="w-24" />
        </colgroup>
        <thead className="dark:bg-gray-300">
          <tr className="text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Job Title</th>
            <th className="p-3">Job Posting Date</th>
            <th className="p-3">Application Deadline</th>
            <th className="p-3">Salary range</th>
            <th className="p-5">Applicants Number</th>
            <th className="pl-10">View Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
            <td className="p-3">
              <p>Md. Akash Ahmed</p>
            </td>
            <td className="p-3">
              <p>Web Developer</p>
            </td>
            <td className="p-3">
              <p>14 Jan 2022</p>
              <p className="dark:text-gray-600">Friday</p>
            </td>
            <td className="p-3">
              <p>01 Feb 2022</p>
              <p className="dark:text-gray-600">Tuesday</p>
            </td>
            <td className="p-3">
              <p>$15,792</p>
            </td>
            <td className="p-3">
              <p>0</p>
            </td>
            <td className="p-3">
              <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                <button className="btn btn-sm btn-primary hover:bg-blue-900 hover:text-blue-100">
                  View Details
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
CategoryTable.propTypes = {
    title: PropTypes.string
  };
export default CategoryTable