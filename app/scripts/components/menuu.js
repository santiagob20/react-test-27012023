/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from "react";
import { Menu, Layout, Input, Spin } from "antd";
const { Header } = Layout;

class Menuu extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */
  constructor(props) {
    super(props);
    this.state = {
      showingSearch: false,
      URI: "http://localhost:3035",
      menuTabs: [
        "HOLIDAY",
        "WHAT'S NEW",
        "PRODUCTS",
        "BESTSELLERS",
        "GOODBYES",
        "STORES",
        "INSPIRATION",
      ],
      productList: []
    };
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer(e) {
    e.preventDefault();
    this.setState({
      showingSearch: !this.state.showingSearch,
    });
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    return (
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <div
          style={{
            float: "left",
            width: 120,
          }}
        >
          <h1 className="title-company">ELC</h1>
        </div>
        <div
          style={{
            float: "right",
            width: 600,
          }}
        >
          <Input
            size="large"
            placeholder="Search products"
            prefix={!this.props.isLoading ? <i className="material-icons search">search</i> : <Spin />}
            onChange={this.props.onSearch}
          />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={this.state.menuTabs.map((el, index) => ({
            key: String(index + 1),
            label: el,
          }))}
        />
      </Header>
      // <header className="menu">
      //   <div className="menu-container">
      //     <div className="menu-holder">
      //       <h1>ELC</h1>
      //       <nav>
      //         <a href="#" className="nav-item">
      //           HOLIDAY
      //         </a>
      //         <a href="#" className="nav-item">
      //           WHAT'S NEW
      //         </a>
      //         <a href="#" className="nav-item">
      //           PRODUCTS
      //         </a>
      //         <a href="#" className="nav-item">
      //           BESTSELLERS
      //         </a>
      //         <a href="#" className="nav-item">
      //           GOODBYES
      //         </a>
      //         <a href="#" className="nav-item">
      //           STORES
      //         </a>
      //         <a href="#" className="nav-item">
      //           INSPIRATION
      //         </a>

      //         <a href="#" onClick={(e) => this.showSearchContainer(e)}>
      //           <i className="material-icons search">search</i>
      //         </a>
      //       </nav>
      //     </div>
      //   </div>
      //   <div
      //     className={
      //       (this.state.showingSearch ? "showing " : "") + "search-container"
      //     }
      //   >
      //     <input type="text" onChange={this.props.onSearch} />
      //     <a href="#" onClick={(e) => this.showSearchContainer(e)}>
      //       <i className="material-icons close">close</i>
      //     </a>
      //   </div>
      // </header>
    );
  }
}

// Export out the React Component
export default Menuu;
