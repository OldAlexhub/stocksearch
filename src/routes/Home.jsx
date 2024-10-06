import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/Home.css";
import One from "../images/1.webp";
import Two from "../images/2.webp";
import Three from "../images/3.webp";
import Four from "../images/4.webp";
import Five from "../images/5.webp";
import Six from "../images/6.webp";

const Home = () => {
  return (
    <Container className="mt-5 futuristic-container">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center futuristic-title">
            Welcome to StockVision
          </h1>
          <p className="text-center futuristic-lead">
            Explore predictive stock prices, earnings dates, insider trading,
            and more with cutting-edge AI technology.
          </p>
        </Col>
      </Row>

      {/* Predictive Stock Price Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="futuristic-card">
            <Card.Img
              variant="top"
              src={One}
              alt="Stock Prediction"
              className="futuristic-img"
            />
            <Card.Body>
              <Card.Title className="futuristic-card-title">
                Predictive Stock Prices
              </Card.Title>
              <Card.Text className="futuristic-card-text">
                Leverage AI-powered predictions to forecast stock movements and
                make smarter investments.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Earnings Date Section */}
        <Col md={6}>
          <Card className="futuristic-card">
            <Card.Img
              variant="top"
              src={Two}
              alt="Earnings Date"
              className="futuristic-img"
            />
            <Card.Body>
              <Card.Title className="futuristic-card-title">
                Next Earnings Date
              </Card.Title>
              <Card.Text className="futuristic-card-text">
                Stay informed with the upcoming earnings reports of your
                favorite stocks.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* News and Recommendations Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="futuristic-card">
            <Card.Img
              variant="top"
              src={Three}
              alt="News"
              className="futuristic-img"
            />
            <Card.Body>
              <Card.Title className="futuristic-card-title">
                Latest Stock News
              </Card.Title>
              <Card.Text className="futuristic-card-text">
                Real-time updates on stock market trends and news from reliable
                sources.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Recommendations Section */}
        <Col md={6}>
          <Card className="futuristic-card">
            <Card.Img
              variant="top"
              src={Four}
              alt="Recommendations"
              className="futuristic-img"
            />
            <Card.Body>
              <Card.Title className="futuristic-card-title">
                Stock Recommendations
              </Card.Title>
              <Card.Text className="futuristic-card-text">
                Get AI-driven recommendations on buying, selling, or holding
                stocks.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Insider Trading and Company Profile Section */}
      <Row>
        <Col md={6}>
          <Card className="futuristic-card">
            <Card.Img
              variant="top"
              src={Five}
              alt="Insiders"
              className="futuristic-img"
            />
            <Card.Body>
              <Card.Title className="futuristic-card-title">
                Insider Trading
              </Card.Title>
              <Card.Text className="futuristic-card-text">
                Discover insights on insider trading activity to stay ahead of
                market trends.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="futuristic-card">
            <Card.Img
              variant="top"
              src={Six}
              alt="Company Profile"
              className="futuristic-img"
            />
            <Card.Body>
              <Card.Title className="futuristic-card-title">
                Company Profile
              </Card.Title>
              <Card.Text className="futuristic-card-text">
                Explore detailed profiles of companies, including financials,
                leadership, and history.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
