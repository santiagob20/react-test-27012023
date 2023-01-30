import React from "react";
import { Card, Button, Tag, Rate } from "antd";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card
        title={<Rate defaultValue={Math.floor(Math.random() * 5)}/>}
        style={{ width: 300, height: 500, marginBottom: 20, textAlign: "center" }}
      >
        <img src={this.props.product.picture} height="200"></img>
        <h2>{this.props.product.name}</h2>
        <Button shape="round" danger>$ {this.props.product.price}</Button>
        <p>{this.props.product.about.substring(0, 60) + "..."}</p>
        {this.props.product.tags.map(el => {
            return <Tag color="processing">{el}</Tag>
        })}
      </Card>
    );
  }
}

// Export out the React Component
export default Product;
