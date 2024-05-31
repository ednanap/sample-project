import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

// GraphQL query to fetch clients' details
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

// TypeScript interface to define the shape of a Client object
interface Client {
  id: string;
  name: string;
  age: number;
  gender: string;
}

// TypeScript interface for the query result
interface GetClientsData {
  clients: Client[];
}

// Functional component to display the list of clients
const Clients: React.FC = () => {
  // useQuery hook to execute the GET_CLIENTS query
  const { loading, error, data } = useQuery<GetClientsData>(GET_CLIENTS);

  // Render a loading message if the query is still in progress
  if (loading) return <p>Loading...</p>;

  // Render an error message if the query failed
  if (error) return <p>Error: {error.message}</p>;

  // Render the clients' data in a table if the query was successful
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-red-900 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-red-900 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-red-900 uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-red-900 uppercase tracking-wider">Gender</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.clients.map(({ id, name, age, gender }) => (
            <tr key={id}>
              <td className="px-6 py-4 whitespace-nowrap">{id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/${id}`} className="text-red-600 hover:text-red-900">{name}</Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{age}</td>
              <td className="px-6 py-4 whitespace-nowrap">{gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;





