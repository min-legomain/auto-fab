package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// CORSミドルウェアの設定
	r.Use(cors.Default())

	r.GET("/api/test", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "API is working with Gin!",
		})
	})

	r.Run(":8080")
}
