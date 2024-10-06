# Stock Prediction App (React.js)

This React.js project serves as the front-end of a stock prediction application. It allows users to input a stock ticker symbol, retrieve predictions, company data, news, and insider trading information by sending the request to a Flask-based backend API.

## Features

- **Stock Price Predictions:** Displays predictions for stock price data (Open, High, Low, Close) over the next 30 days.
- **Company Information:** Provides key company information such as name, CEO, headquarters, and more.
- **News:** Displays the latest news related to the company.
- **Analyst Recommendations:** Shows analyst predictions, such as strong buy, buy, hold, sell, and strong sell.
- **Insider Trading:** Displays insider trading data for the company.

## Tech Stack

- **React.js**: Front-end JavaScript library for building user interfaces.
- **Bootstrap**: Responsive styling and layout components.
- **Chart.js**: Library for displaying the stock data using charts.
- **Axios**: HTTP client for making requests to the Flask API.
- **react-chartjs-2**: Integration of Chart.js into React components.
- **dotenv**: For handling environment variables.

## Setup and Installation

### Prerequisites

- **Node.js**: Installed on your system (v12+).
- **NPM**: Node Package Manager (comes with Node.js) or Yarn (optional).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OldAlexhub/stocksearch.git
   cd stock-prediction-app
   ```
