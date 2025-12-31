async function processNotes() {
    const fileInput = document.getElementById('imageInput'); // Check karein aapki ID 'imageInput' hi ho
    const outputDiv = document.getElementById('ai-output');
    const loader = document.getElementById('loader');
    const resultSection = document.getElementById('result-section');

    if (fileInput.files.length === 0) {
        alert("Please upload an image first!");
        return;
    }

    // UI ko loading state mein daalein
    if(loader) loader.classList.remove('hidden');
    if(resultSection) resultSection.classList.add('hidden');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
        try {
            const base64Data = reader.result.split(',')[1];

            // ✅ Nayi Working API Key
            const API_KEY = "YOUR_API_KEY_HERE";
            
            // ✅ Correct v1beta Endpoint
            const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

            const requestBody = {
                contents: [{
                    parts: [
                        { text: "Summarize these notes into bullet points and give 3 quiz questions." },
                        {
                            inlineData: {
                                mimeType: file.type,
                                data: base64Data
                            }
                        }
                    ]
                }]
            };

            const response = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();

            if (data.candidates && data.candidates[0].content) {
                // AI ka jawab dikhayein
                outputDiv.innerText = data.candidates[0].content.parts[0].text;
            } else {
                // Agar API se koi error aaye (jaise Key block hona)
                const msg = data.error ? data.error.message : "Unknown error";
                outputDiv.innerText = "AI Error: " + msg;
                console.error("Full Error Data:", data);
            }

        } catch (error) {
            outputDiv.innerText = "Network Error: Check internet or Console (F12)";
            console.error("Technical Error:", error);
        } finally {
            if(loader) loader.classList.add('hidden');
            if(resultSection) resultSection.classList.remove('hidden');
        }
    };

    reader.readAsDataURL(file);
}