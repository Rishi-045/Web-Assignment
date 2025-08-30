function Shimmer() {
  const shimmerRows = Array.from({ length: 8 });

  return (
    <table className="min-w-full border border-gray-300 animate-pulse">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Created At</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {shimmerRows.map((_, i) => (
          <tr key={i}>
            <td className="border px-4 py-2">
              <div className="h-4 bg-gray-300 rounded w-32"></div>
            </td>
            <td className="border px-4 py-2">
              <div className="h-4 bg-gray-300 rounded w-48"></div>
            </td>
            <td className="border px-4 py-2">
              <div className="h-4 bg-gray-300 rounded w-40"></div>
            </td>
            <td className="border px-4 py-2">
              <div className="h-6 bg-gray-300 rounded w-16"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Shimmer;
