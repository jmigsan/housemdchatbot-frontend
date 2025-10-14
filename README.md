# House MD Chatbot Frontend

This is the backend to the [House MD Chatbot Backend](https://github.com/jmigsan/housemdchatbot-backend) and is designed to work with that repo.

A nostalgic chatbot interface styled after MSN Messenger on Windows XP, featuring real-time conversations with Dr. Gregory House.

## 🌟 Features

-   **MSN Messenger UI**: Authentic recreation of the classic MSN chat interface with Windows XP styling
-   **Real-time Chat**: WebSocket-powered live conversations with Dr. Gregory House
-   **Windows XP Theme**: Complete desktop background and taskbar simulation
-   **Responsive Design**: Tailored chat experience with profile images and message history

## 🛠 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Quick Start

1. **Clone the repository**

    ```bash
    git clone housemdchatbot-frontend
    cd housemdchatbot-frontend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**

    Navigate to [http://localhost:3000](http://localhost:3000)

**Note**: This frontend requires a WebSocket backend running on `ws://localhost:8000/api/ws/chat/runpod` for full functionality. The backend is not included in this repository.
