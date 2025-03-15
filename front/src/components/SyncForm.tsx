import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SyncForm() {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateUrl = (input: string) => {
    const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return regex.test(input);
  };

  const handleSubmit = () => {
    if (!validateUrl(url)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    console.log("Fetching decklist from:", url);
  };

  return (
    <Card className="p-6 max-w-md mx-auto shadow-lg rounded-xl bg-white dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        デッキリストのURLを入力
      </h2>
      <Input
        type="text"
        placeholder="https://example.com/decklist"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className={`border ${isValid ? "border-gray-300" : "border-red-500"}`}
      />
      {!isValid && <p className="text-red-500 text-sm mt-2">無効なURLです</p>}
      <Button
        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600"
        onClick={handleSubmit}
        disabled={!url.trim()}
      >
        デッキリストを取得
      </Button>
    </Card>
  );
}
