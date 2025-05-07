import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-white shadow">
          <div className="container mx-auto py-4">
            <h1 className="text-3xl font-bold">Contact Book</h1>
          </div>
        </header>
        <main className="container mx-auto flex-1 mt-4">
          <ContactForm />
          <ContactList />
        </main>
      </div>
    </Provider>
  );
};

export default App;