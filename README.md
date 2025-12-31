Project Title: StudyBuddy AI
Tagline: Transform your handwritten or printed notes into organized study guides using Gemini AI.

Project Description:
StudyBuddy AI is a web-based tool designed to help students streamline their learning process. Users can upload images of their study notes, and the application leverages the Google Gemini 1.5 Flash model to analyze the content. The AI provides a concise bulleted summary and generates three relevant quiz questions to test the user's understanding of the material.

Key Features
Image-to-Text Analysis: Uses advanced AI to read notes from uploaded images.

Automated Summarization: Converts dense notes into easy-to-read bullet points.

Self-Assessment: Automatically generates quiz questions based on the uploaded content.

Modern UI: Built with a clean, responsive interface using Tailwind CSS.

Problems Faced & Challenges (Debugging Experience):
During the development of this project, I encountered several technical challenges that helped me improve my debugging skills:
API Versioning Issues: Initially, I faced errors because the model gemini-1.5-flash was not recognized in the v1beta endpoint as expected. I had to research and switch to the correct API version and endpoint structure.

Variable Naming Errors (ReferenceErrors): I faced a tricky bug where the console showed API_KEY is not defined. This taught me the importance of carefully checking variable names (typos) and ensuring consistency between where a variable is defined and where it is used.

API Key Management: Setting up the Google Cloud Console and enabling the "Generative Language API" was a learning curve. I also learned the security best practice of removing API keys before pushing code to a public GitHub repository.

Network/Async Handling: Handling base64 data conversion and asynchronous fetch requests was challenging but helped me understand how client-side applications communicate with powerful AI backends.
