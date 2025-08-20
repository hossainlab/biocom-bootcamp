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
    <section id="schedule" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Bootcamp Schedule</h2>
          <p className="text-xl text-gray-300">Complete timeline of our intensive career acceleration day</p>
        </div>

        <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800 border-b border-gray-600">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Format
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {scheduleData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-800/80 hover:scale-[1.01] transition-all duration-200 cursor-pointer">
                    <td className="px-6 py-6">
                      <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-sm font-medium text-white">
                      {item.time}
                    </td>
                    <td className="px-6 py-6 text-sm text-gray-300">
                      {item.event}
                    </td>
                    <td className="px-6 py-6 text-sm text-gray-400">
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
            <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-md border border-gray-700 hover:bg-gray-800 hover:shadow-xl hover:scale-105 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getTypeColor(item.type)}`}>
                  {item.type}
                </span>
                <span className="text-sm font-medium text-white">{item.time}</span>
              </div>
              <h3 className="font-semibold text-white mb-2">{item.event}</h3>
              <p className="text-sm text-gray-400">{item.format}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Schedule;