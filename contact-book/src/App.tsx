import React, { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { contactApi } from "./api/ContactApi";
import { useDispatch } from "react-redux";
/**
 * The main application component.
 * This component sets up the Redux store and renders the main UI elements.
 */
const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    contactApi.getContacts(dispatch);
  }, []);



  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header section */}
      <header className="bg-white shadow">
        <div className="container flex items-center mx-auto py-4 gradient-bg glass p-20 gap-5">
          <div className="image-container">
            <img
              className="w-20 rounded-lg"
              src="https://static.vecteezy.com/system/resources/previews/009/764/865/large_2x/contact-book-flat-circle-free-vector.jpg"
              alt="Sample Image"
            />
          </div>
          <h1 className="text-3xl font-bold">Contact Book</h1>
        </div>
      </header>
      {/* Main content section */}
      <main
        className="w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://th.bing.com/th/id/R.f0cb453b9d005825e995ec77387ac4d9?rik=y3nIP%2f43A%2bFtHA&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2fnatural-background-hd-beautiful-nature-backgrounds-hd.jpg&ehk=kFuqjlKlOpp5Ymg4%2bMuuICB%2f5BYaYGT4UMsBmvME0GY%3d&risl=&pid=ImgRaw&r=0')",
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row mt-4 max-h-[80vh]">
          <div className="md:w-1/2">
            <ContactForm />
          </div>
          <div className="md:w-1/2 overflow-y-auto">
            <ContactList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
