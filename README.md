# Ravenous 🍽️

Ravenous is a React-based restaurant recommendation web application that interacts with the Yelp API to search for restaurants.
This was initially developed as a project of the Front End Web Development with React course at Codecademy.

## 🛠️ Tech Stack

HTML, CSS, JavaScript, React, and the Yelp Fusion API

## ✨ Features

- Users can query for a restaurant based on their keyword and location, and sort it by best match, highest rated, and most reviewed.
- Users can view a list of businesses that match their query, with information such as location, category, rating.
- Users can click on addresses that open in Google Maps.

![First load of page](./public/screenshots/Screenshot%201.png)

![Clickable address](./public/screenshots/Screenshot%202.png)

## ✅ Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js ≥ 14
- A Yelp API Key from [Yelp Developers](https://www.yelp.com/developers)

## 📦 Available Scripts

In the project directory, you can run:

### `npm install`

Install all of the Node dependencies for React and other third party packages used in this project.

### Create a .env file in the root

`REACT_APP_YELP_API_KEY=your_yelp_api_key_here`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. \
The page will reload when you make changes.\
You may also see any lint errors in the console.

### ⚠️ CORS Proxy Access Required

If you see a message like:
"see /corsdemo for more info" in the browser console log, it means the CORS proxy is temporarily restricted.

👉 To fix this, please visit:
[https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo). Click the "Request temporary access" button, and then refresh your app.

## 🧪 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

## 🤝 Acknowledgments

- Thanks to Yelp Fusion for the API.
- Inspired by the Codecademy React-Front End course project.
