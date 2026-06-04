import { memo } from 'react';

const Schedule = () => {
  const scheduleData = [
    {
      type: "Welcome",
      time: "9:00 – 9:10 PM",
      event: "Opening Remarks & Program Overview",
      format: "Introduction"
    },
    {
      type: "Industry",
      time: "9:10 – 9:50 PM", 
      event: "Industry Guide: National & International Markets",
      format: "Expert Presentation"
    },
    {
      type: "Research",
      time: "9:50 – 10:30 PM",
      event: "Academic Excellence: Global MS & PhD Pathways",
      format: "Guidelines & Strategies"
    },
    {
      type: "Q&A",
      time: "10:30 – 10:55 PM",
      event: "Open Discussion & Career Consultations",
      format: "Interactive Session"
    },
    {
      type: "Closing",
      time: "10:55 – 11:00 PM",
      event: "Closing Remarks & Networking Links",
      format: "Wrap-up"
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      "Welcome": "bg-red-100 text-red-800",
      "Industry": "bg-red-100 text-red-800",
      "Research": "bg-amber-100 text-amber-800",
      "Q&A": "bg-orange-100 text-orange-800",
      "Closing": "bg-gray-100 text-gray-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="schedule" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-red-950/30 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Session Schedule</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4">Our intensive 2-hour career guide breakdown (9 PM – 11 PM)</p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-red-900/50 hover:shadow-2xl hover:shadow-red-900/20 hover:border-red-500/30 transition-all duration-300">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-red-900/50 to-red-950/50 border-b border-red-800/50">
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
              <tbody className="divide-y divide-red-900/30">
                {scheduleData.map((item, index) => (
                  <tr key={index} className="hover:bg-red-900/20 transition-all duration-200">
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

        {/* Mobile/Tablet Card View */}
        <div className="lg:hidden space-y-4">
          {scheduleData.map((item, index) => (
            <div key={index} className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-red-900/50 hover:bg-red-900/20 hover:shadow-xl hover:border-red-500/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
                <span className={`inline-block px-3 py-1 text-xs sm:text-sm font-semibold rounded-full ${getTypeColor(item.type)} w-fit`}>
                  {item.type}
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">{item.time}</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{item.event}</h3>
              <p className="text-xs sm:text-sm text-gray-400">{item.format}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Schedule;
