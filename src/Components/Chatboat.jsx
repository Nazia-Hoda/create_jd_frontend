// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../App.css"
// import getAnswer from "../Services/Chatbot"

// function Chatboat() {
//   const [messagesBot1, setMessagesBot1] = useState([]);

//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);


//   const chatContainerRef1 = useRef(null);


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

//         const bot1Message = { sender: "bot1", text: responses.data };
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
//           <h2 className="text-xl font-bold mb-1 py-1 text-center bg-gray-400 text-gray-800">CAG</h2>
//           <div ref={chatContainerRef1} className="space-y-4 overflow-y-auto h-[82vh] scrollbar-thin ">
//             {messagesBot1.map((message, index) => (
//               <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mx-2`}>
//                 {message.sender === "user" ? (
//                   <div className="bg-gray-400 text-white text-sm p-2 px-3 rounded-xl rounded-tr-none max-w-xs shadow-md">
//                     {message.text}
//                   </div>
//                 ) : (
//                   <div className={`bg-${message.text === "Thinking..." ? "gray-300" : "[#9867C5]"} text-white text-sm p-2 px-3 rounded-xl rounded-tl-none max-w-[70%] shadow-md ${message.text === "Thinking..." ? "animate-pulse" : ""}`}>
//                     {message.text?.split("\n")}
//                   </div>
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


// my code for chatbot 

// import { useState, useEffect, useRef } from "react";
// import ReactMarkdown from "react-markdown";
// import "../App.css";
// import getAnswer from "../Services/Chatbot";
// import html2pdf from "html2pdf.js";
// import { marked } from "marked";

// function Chatboat() {
//   const [messagesBot1, setMessagesBot1] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatContainerRef1 = useRef(null);
//   const printRef = useRef(null);

//   const handleSendMessage = async () => {
//     if (inputValue.trim()) {
//       const userMessage = { sender: "user", text: inputValue };
//       setMessagesBot1((prev) => [...prev, userMessage]);

//       setInputValue("");
//       setLoading(true);

//       const thinkingMessage = { sender: "bot1", text: "Thinking..." };
//       setMessagesBot1((prev) => [...prev, thinkingMessage]);

//       try {
//         const responses = await getAnswer(inputValue);
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

//   const downloadPDF = () => {
//     const element = printRef.current;
//     const opt = {
//       margin: 0.5,
//       filename: "bot_response.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//     };

//     html2pdf().set(opt).from(element).save();
//   };

//   return (
//     <div className="h-[100vh] flex flex-col justify-between p-4 gap-1">
//       <div className="flex-grow flex flex-col md:flex-row gap-4">
//         <div className="flex-1 border h-[90vh] border-gray-300 rounded-lg shadow-lg bg-white">
//           <div className="flex justify-between items-center w-full gap-2 p-2">
//             <h2 className="text-xl font-bold bg-gray-400 text-gray-800 py-2 px-4 flex-1 text-center rounded-lg shadow-md">
//               Create Job Descriptions
//             </h2>
//             <button
//               onClick={downloadPDF}
//               className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-md"
//             >
//               Download PDF
//             </button>
//           </div>

//           <div ref={chatContainerRef1} className="space-y-4 overflow-y-auto h-[82vh] scrollbar-thin px-3 py-2">
//             {messagesBot1.map((message, index) => (
//               <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mx-2`}>
//                 {message.sender === "user" ? (
//                   <div className="bg-gray-400 text-white text-sm p-2 px-3 rounded-xl rounded-tr-none max-w-xs shadow-md">
//                     {message.text}
//                   </div>
//                 ) : (
//                   <div
//                     className={`text-white text-sm p-2 px-3 rounded-xl rounded-tl-none max-w-[70%] shadow-md ${
//                       message.text === "Thinking..." ? "bg-gray-300 animate-pulse" : "bg-[#9867C5]"
//                     }`}
//                   >
//                     <ReactMarkdown>{message.text}</ReactMarkdown>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

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

//       {/* Hidden PDF content */}
//       <div style={{ display: "none" }}>
//         <div ref={printRef}>
//           <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Bot Responses</h2>
//           {messagesBot1
//             .filter((msg) => msg.sender === "bot1" && msg.text !== "Thinking...")
//             .map((message, index) => (
//               <div
//                 key={index}
//                 style={{
//                   marginBottom: "20px",
//                   fontSize: "14px",
//                   lineHeight: "1.6",
//                 }}
//                 dangerouslySetInnerHTML={{ __html: marked.parse(message.text || "") }}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chatboat;





import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import "../App.css";
import getAnswer from "../Services/Chatbot";
import html2pdf from "html2pdf.js";
import { marked } from "marked";
import ResponseCard from "./ResponseCard";

function Chatboat() {
  const [messagesBot1, setMessagesBot1] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef1 = useRef(null);
  const printRef = useRef(null);

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = { sender: "user", text: inputValue };
      setMessagesBot1((prev) => [...prev, userMessage]);

      setInputValue("");
      setLoading(true);

      const thinkingMessage = { sender: "bot1", text: "Thinking..." };
      setMessagesBot1((prev) => [...prev, thinkingMessage]);

      try {
        const responses = await getAnswer(inputValue);
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

  const scrollToBottom = () => {
    if (chatContainerRef1.current) {
      chatContainerRef1.current.scrollTop = chatContainerRef1.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesBot1]);

  const downloadPDF = () => {
    const element = printRef.current;
    const opt = {
      margin: 0.5,
      filename: "bot_response.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="h-[100vh] flex flex-col justify-between p-4 gap-1">
      <div className="flex-grow flex flex-col md:flex-row gap-4">
        <div className="flex-1 border h-[90vh] border-gray-300 rounded-lg shadow-lg bg-white">
          <div className="flex justify-between items-center w-full gap-2 p-2">
            <h2 className="text-xl font-bold bg-gray-400 text-gray-800 py-2 px-4 flex-1 text-center rounded-lg shadow-md">
              Create Job Descriptions
            </h2>
          </div>

          <div ref={chatContainerRef1} className="space-y-4 overflow-y-auto h-[82vh] scrollbar-thin px-3 py-2">
          {messagesBot1.map((message, index) => (
            <div key={index} className="mx-2">
              {message.sender === "user" ? (
                <div className="flex justify-end">
                  <div className="bg-gray-400 text-white text-sm p-2 px-3 rounded-xl rounded-tr-none max-w-xs shadow-md">
                    {message.text}
                  </div>
                </div>
              ) : message.text === "Thinking..." ? (
                <div className="flex justify-start">
                  <div className="bg-gray-300 text-white text-sm p-2 px-3 rounded-xl rounded-tl-none max-w-xs shadow-md animate-pulse">
                    Thinking...
                  </div>
                </div>
              ) : (
                <ResponseCard response={message.text} />
              )}
            </div>
          ))}
        </div>

        </div>
      </div>

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

      {/* Hidden PDF content */}
      <div style={{ display: "none" }}>
        <div ref={printRef}>
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Bot Responses</h2>
          {messagesBot1
            .filter((msg) => msg.sender === "bot1" && msg.text !== "Thinking...")
            .map((message, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
                dangerouslySetInnerHTML={{ __html: marked.parse(message.text || "") }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Chatboat;

















































// my code for chatbot 

// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../App.css"
// import getAnswer from "../Services/Chatbot"

// function Chatboat() {
//   const [messagesBot1, setMessagesBot1] = useState([]);

//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);


//   const chatContainerRef1 = useRef(null);


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

//   const formatText = (text) => {
//     const paragraphs = text.split("\n\n"); // Split into paragraphs
  
//     return paragraphs.map((para, index) => {
//       if (para.match(/^\d+\./)) {
//         // Ordered list detection
//         const items = para.split("\n").map((item, idx) => {
//           const cleanItem = item.replace(/^\d+\.\s*/, ""); // Remove number prefix
//           return <li key={idx} dangerouslySetInnerHTML={{ __html: formatBold(cleanItem) }} />;
//         });
//         return <ul key={index} className="list-disc pl-5 space-y-2">{items}</ul>;
//       } else if (para.startsWith("* ")) {
//         // Unordered list detection
//         const items = para.split("\n").map((item, idx) => {
//           const cleanItem = item.replace(/^\*\s*/, ""); // Remove '*' prefix
//           return <li key={idx} dangerouslySetInnerHTML={{ __html: formatBold(cleanItem) }} />;
//         });
//         return <ul key={index} className="list-disc pl-5 space-y-2">{items}</ul>;
//       } else {
//         return <p key={index} dangerouslySetInnerHTML={{ __html: formatBold(para) }} />;
//       }
//     });
//   };
  
//   const formatBold = (text) => {
//     return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Convert **bold** to <strong>bold</strong>
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
//           <div className="flex justify-between items-center w-full gap-2 p-2">
//             <h2 className="text-xl font-bold bg-gray-400 text-gray-800 py-2 px-4 flex-1 text-center rounded-lg shadow-md">Create Job Descriptions</h2>
            
//           </div>


//           <div ref={chatContainerRef1} className="space-y-4 overflow-y-auto h-[82vh] scrollbar-thin ">
//             {messagesBot1.map((message, index) => (
//               <div key={index} className={`flex ${message.sender === "user" ? "justify-end text-black" : "justify-start"} mx-2`}>
//                 {message.sender === "user" ? (
//                   <div className="bg-gray-400 text-white text-sm p-2 px-3 rounded-xl rounded-tr-none max-w-xs shadow-md text-black">
//                     {message.text}
//                   </div>
//                 ) : (
//                   <div className={`bg-${message.text === "Thinking..." ? "gray-300" : "[#9867C5]"} text-white text-sm p-2 px-3 rounded-xl rounded-tl-none max-w-[70%] shadow-md ${message.text === "Thinking..." ? "animate-pulse" : ""}`}>
                   
//                     {/* <p>
//                       {message.text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
//                         part.startsWith("**") && part.endsWith("**") ? (
//                           <span key={index} className="font-bold">
//                             {part.slice(2, -2)}
//                           </span>
//                         ) : (
//                           part?.split("\n")
//                         )
//                       )}
//                     </p> */}
//                     {formatText(message.text)}

//                   </div>
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
