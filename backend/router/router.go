package router

import (
	"github.com/gin-gonic/gin"
)

func Routers() {
	router := gin.Default()
	router.GET("/asks", getAsks)			// Get all ask
	router.GET("/asks/:id", getAsk)			// Get ask by ID
	router.PATCH("/asks/:id", updateAsk)	// Update existing ask
	router.POST("/asks", addAsk) 			// Add a new record
}
