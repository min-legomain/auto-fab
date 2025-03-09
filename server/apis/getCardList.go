//DBからカードと金額のリストを取得する
//req fetch_id, res カードリスト

package apis

import (
	"net/http"
)

// 仮の関数を作成
func GetCardList(w http.ResponseWriter, r *http.Request) {
	_, err := w.Write([]byte("Hello, World!"))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
