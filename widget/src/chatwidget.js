import { useState } from "react";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const send = async () => {
        if (!input.trim()) return;

        setMessages([...messages, { sender: "user", text: input }]);

        const res = await fetch("http://localhost:3000/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input })
        });

        const data = await res.json();

        setMessages([
            ...messages,
            { sender: "user", text: input },
            { sender: "bot", text: data.reply }
        ]);

        setInput("");
    };

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg"
            >
                💬
            </button>

            {open && (
                <div className="fixed bottom-20 right-4 w-80 h-96 bg-white shadow-xl rounded-lg p-4">
                    <div className="overflow-y-auto h-72">
                        {messages.map((m, i) => (
                            <div key={i} className={m.sender === "user" ? "text-right" : "text-left"}>
                                <p className={"p-2 my-1 rounded-lg " +
                                    (m.sender === "user" ? "bg-blue-100" : "bg-gray-200")
                                }>
                                    {m.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex mt-2 gap-2">
                        <input
                            className="border p-2 flex-1"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button className="bg-blue-600 text-white px-3" onClick={send}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
