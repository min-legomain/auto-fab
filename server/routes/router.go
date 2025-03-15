package routes

import (
	"github.com/gin-gonic/gin"

	"github.com/min-legomain/auto-fab/server/apis"
)

func SetupRouter(r *gin.Engine) {
	r.GET("/api/test", apis.Test)
}
