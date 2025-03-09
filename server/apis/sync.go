//crawler/scenarioを実行するAPI
//req デッキリストurl
//res ステータス、fetch_id

package apis

import (
	"net/http"
)

// 仮の関数を作成
func Sync(w http.ResponseWriter, r *http.Request) {
	_, err := w.Write([]byte("Hello, World!"))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
