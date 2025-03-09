package middleware

import (
	"time"

	"github.com/gin-gonic/gin"
	"golang.org/x/time/rate"
)

const PRIVATE_API_RATE_LIMIT = 3

func RateLimiter() gin.HandlerFunc {
	limiter := rate.NewLimiter(rate.Every(1*time.Second), PRIVATE_API_RATE_LIMIT)

	return func(c *gin.Context) {
		if limiter.Allow() {
			c.Next()
		} else {
			c.AbortWithStatusJSON(429, gin.H{"error": "Too many requests, please try again later."})
		}
	}
}
