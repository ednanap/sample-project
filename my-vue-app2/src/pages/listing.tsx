import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      age
      gender
    }
  }
`;

const Clients: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.clients.map((client: { id: string, name: string, age: number, gender: string, additionalInfo: string }) => (
            <tr key={client.id}>
              <td className="px-6 py-4 whitespace-nowrap">{client.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/${client.id}`} className="text-indigo-600 hover:text-indigo-900">{client.name}</Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{client.age}</td>
              <td className="px-6 py-4 whitespace-nowrap">{client.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;



