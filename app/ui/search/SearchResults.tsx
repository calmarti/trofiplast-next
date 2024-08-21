import { Item } from "@prisma/client";

export default function SearchResults({ items }: { items: Item[] }) {
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
            {items &&
              items.map((item) => {
                return (
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">{item.species}</td>
                    <td className="px-4 py-2 border border-gray-300">{item.area}</td>
                    <td className="px-4 py-2 border border-gray-300">{item.country}</td>               
                 </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
