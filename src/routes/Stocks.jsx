import React, { useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

// Registering chart elements and scales
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Stocks = () => {
  const [formData, setFormData] = useState({ stock: "" });
  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_TRIGGER_PYTHON}/stocks`,
        { stock: formData.stock }
      );

      if (response.status === 200) {
        // console.log("Response Data:", response.data);
        setResults(response.data.result); // Accessing the result object here
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to generate the line chart data
  const generateLineChartData = (predictions) => {
    const labels = predictions.map((item) =>
      new Date(item.Date).toLocaleDateString()
    );
    const openPrices = predictions.map((item) => item.Open);
    const highPrices = predictions.map((item) => item.High);
    const lowPrices = predictions.map((item) => item.Low);
    const closePrices = predictions.map((item) => item.Close);

    return {
      labels,
      datasets: [
        {
          label: "Open Price",
          data: openPrices,
          borderColor: "#4caf50",
          fill: false,
        },
        {
          label: "High Price",
          data: highPrices,
          borderColor: "#ff9800",
          fill: false,
        },
        {
          label: "Low Price",
          data: lowPrices,
          borderColor: "#f44336",
          fill: false,
        },
        {
          label: "Close Price",
          data: closePrices,
          borderColor: "#2196f3",
          fill: false,
        },
      ],
    };
  };

  return (
    <div className="container-fluid">
      {/* Centered Search Section */}
      <div className="row justify-content-center my-4">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="text-center">
            <input
              name="stock"
              type="text"
              className="form-control mb-2"
              placeholder="Enter Stock Ticker Symbol"
              value={formData.stock}
              onChange={handleChange}
              style={{ textAlign: "center" }}
            />
            <button className="btn btn-primary" type="submit">
              Search Now
            </button>
          </form>
        </div>
      </div>

      {results ? (
        <>
          {/* Top Section: Line Chart */}
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="text-center">Stock Predictions</h3>
              {results.predictions && results.predictions.length > 0 ? (
                <Line
                  data={generateLineChartData(results.predictions)}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: "top" },
                      title: {
                        display: true,
                        text: "Stock Price Predictions (Open, High, Low, Close)",
                      },
                    },
                    scales: {
                      x: { title: { display: true, text: "Date" } },
                      y: { title: { display: true, text: "Price (USD)" } },
                    },
                  }}
                />
              ) : (
                <p>No predictions available at the moment.</p>
              )}
            </div>
          </div>

          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
              {/* Stock Recommendations */}
              {results.recommendations && (
                <div className="card mb-3">
                  <div className="card-header">Stock Recommendations</div>
                  <div className="card-body">
                    {results.recommendations.map((rec, index) => (
                      <div key={index}>
                        <strong>Period: {rec.period}</strong>
                        <ul>
                          <li>Strong Buy: {rec.strongBuy}</li>
                          <li>Buy: {rec.buy}</li>
                          <li>Hold: {rec.hold}</li>
                          <li>Sell: {rec.sell}</li>
                          <li>Strong Sell: {rec.strongSell}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Insider Data */}
              {results.insiders && (
                <div className="card mb-3">
                  <div className="card-header">Insider Trading</div>
                  <div className="card-body">
                    {results.insiders.map((insider, index) => (
                      <div key={index}>
                        <strong>{insider.Name}</strong> - {insider.Position}
                        <p>
                          Most Recent Transaction:{" "}
                          {insider["Most Recent Transaction"]}
                        </p>
                        <p>
                          Shares Owned Directly:{" "}
                          {insider["Shares Owned Directly"]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              {/* Company Info */}
              {results.info && (
                <div className="card mb-3">
                  <div className="card-header">Company Info</div>
                  <div className="card-body">
                    <p>
                      <strong>Name:</strong> {results.info.longName}
                    </p>
                    <p>
                      <strong>Market Cap:</strong> ${results.info.marketCap}
                    </p>
                    <p>
                      <strong>Industry:</strong> {results.info.industry}
                    </p>
                    <p>
                      <strong>CEO:</strong>{" "}
                      {results.info.companyOfficers?.[0]?.name}
                    </p>
                    <p>
                      <strong>Headquarters:</strong> {results.info.address1},{" "}
                      {results.info.city}, {results.info.state},{" "}
                      {results.info.country}
                    </p>
                    <p>
                      <strong>Full-Time Employees:</strong>{" "}
                      {results.info.fullTimeEmployees}
                    </p>
                    <p>
                      <strong>Phone:</strong> {results.info.phone}
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href={results.info.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {results.info.website}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Analyst Predictions */}
              {results.analysts && (
                <div className="card mb-3">
                  <div className="card-header">Analyst Predictions</div>
                  <div className="card-body">
                    <p>
                      <strong>Current Price:</strong> $
                      {results.analysts.current}
                    </p>
                    <p>
                      <strong>High Target:</strong> ${results.analysts.high}
                    </p>
                    <p>
                      <strong>Low Target:</strong> ${results.analysts.low}
                    </p>
                    <p>
                      <strong>Mean Price:</strong> ${results.analysts.mean}
                    </p>
                    <p>
                      <strong>Median Price:</strong> ${results.analysts.median}
                    </p>
                  </div>
                </div>
              )}

              {/* Stock News */}
              {results.news && (
                <div className="card mb-3">
                  <div className="card-header">Stock News</div>
                  <div className="card-body">
                    {results.news.map((news, index) => (
                      <div key={index}>
                        <a href={news.link} target="_blank" rel="noreferrer">
                          <strong>{news.title}</strong>
                        </a>
                        <p>
                          {news.publisher} -{" "}
                          {new Date(
                            news.providerPublishTime * 1000
                          ).toDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center" }}>
          Please enter a stock ticker symbol to see predictions and other data.
        </p>
      )}
    </div>
  );
};

export default Stocks;
