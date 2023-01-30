/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import _debounce from "lodash/debounce";
import { Layout, Footer } from "antd";

import Menuu from "./components/menuu";
import Home from "./components/home";

/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  constructor() {
    super();
    this.state = {
      URI: "http://localhost:3035",
      productList: [],
      isLoading: false
    };
  }

  onSearch = _debounce((e) => {
    this.setState({ isLoading: true });
    axios.get(`${this.state.URI}/get_data?search=${e.target.value}`).then(response => {
      this.setState({
        productList: response.data.filter(el => el.isActive === 'true')
      });
    })
    .catch(error => console.error("Error inHTTP request: " + error))
    .finally(() => this.setState({ isLoading: false }));
  }, 300);
  
  render() {
    return (
      <div className="App">
        <Layout>
          <Menuu onSearch={this.onSearch} isLoading={this.state.isLoading} />
          <Home products={this.state.productList} />
          {/* <Footer style={{ textAlign: 'center' }}>Test ©2023 Created by SB</Footer> */}
        </Layout>
      </div>
    );
  }
}

// Render this out
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
