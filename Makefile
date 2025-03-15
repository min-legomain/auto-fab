# Makefile

# Goサーバーの起動
run-server:
	cd server && go run main.go

# Reactフロントエンドの開発サーバーの起動
run-front:
	cd front && npm run dev

# バックエンドとフロントエンドの開発サーバーを並行して起動
run: 
	$(MAKE) run-server & $(MAKE) run-front

# Goサーバーのビルド
build-server:
	cd server && go build -o server main.go

# Reactフロントエンドのビルド
build-front:
	cd front && npm run build

# ビルドファイルの削除
clean:
	rm -f server
	cd front && rm -rf build
