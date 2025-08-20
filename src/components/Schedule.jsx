const Schedule = () => {
  const scheduleData = [
    {
      type: "Registration",
      time: "8:30 – 9:00 AM",
      event: "Registration & Welcome Breakfast",
      format: "Check-in & Networking"
    },
    {
      type: "Keynote",
      time: "9:00 – 9:30 AM", 
      event: "Welcome & Keynote: Future of Bioinformatics",
      format: "Presentation"
    },
    {
      type: "Panel",
      time: "9:30 – 10:30 AM",
      event: "Career Paths Panel: Academic vs Industry",
      format: "Panel Discussion"
    },
    {
      type: "Workshop",
      time: "10:30 – 11:30 AM",
      event: "Higher Education Pathways", 
      format: "Interactive Session"
    },
    {
      type: "Break",
      time: "11:30 – 11:45 AM",
      event: "Coffee Break & Networking",
      format: "Informal Networking"
    },
    {
      type: "Research",
      time: "11:45 AM – 12:45 PM",
      event: "Research Opportunities Showcase",
      format: "University Presentations"
    },
    {
      type: "Lunch",
      time: "12:45 – 1:45 PM",
      event: "Lunch & Networking",
      format: "Open Networking"
    },
    {
      type: "Industry",
      time: "1:45 – 2:45 PM", 
      event: "Industry Spotlight: Job Market Trends",
      format: "Company Representatives"
    },
    {
      type: "Skills",
      time: "2:45 – 3:45 PM",
      event: "Essential Skills & Tools Demo",
      format: "Hands-on Demonstration"
    },
    {
      type: "Q&A",
      time: "3:45 – 4:30 PM",
      event: "Open Q&A with Experts",
      format: "Interactive Discussion"
    },
    {
      type: "Closing",
      time: "4:30 – 5:00 PM",
      event: "Closing Remarks & Next Steps",
      format: "Wrap-up Session"
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      "Registration": "bg-blue-100 text-blue-800",
      "Keynote": "bg-green-100 text-green-800", 
      "Panel": "bg-purple-100 text-purple-800",
      "Workshop": "bg-orange-100 text-orange-800",
      "Break": "bg-gray-100 text-gray-800",
      "Research": "bg-indigo-100 text-indigo-800",
      "Lunch": "bg-yellow-100 text-yellow-800",
      "Industry": "bg-pink-100 text-pink-800",
      "Skills": "bg-teal-100 text-teal-800",
      "Q&A": "bg-red-100 text-red-800",
      "Closing": "bg-cyan-100 text-cyan-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Event Schedule</h2>
          <p className="text-xl text-gray-700">A complete timeline of our career awareness bootcamp day</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Format
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {scheduleData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-6">
                      <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-sm font-medium text-gray-900">
                      {item.time}
                    </td>
                    <td className="px-6 py-6 text-sm text-gray-700">
                      {item.event}
                    </td>
                    <td className="px-6 py-6 text-sm text-gray-600">
                      {item.format}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View - Show as Cards on Small Screens */}
        <div className="md:hidden mt-8 space-y-4">
          {scheduleData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getTypeColor(item.type)}`}>
                  {item.type}
                </span>
                <span className="text-sm font-medium text-gray-900">{item.time}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.event}</h3>
              <p className="text-sm text-gray-600">{item.format}</p>
            </div>
          ))}
        </div>

        {/* Expand Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            View Detailed Curriculum
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;