/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";
import { Col, Row, Layout } from "antd";
const { Content } = Layout;
import Product from "./product";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */
  render() {
    return (
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <section id="home">
            <div className="content">
            <Row style={{ marginTop: 5 }}>
                {this.props.products.map((el) => {
                return (
                    <Col key={el._id} span={6}>
                    <Product product={el}></Product>
                    </Col>
                );
                })}
            </Row>
            </div>
        </section>
      </Content>
    );
  }
}

// Export out the React Component
export default Home;
