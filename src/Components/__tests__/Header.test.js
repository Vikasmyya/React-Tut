const { render, screen } = require("@testing-library/react");
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";

it("Should load Header component with Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const result = screen.getByText("Cart - (0 items)");
  expect(result).toBeInTheDocument();
});
