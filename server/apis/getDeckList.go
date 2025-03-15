//crawler/scenarioを実行するAPI
//req デッキリストurl
//res ステータス、fetch_id

package apis

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// 仮の関数を作成
func GetDeckList(c *gin.Context) {
	// サンプルのレスポンスデータ
	response := gin.H{"message": "Hello, World!"}
	//ここでdeckCrawlerのscenario.executeを実行する
	//tmpにカードリストを保存する
	// JSON レスポンスを返す
	c.JSON(http.StatusOK, response)
}
