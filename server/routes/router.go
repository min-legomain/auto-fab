package routes

import (
	"github.com/gin-gonic/gin"
)

func SetupRouter(r *gin.Engine) {
	r.GET("/api/test", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "test endpoint reached"})
	})
}
