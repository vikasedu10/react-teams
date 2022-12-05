package main

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

type ask struct {
	ID			string 		`json:"id"`
	Question 	string	 	`json:"question"`
	Description string 		`json:"description"`
	Artist 		string		`json:"artist"`
}

var asks = []ask {
	{
		ID: "1",
		Question: "About elections in United States of America!",
		Description: "I want to debate on who will win the 2025 USA elections? Joe Biden or Donald J Trump.",
		Artist: "Potter K, Harry",
	},
	{
		ID: "2",
		Question: "How did you hear about this position?",
		Description: "Learning what’s the idea behind behavioral interview questions, so you’re prepared to answer whatever the HR manager shoots at you.",
		Artist: "Jones D, Clark",
	},
	{
		ID: "3",
		Question: "What are you looking for from a new position?",
		Description: "However, recruitment managers are not looking for your whole life story, your third-grade achievements, or what you had for dinner last night. Instead, they are looking for a pitch.",
		Artist: "Andrew, Sailed",
	},
	
}

func main() {
	router := gin.Default()
	router.GET("/asks", getAsks)			// Get all ask
	router.GET("/asks/:id", getAsk)			// Get ask by ID
	router.PATCH("/asks/:id", updateAsk)	// Update existing ask
	router.POST("/asks", addAsk) 			// Add a new record

	router.Run("localhost:8080")
}

func getAsks (context *gin.Context) {
	context.IndentedJSON(http.StatusOK, asks)
}

func addAsk (context *gin.Context) {
	var newAsk ask;
	if err := context.BindJSON(&newAsk); err != nil {
		return
	}
	asks = append(asks, newAsk)
	context.IndentedJSON(http.StatusCreated, asks)
}

func getAskByID (id string) (*ask, error) {
	for index, singleTodo := range asks {
		if singleTodo.ID == id {
			return &asks[index], nil
		}
	}
	return nil, errors.New("The ask was not found")
}

func getAsk (context *gin.Context) {
	id := context.Param("id")
	ask, err := getAskByID(id)
	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "Requested ask was not found"})
		return
	}
	context.IndentedJSON(http.StatusOK, ask)
}

func updateAsk (context *gin.Context) {
	id := context.Param("id")
	getAsk, err := getAskByID(id)
	
	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "Requested ask was not updated as the ask ID was not found"})
		return
	}

	var updateAsk ask;
	if err := context.BindJSON(&updateAsk); err != nil {
		return
	}
	getAsk.Question = updateAsk.Question
	getAsk.Description = updateAsk.Description
	getAsk.Artist = updateAsk.Artist

	context.IndentedJSON(http.StatusOK, asks)
}