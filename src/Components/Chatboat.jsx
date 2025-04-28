// // import { useState, useEffect, useRef } from "react";
// // import axios from "axios";
// // import "../App.css"
// // import getAnswer from "../Services/Chatbot"

// // function Chatboat() {
// //   const [messagesBot1, setMessagesBot1] = useState([]);

// //   const [inputValue, setInputValue] = useState("");
// //   const [loading, setLoading] = useState(false);


// //   const chatContainerRef1 = useRef(null);


// //   const handleSendMessage = async () => {
// //     if (inputValue.trim()) {
// //       const userMessage = { sender: "user", text: inputValue };
// //       setMessagesBot1((prev) => [...prev, userMessage]);

// //       setInputValue("");
// //       setLoading(true);

// //       // Add thinking animation message
// //       const thinkingMessage = { sender: "bot1", text: "Thinking..." };
// //       setMessagesBot1((prev) => [...prev, thinkingMessage]);

// //       try {
// //         const responses = await getAnswer(inputValue);

// //         // Remove thinking message
// //         setMessagesBot1((prev) => prev.filter((msg) => msg.text !== "Thinking..."));

// //         const bot1Message = { sender: "bot1", text: responses.data };
// //         setMessagesBot1((prev) => [...prev, bot1Message]);

// //       } catch (error) {
// //         const errorMessage = { sender: "error", text: "Error fetching response" };
// //         setMessagesBot1((prev) => [...prev, errorMessage]);

// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //   };

// //   const handleKeyDown = (e) => {
// //     if (e.key === "Enter") {
// //       e.preventDefault();
// //       handleSendMessage();
// //     }
// //   };

// //   const scrollToBottom = () => {
// //     if (chatContainerRef1.current) {
// //       chatContainerRef1.current.scrollTop = chatContainerRef1.current.scrollHeight;
// //     }

// //   };

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [messagesBot1]);

// //   return (
// //     <div className="h-[100vh] flex flex-col justify-between p-4  gap-1">
// //       <div className="flex-grow flex flex-col md:flex-row gap-4">
// //         {/* Chatbot Gpt-4o */}
// //         <div className="flex-1 border  h-[90vh] border-gray-300 rounded-lg shadow-lg bg-white">
// //           <h2 className="text-xl font-bold mb-1 py-1 text-center bg-gray-400 text-gray-800">CAG</h2>
// //           <div ref={chatContainerRef1} className="space-y-4 overflow-y-auto h-[82vh] scrollbar-thin ">
// //             {messagesBot1.map((message, index) => (
// //               <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mx-2`}>
// //                 {message.sender === "user" ? (
// //                   <div className="bg-gray-400 text-white text-sm p-2 px-3 rounded-xl rounded-tr-none max-w-xs shadow-md">
// //                     {message.text}
// //                   </div>
// //                 ) : (
// //                   <div className={`bg-${message.text === "Thinking..." ? "gray-300" : "[#9867C5]"} text-white text-sm p-2 px-3 rounded-xl rounded-tl-none max-w-[70%] shadow-md ${message.text === "Thinking..." ? "animate-pulse" : ""}`}>
// //                     {message.text?.split("\n")}
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>


// //         {/* Chatbot GPT-3.5-TUrbo */}

// //       </div>

// //       {/* Message input */}
// //       <div className="bg-gray-300 flex rounded-lg m shadow">
// //         <input
// //           type="text"
// //           value={inputValue}
// //           onChange={(e) => setInputValue(e.target.value)}
// //           onKeyDown={handleKeyDown}
// //           placeholder="Type your message..."
// //           className="flex-grow py-3 px-5 rounded-l-lg focus:outline-none bg-white text-black placeholder-gray-500"
// //         />
// //         <button
// //           onClick={handleSendMessage}
// //           className="bg-[#9867C5] hover:bg-[#764c9b] text-white font-bold py-2 px-6 rounded-r-lg"
// //         >
// //           Send
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Chatboat;


// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../App.css"
// import getAnswer from "../Services/Chatbot"

// function Chatboat() {
//   const [messagesBot1, setMessagesBot1] = useState([]);

//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);


//   const chatContainerRef1 = useRef(null);

// console.log("messagesBot1:",messagesBot1);

// const boldTextInResponse = (text) => {
//   // Replace **word** with <strong>word</strong>
//   return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
// };


//   const handleSendMessage = async () => {
//     if (inputValue.trim()) {
//       const userMessage = { sender: "user", text: inputValue };
//       setMessagesBot1((prev) => [...prev, userMessage]);

//       setInputValue("");
//       setLoading(true);

//       // Add thinking animation message
//       const thinkingMessage = { sender: "bot1", text: "Thinking..." };
//       setMessagesBot1((prev) => [...prev, thinkingMessage]);

//       try {
//         const responses = await getAnswer(inputValue);

//         // Remove thinking message
//         setMessagesBot1((prev) => prev.filter((msg) => msg.text !== "Thinking..."));

//         const bot1Message = { sender: "bot1", text: responses?.response };
//         setMessagesBot1((prev) => [...prev, bot1Message]);

//       } catch (error) {
//         const errorMessage = { sender: "error", text: "Error fetching response" };
//         setMessagesBot1((prev) => [...prev, errorMessage]);

//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const scrollToBottom = () => {
//     if (chatContainerRef1.current) {
//       chatContainerRef1.current.scrollTop = chatContainerRef1.current.scrollHeight;
//     }

//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messagesBot1]);

//   return (
//     <div className="h-[100vh] flex flex-col justify-between p-4  gap-1">
//       <div className="flex-grow flex flex-col md:flex-row gap-4">
//         {/* Chatbot Gpt-4o */}
//         <div className="flex-1 border  h-[90vh] border-gray-300 rounded-lg shadow-lg bg-white">
//         <div className="flex justify-between items-center w-full gap-2 p-2">
//   <h2 className="text-xl font-bold bg-gray-400 text-gray-800 py-2 px-4 flex-1 text-center rounded-lg shadow-md">Create Job Descriptions</h2>
//   {/* <div className="relative w-1/4">
//     <select className="text-md font-bold bg-gray-400 text-gray-800 py-2 px-4 rounded-lg shadow-md w-full appearance-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:shadow-lg"
//     onChange={(e) => {
//       const pdf = e.target.value;
//       console.log("Hello world");
      
//       if (pdf !== "Data") {
//         let url = ""
//         if(pdf?.toLowerCase()?.includes("tripura")){
//           url = `/cag/static/tripura/${pdf}`
//         }
//         else{
//           url = `/cag/static/meghalaya/${pdf}`
//         }
//         window.open(url, "_blank");
//       }
//     }}
    
//     >
//       <optgroup className="text-white" label="Meghalaya">
//       <option disabled selected>Data</option>
//         <option>Report No. 1 of 2020_SFAR_2018-19_Meghalaya.pdf</option>
//         <option>Report No. 1 of 2021_SES-2018-19_Meghalaya.pdf</option>
//         <option>Report No. 1 of 2023 State-Finance-Report-2021-22-Meghalaya.pdf</option>
//         <option>Report No. 1 of 2024 State-Finance-Report--Meghalaya.pdf</option>
//         <option>Report No. 2 of 2020_District Hospitals_2018-19-Meghalaya.pdf</option>
//         <option>Report No. 2 of 2021_Meghalaya.pdf</option>
//         <option>Report No. 2 of 2022_(Revenue 2019-20)_Meghalaya_14-6-2022-.pdf</option>
//         <option>Report No. 2 of 2023 Meghalaya-Social-Economic-Sectors.pdf</option>
//         <option>Report No. 3 of 2020_(Revenue 2018-19)-Meghalaya.pdf</option>
//         <option>Report No. 3 of 2022_S&ES 2019-20_Meghalaya_(21-6-2022)-.pdf</option>
//         <option>Report No. 3 of 2023 Meghalaya-Audit-Report-Revenue-Sector-2020-22-.pdf</option>
//         <option>Report No.2 of 2024, Government of MeghalayaPA-on-Solid-Waste-Management-in-Urban-Areas-of-Meghalaya-2021-2022.pdf</option>
//         <option>Report No_1 of 2022_SFAR 2020-21_Meghalaya_30-5-2022.pdf</option>
//         <option>Report_No_1_of_2019_State_Finance_Government_of_Meghalaya.pdf</option>
//         <option>Report_No_2_of_2019_Revenue_Sector_Government_of_Meghalaya.pdf</option>
//         <option>Report_no_3_of_2019_General_Social_and_Economic_Sectors_Government_of_Meghalaya.pdf</option>
//       </optgroup>
//       <optgroup label="Tripura">
//         <option>Report No. 1 of 2023 - State Finances Tripura.pdf</option>
//         <option>Report No. 2 of 2022-Report on Social, Economic and Revenue Sectors Tripura.pdf</option>
//         <option>Report No. 2 of 2023- Report on Social, Economic and Revenue Sectors Tripura.pdf</option>
//         <option>Report No. 3 of 2021 - State Finances Tripura.pdf</option>
//         <option>Report No.1 of 2019 - State Finances, Government of Tripura.pdf</option>
//         <option>Report No.1 of 2021 - Government of Tripura on Social ,Economic, Revenue and General Sectors Tripura.pdf</option>
//         <option>Report No.2 of 2019 - Report on Economic, Revenue and General Sectors Tripura.pdf</option>
//         <option>Report No.2 of 2021 - Performance Audit of Select District Hospitals in Tripura.pdf</option>
//         <option>Report No. 1 of 2022 - State Finances Tripura.pdf</option>
//       </optgroup>
//     </select>
//   </div> */}
// </div>


//           <div ref={chatContainerRef1} className="space-y-4 overflow-y-auto h-[82vh] scrollbar-thin ">
//             {messagesBot1.map((message, index) => (
//               <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mx-2`}>
//                 {message.sender === "user" ? (
//                   <div className="bg-gray-400 text-white text-sm p-2 px-3 rounded-xl rounded-tr-none max-w-xs shadow-md">
//                     {message.text}
//                   </div>
//                 ) : (
//                   <div
//                     className={`bg-${message.text === "Thinking..." ? "gray-300" : "[#9867C5]"} text-white text-sm p-2 px-3 rounded-xl rounded-tl-none max-w-[70%] shadow-md ${message.text === "Thinking..." ? "animate-pulse" : ""}`}
//                     dangerouslySetInnerHTML={{ __html: boldTextInResponse(message.text) }}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>


//         {/* Chatbot GPT-3.5-TUrbo */}

//       </div>

//       {/* Message input */}
//       <div className="bg-gray-300 flex rounded-lg m shadow">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Type your message..."
//           className="flex-grow py-3 px-5 rounded-l-lg focus:outline-none bg-white text-black placeholder-gray-500"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="bg-[#9867C5] hover:bg-[#764c9b] text-white font-bold py-2 px-6 rounded-r-lg"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Chatboat;


import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../App.css"
import getAnswer from "../Services/Chatbot"

function Chatboat() {
  const [messagesBot1, setMessagesBot1] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);


  const chatContainerRef1 = useRef(null);


  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = { sender: "user", text: inputValue };
      setMessagesBot1((prev) => [...prev, userMessage]);

      setInputValue("");
      setLoading(true);

      // Add thinking animation message
      const thinkingMessage = { sender: "bot1", text: "Thinking..." };
      setMessagesBot1((prev) => [...prev, thinkingMessage]);

      try {
        const responses = await getAnswer(inputValue);

        // Remove thinking message
        setMessagesBot1((prev) => prev.filter((msg) => msg.text !== "Thinking..."));

        const bot1Message = { sender: "bot1", text: responses?.response };
        setMessagesBot1((prev) => [...prev, bot1Message]);

      } catch (error) {
        const errorMessage = { sender: "error", text: "Error fetching response" };
        setMessagesBot1((prev) => [...prev, errorMessage]);

      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatText = (text) => {
    const paragraphs = text.split("\n\n"); // Split into paragraphs
  
    return paragraphs.map((para, index) => {
      if (para.match(/^\d+\./)) {
        // Ordered list detection
        const items = para.split("\n").map((item, idx) => {
          const cleanItem = item.replace(/^\d+\.\s*/, ""); // Remove number prefix
          return <li key={idx} dangerouslySetInnerHTML={{ __html: formatBold(cleanItem) }} />;
        });
        return <ul key={index} className="list-disc pl-5 space-y-2">{items}</ul>;
      } else if (para.startsWith("* ")) {
        // Unordered list detection
        const items = para.split("\n").map((item, idx) => {
          const cleanItem = item.replace(/^\*\s*/, ""); // Remove '*' prefix
          return <li key={idx} dangerouslySetInnerHTML={{ __html: formatBold(cleanItem) }} />;
        });
        return <ul key={index} className="list-disc pl-5 space-y-2">{items}</ul>;
      } else {
        return <p key={index} dangerouslySetInnerHTML={{ __html: formatBold(para) }} />;
      }
    });
  };
  
  const formatBold = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Convert **bold** to <strong>bold</strong>
  };
  



  const scrollToBottom = () => {
    if (chatContainerRef1.current) {
      chatContainerRef1.current.scrollTop = chatContainerRef1.current.scrollHeight;
    }

  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesBot1]);

  return (
    <div className="h-[100vh] flex flex-col justify-between p-4  gap-1">
      <div className="flex-grow flex flex-col md:flex-row gap-4">
        {/* Chatbot Gpt-4o */}
        <div className="flex-1 border  h-[90vh] border-gray-300 rounded-lg shadow-lg bg-white">
          <div className="flex justify-between items-center w-full gap-2 p-2">
            <h2 className="text-xl font-bold bg-gray-400 text-gray-800 py-2 px-4 flex-1 text-center rounded-lg shadow-md">Create Job Descriptions</h2>
            
          </div>


          <div ref={chatContainerRef1} className="space-y-4 overflow-y-auto h-[82vh] scrollbar-thin ">
            {messagesBot1.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "user" ? "justify-end text-black" : "justify-start"} mx-2`}>
                {message.sender === "user" ? (
                  <div className="bg-gray-400 text-white text-sm p-2 px-3 rounded-xl rounded-tr-none max-w-xs shadow-md text-black">
                    {message.text}
                  </div>
                ) : (
                  <div className={`bg-${message.text === "Thinking..." ? "gray-300" : "[#9867C5]"} text-white text-sm p-2 px-3 rounded-xl rounded-tl-none max-w-[70%] shadow-md ${message.text === "Thinking..." ? "animate-pulse" : ""}`}>
                   
                    {/* <p>
                      {message.text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <span key={index} className="font-bold">
                            {part.slice(2, -2)}
                          </span>
                        ) : (
                          part?.split("\n")
                        )
                      )}
                    </p> */}
                    {formatText(message.text)}

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Chatbot GPT-3.5-TUrbo */}

      </div>

      {/* Message input */}
      <div className="bg-gray-300 flex rounded-lg m shadow">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-grow py-3 px-5 rounded-l-lg focus:outline-none bg-white text-black placeholder-gray-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-[#9867C5] hover:bg-[#764c9b] text-white font-bold py-2 px-6 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatboat;
