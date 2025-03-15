//DBからカードと金額のリストを取得する
//req fetch_id, res カードリスト

package apis

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// 仮の関数を作成
func GetCardList(c *gin.Context) {
	// サンプルのレスポンスデータ
	response := gin.H{"message": "Hello, World!"}

	//ここでdeckCrawlerのscenario.executeを実行する

	//tmpにカードリストを保存する
	// JSON レスポンスを返す
	c.JSON(http.StatusOK, response)
}
