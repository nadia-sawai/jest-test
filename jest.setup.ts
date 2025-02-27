import '@testing-library/jest-dom'
import { server } from "@/mocks/server";

beforeAll(() => server.listen()); // サーバーを起動
afterEach(() => server.resetHandlers()); // ハンドラーをリセット
afterAll(() => server.close()); // サーバーを停止
