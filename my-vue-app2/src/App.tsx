
import './App.css'
import { useQuery, gql } from '@apollo/client';
// import ClientProvider  from './components/context/clientcontext';
import Clients from './pages/listing'; 
import ClientDetail from './pages/detail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const GET_CLIENTS = gql`
//   query GetClientDetail {
//     clients {
//         id
//         name
//         age
//         gender
//        additionalInfo
//      }
//   }
// `;

    

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <header className="bg-white shadow w-full">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Blen Sample Project</h1>
        </div>
      </header>
      <main className="flex-grow w-full">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/:id" element={<ClientDetail />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};