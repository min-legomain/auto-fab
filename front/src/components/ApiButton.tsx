import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function ApiButton() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 環境変数から API ベース URL を取得（デフォルト: http://localhost:8080）
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

  const handleClick = async () => {
    setLoading(true);
    setData(null);
    setError(null);

    try {
      const response = await axios.get(`${API_BASE_URL}/api/test`);
      setData(JSON.stringify(response.data, null, 2));
    } catch (err) {
      setError("APIの呼び出しに失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Button
        onClick={handleClick}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "読み込み中..." : "APIをコール"}
      </Button>

      {data && (
        <pre className="p-2 bg-gray-100 border rounded w-full max-w-md text-sm">
          {data}
        </pre>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
