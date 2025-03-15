# auto-fab
flesh and bloodのカード情報取得サービス

## サーバーを起動

### 1. **バックエンド**
```bash
make run-server
```

### 2. **フロントエンド**
```bash
make run-front

# shadcn コンポーネント追加手順

このプロジェクトでは、UI コンポーネントの管理に `shadcn` を使用しています。以下の手順で、必要なコンポーネントを追加してください。

## **📌 コンポーネントを追加する方法**
以下のコマンドを実行して、新しいコンポーネントを追加します。

```sh
npx shadcn@latest add [コンポーネント名]
```

### **💡 例: ボタン・カード・入力フォームを追加**
```sh
npx shadcn@latest add button card input
```

### **📌 追加できるコンポーネント一覧**
主なコンポーネントは以下のとおりです。

| コンポーネント名  | 説明 |
|------------|--------------------------------|
| `button`   | ボタン |
| `card`     | カードコンポーネント |
| `input`    | テキスト入力 |
| `dialog`   | モーダルダイアログ |
| `dropdown-menu` | ドロップダウンメニュー |
| `form`     | フォーム関連コンポーネント |
| `table`    | テーブル |
| `toast`    | トースト通知 |

**💡 すべてのコンポーネントを追加する場合**
```sh
npx shadcn@latest add all
```

---

## **📌 追加したコンポーネントの使用方法**
追加されたコンポーネントは `src/components/ui/` 配下に保存されます。使用する場合は、以下のようにインポートしてください。

### **💡 例: `Button` を使う**
```tsx
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button>クリック</Button>
    </div>
  );
}

export default App;
```

