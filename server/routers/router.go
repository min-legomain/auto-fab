package routers

import (
	"net/http"

	"github.com/min-legomain/auto-fab/server/crawler/deckCrawler"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/deck", func(c *gin.Context) {
		url := "https://example.com/decklist" // 取得するデッキリストのURL
		deckList, err := deckCrawler.GetDeckList(url)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"deck": deckList})
	})

	return r
}
