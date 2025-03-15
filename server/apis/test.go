package apis

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// 仮の関数を作成
func Test(c *gin.Context) {
	// サンプルのレスポンスデータ
	response := gin.H{"message": "test api  is called"}

	// JSON レスポンスを返す
	c.JSON(http.StatusOK, response)
}
