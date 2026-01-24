(function () {
    const chatButton = document.createElement("div");
    chatButton.id = "smartweb-chat-button";
    chatButton.innerHTML = "💬";
    chatButton.style.position = "fixed";
    chatButton.style.bottom = "20px";
    chatButton.style.right = "20px";
    chatButton.style.width = "60px";
    chatButton.style.height = "60px";
    chatButton.style.background = "#4A90E2";
    chatButton.style.borderRadius = "50%";
    chatButton.style.display = "flex";
    chatButton.style.justifyContent = "center";
    chatButton.style.alignItems = "center";
    chatButton.style.color = "#fff";
    chatButton.style.fontSize = "28px";
    chatButton.style.cursor = "pointer";
    chatButton.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    chatButton.style.zIndex = "99999";

    document.body.appendChild(chatButton);

    const iframe = document.createElement("iframe");
    iframe.src = "https://ai-chatbots-portfolio-2.onrender.com/chat-ui";  // Correct
    iframe.id = "smartweb-chat-window";
    iframe.style.position = "fixed";
    iframe.style.bottom = "90px";
    iframe.style.right = "20px";
    iframe.style.width = "350px";
    iframe.style.height = "500px";
    iframe.style.border = "none";
    iframe.style.borderRadius = "12px";
    iframe.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    iframe.style.display = "none";
    iframe.style.zIndex = "99999";

    document.body.appendChild(iframe);

    chatButton.addEventListener("click", () => {
        iframe.style.display =
            iframe.style.display === "none" ? "block" : "none";
    });
})();
