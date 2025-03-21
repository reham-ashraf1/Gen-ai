# AI Chatbot

This project is a simple AI chatbot that uses the Hugging Face Inference API to generate responses based on user input. The frontend is built with HTML, CSS, and Bootstrap, while the backend is powered by Node.js and Express.

## Features
- User-friendly chat interface with Bootstrap styling
- AI-generated responses using Hugging Face models
- Smooth animations and UI interactions
- Real-time message display with typing indicators

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or later)
- npm (Node Package Manager)

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/reham-ashraf1/chatgpt.git
   cd chatgpt
   ```

2. **Install dependencies**
   ```sh
   npm install express cors dotenv node-fetch
   ```

3. **Set up environment variables**
   - Create a `.env` file in the project root.
   - Add your Hugging Face API key:
   ```sh
   HUGGINGFACE_API_KEY=your_huggingface_api_key_here
   ```

4. **Start the server**
   ```sh
   node server.js
   ```
   The server will start on `http://localhost:3000`

5. **Run the frontend**
   - Open `index.html` in your browser.

## Usage
1. Type a message in the chat input box.
2. Press `Enter` or click the **Send** button.
3. The AI will generate a response and display it in the chat window.

## Project Structure
```
chatgpt/
│-- index.html        # Frontend UI
│-- server.js         # Backend API server
│-- .env              # Environment variables (API Key)
│-- package.json      # Node.js dependencies
│-- README.md         # Project documentation
```

## API Endpoint
- **POST /chat**
  - Request Body: `{ "message": "Hello, AI!" }`
  - Response: `{ "reply": "Hello! How can I help you?" }`

## Technologies Used
- **Frontend:** HTML, CSS, Bootstrap
- **Backend:** Node.js, Express
- **API:** Hugging Face Inference API

## License
This project is licensed under the MIT License.

## Author
[Reham Ashraf](https://github.com/reham-ashraf1) 🚀



