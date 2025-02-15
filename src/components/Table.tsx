import  { useState } from "react";
import { Search } from "lucide-react";
const SongTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "DateStreamed",
    direction: "ascending",
  });
  type DataItem = {
    DateStreamed: string; // Assuming it's an ISO date string
    StreamCount: number;
  };
  
  const [filterText, setFilterText] = useState("");

  // Function to toggle sorting
  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Filter Data
  const filteredData = data.filter(
    (song) =>
      song.SongName.toLowerCase().includes(filterText.toLowerCase()) ||
      song.Artist.toLowerCase().includes(filterText.toLowerCase())
  );

  // Sorting Logic
  const sortedData = [...filteredData].sort((a:DataItem, b:DataItem) => {
    if (sortConfig.key === "DateStreamed") {
      return sortConfig.direction === "ascending"
        ? new Date(a.DateStreamed).getTime() - new Date(b.DateStreamed).getTime()
        : new Date(b.DateStreamed).getTime() - new Date(a.DateStreamed).getTime();
    }
    if (sortConfig.key === "StreamCount") {
      return sortConfig.direction === "ascending"
        ? a.StreamCount - b.StreamCount
        : b.StreamCount - a.StreamCount;
    }
    return 0;
  });

  return (
    <div className="p-4">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Search by Song or Artist"
          className="pl-10 p-2 bg-slate-900 border rounded w-full focus:ring-2 focus:ring-blue-500"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="min-w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-blue-500">
            <th className="px-4 py-2">Song Name</th>
            <th className="px-4 py-2">Artist</th>
            <th
              className="cursor-pointer px-4 py-2"
              onClick={() => sortData("DateStreamed")}
            >
              Date Streamed{" "}
              {sortConfig.key === "DateStreamed"
                ? sortConfig.direction === "ascending"
                  ? "↑"
                  : "↓"
                : ""}
            </th>
            <th
              className="cursor-pointer px-4 py-2"
              onClick={() => sortData("StreamCount")}
            >
              Stream Count{" "}
              {sortConfig.key === "StreamCount"
                ? sortConfig.direction === "ascending"
                  ? "↑"
                  : "↓"
                : ""}
            </th>
            <th className="px-4 py-2">User ID</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((song, index) => (
              <tr key={index} className="border-t hover:bg-slate-900">
                <td className="px-4 py-2">{song.SongName}</td>
                <td className="px-4 py-2">{song.Artist}</td>
                <td className="px-4 py-2">{song.DateStreamed}</td>
                <td className="px-4 py-2">{song.StreamCount}</td>
                <td className="px-4 py-2">{song.UserID}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                No matching results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
