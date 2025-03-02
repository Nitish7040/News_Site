# Trendy News

Trendy News is a modern news website built using React.js and styled with Tailwind CSS. It allows users to search for the latest news articles and browse through different categories such as sports, politics, entertainment, health, and fitness.

## Features

- Search for news articles by keyword
- Browse news by categories
- Responsive design using Tailwind CSS
- Fetches news data from The Guardian API

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/trendy-news.git
    ```
2. Navigate to the project directory:
    ```bash
    cd trendy-news
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `src/Components/NewsApp.jsx`: Main component that handles fetching and displaying news articles.
- `src/Components/Card.jsx`: Component for displaying individual news articles.
- `src/App.jsx`: Root component that renders the `NewsApp` component.
- `src/App.css`: Custom styles for the application.

## Dependencies

- React.js
- Tailwind CSS

## API

This project uses The Guardian API to fetch news articles. You will need an API key to use this service. Replace the `API_KEY` variable in `NewsApp.jsx` with your own API key.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [The Guardian API](https://open-platform.theguardian.com/)
