# Youtube Sharing Web Application

Welcome to the Youtube Sharing Web Application README! This project allows users to log in, input a URL, and display the list of shared videos

## Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js (v14.0 or higher)
- npm (v6.0 or higher)
- Git (for cloning the repository)
- [Vite](https://vitejs.dev/) (v2.0 or higher)

### Installing Vite

If you don't have Vite installed, you can install it globally using npm:

```bash
npm install -g create-vite
```

Or, if you prefer to use it as a local project dependency:

```bash
npm install --save-dev create-vite
```

### Installation & Configuration

1. Clone the repository

```bash
git https://github.com/kingchan90/youtube-sharing-project.git
cd youtube-sharing-project

```

2. Install project dependencies:

```bash
npm install
```

3. Install the backend

```bash
cd backend
npm install
```

### Running the Application

1. Start the development server

```bash
npm run dev
```

2. Access the application in your web browser at [http://localhost:5173/](http://localhost:5173/)

### Running the Backend
1. Start the development server
```bash
node server.js
```
2. Test the backend
```bash
curl -X POST -H "Content-Type: application/json" -d '{"username":"user1","password":"password1"}' http://localhost:3000/login
```

### Test
```bash
npm test
```

### Login Information
user1@gmail.com / password1

## Usage
1. Log in with your username and password.
```bash
{
  "username": "user1",
  "password": "password1"
}

```
2. Input a URL of the video you want to embed.
3. Click the "Share a movie" button to display the sharing form
4. Input the Youtube URL then click on share
5. Enjoy your videos