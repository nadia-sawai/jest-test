import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import List from './List';

describe("List items", () => {
  // テストデータ
  const items = ["item1", "item2", "item3"];
  test("renders ul", () => {
    render(<List listitems={items} />);
    // ul:role list
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("renders li", () => {
    render(<List listitems={items} />);
    // li:role listitem 
    // getAllByRole 対象のリストアイテムをすべてテスト
    // toHaveLength でテストする数値を指定
    expect(screen.getAllByRole("listitem")).toHaveLength(items.length);
  });
});
