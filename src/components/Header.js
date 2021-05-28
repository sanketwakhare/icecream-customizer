import React from "react";

class Header extends React.Component {
  handleOnThemeChange() {
    const themeStylesheet = document.getElementById("theme");
    const themeToggle = document.getElementById("theme-toggle");
    // switch to dark mode
    if (themeStylesheet.href.includes("light")) {
      themeStylesheet.href = themeStylesheet.href.replace("light", "dark");
      themeToggle.innerText = "Light Mode";
    } else {
      // switch to light mode
      themeStylesheet.href = themeStylesheet.href.replace("dark", "light");
      //   themeStylesheet.href = "light-theme.css";
      themeToggle.innerText = "Dark Mode";
    }
  }

  render() {
    const { countCartItems } = this.props;
    return (
      <div>
        <header className="block row center">
          <div className="col-2">
            <a href="#/">
              <h1>Customize Ice Cream</h1>
            </a>
          </div>
          <div className="col-1">
            <div className="row">
              <div className="col-1">
                <button
                  id="theme-toggle"
                  onClick={this.handleOnThemeChange}
                  type="button"
                  className="btn btn-danger"
                >
                  Dark Mode
                </button>
              </div>
              <div className="col-1 col-right">
                {/* Cart{" "} */}
                {countCartItems ? (
                  <button type="button" className="btn btn-success">
                    Cart{" "}
                    <span className="badge bg-warning text-dark">
                      {countCartItems}
                    </span>
                  </button>
                ) : (
                  <button type="button" className="btn btn-success">
                    Cart{" "}
                    <span className="badge bg-warning text-dark">
                      {countCartItems}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
