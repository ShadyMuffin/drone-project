import { useState } from "react";

const SimpleForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");

  const handleFNameChange = (e) => setFirstName(e.target.value);
  const handleLNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Message:", message);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setNotification("Message Recieved");
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div className=" max-w-[800px] mt-[50px] w-[600px] h-[500px] mx-auto text-center flex flex-col justify-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 m-10 py-10 border border-double  border-emerald-500 rounded-lg p-6"
      >
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="First Name"
              className="block text-sm md:text-2xl font-medium text-emerald-400 text-center font-mono"
            >
              First Name
            </label>
            <input
              type="First Name"
              id="First Name"
              value={firstName}
              onChange={handleFNameChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="Last Name"
              className="block text-sm md:text-2xl font-medium text-emerald-400 text-center font-mono"
            >
              Last Name
            </label>
            <input
              type="Last Name"
              id="Last Name"
              value={lastName}
              onChange={handleLNameChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm md:text-2xl font-medium text-emerald-400 text-center font-mono"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm md:text-2xl font-medium text-green-400 text-center font-mono"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
          />
        </div>
        <div className="grid place-content-center">
          <button
            type="submit"
            className="w-[150px] inline-flex justify-center py-2 px-4 text-sm rounded-md text-white bg-emerald-600 hover:bg-green-700 focus:outline-none  focus:ring-emerald-500 font-mono font-bold"
          >
            Send
          </button>
          {notification && (
            <div className="mt-4 p-2 text-center text-white bg-emerald-600 rounded static">
              {notification}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
