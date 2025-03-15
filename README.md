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


## 困ったら

### コミット時のエラー
es-lint等が適切に走らずにコミットができないことがある。
適切にnpm installできていない可能性が高いので、node_modulesやpackage-lock.jsonを削除してからnpm installを行おう。