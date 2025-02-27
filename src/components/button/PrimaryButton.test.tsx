import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton component", () => {
  test("renders a button", () => {
    render(<PrimaryButton>クリック</PrimaryButton>);
    expect(screen.getByRole("button", { name: "クリック" })).toBeInTheDocument();
  });

  test("click event", async() => {
    // jestのモック関数使用
    const handleClick = jest.fn();
    render(<PrimaryButton onClick={handleClick}>クリック</PrimaryButton>);

    const button = screen.getByRole("button", { name: "クリック" });
    await userEvent.click(button);

    // 1度しかクリックを呼び出していないため回数は1
    // 2にする場合は userEvent.click(button)をもう一つ追加
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
