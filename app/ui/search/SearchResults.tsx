
export default function SearchResults() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
    <table className="table-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="px-4 py-2 border border-gray-300">Species</th>
          <th className="px-4 py-2 border border-gray-300">Area</th>
          <th className="px-4 py-2 border border-gray-300">Country</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td className="px-4 py-2 border border-gray-300">Species 1</td>
          <td className="px-4 py-2 border border-gray-300">Area 1</td>
          <td className="px-4 py-2 border border-gray-300">Country 1</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border border-gray-300">Species 2</td>
          <td className="px-4 py-2 border border-gray-300">Area 2</td>
          <td className="px-4 py-2 border border-gray-300">Country 2</td>
        </tr>
      
      </tbody>
    </table>
  </div>
  </>
  
  )
}
