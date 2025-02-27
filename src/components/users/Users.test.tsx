import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Users from "./Users"

describe("Users", () => {

  // h1タイトルの表示テスト
  test("renders a title", () => {
    render(<Users />);
    const titleElem = screen.getByRole("heading", { name: "Users", level: 1 });
    expect(titleElem).toBeInTheDocument();
  });

  // モック（handlers.tx）から呼び出したAPIでテスト
  test("renders a list users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem")
    // liの要素が2つあるかどうかのテスト
    expect(users).toHaveLength(2);
    // デバッグ用の関数
    screen.debug();
  });
})