import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

interface AdditionalInfo {
  company: string;
  email: string;
  phone: string;
  address: string;
}

interface Client {
  id: string;
  name: string;
  age: number;
  gender: string;
  additionalInfo?: AdditionalInfo;
}

interface GetClientData {
  client: Client;
}

interface GetClientVars {
  id: string;
}

const GET_CLIENT = gql`
  query GetClient ($id: ID!){
    client (id: $id){
      id
      name
      age
      gender
      additionalInfo {
        company
        email
        phone
        address
      }
    }
  }
`;

const ClientDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<GetClientData, GetClientVars>(GET_CLIENT, { variables: { id:id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { client } = data!;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Client Details</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p><strong>ID:</strong> {client.id}</p>
        <p><strong>Name:</strong> {client.name}</p>
        <p><strong>Age:</strong> {client.age}</p>
        <p><strong>Gender:</strong> {client.gender}</p>
        {client.additionalInfo && (
          <>
            <p><strong>Company:</strong> {client.additionalInfo.company}</p>
            <p><strong>Email:</strong> {client.additionalInfo.email}</p>
            <p><strong>Phone:</strong> {client.additionalInfo.phone}</p>
            <p><strong>Address:</strong> {client.additionalInfo.address}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ClientDetail;


