package controller
import (
	"github.com/gin-gonic/gin"
	"net/http"
)
 
type ask struct {
	ID          string `json:"id"`
	Question    string `json:"question"`
	Description string `json:"description"`
	Artist      string `json:"artist"`
}

func getAsks(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, asks)
}

func addAsk(context *gin.Context) {
	var newAsk ask
	if err := context.BindJSON(&newAsk); err != nil {
		return
	}
	asks = append(asks, newAsk)
	context.IndentedJSON(http.StatusCreated, asks)
}

func getAskByID(id string) (*ask, error) {
	for index, singleTodo := range asks {
		if singleTodo.ID == id {
			return &asks[index], nil
		}
	}
	return nil, errors.New("The ask was not found")
}

func getAsk(context *gin.Context) {
	id := context.Param("id")
	ask, err := getAskByID(id)
	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "Requested ask was not found"})
		return
	}
	context.IndentedJSON(http.StatusOK, ask) 
}

func updateAsk(context *gin.Context) {
	id := context.Param("id")
	getAsk, err := getAskByID(id)

	if err != nil {
		context.IndentedJSON(http.StatusNotFound, gin.H{"message": "Requested ask was not updated as the ask ID was not found"})
		return
	}

	var updateAsk ask
	if err := context.BindJSON(&updateAsk); err != nil {
		return
	}
	getAsk.Question = updateAsk.Question
	getAsk.Description = updateAsk.Description
	getAsk.Artist = updateAsk.Artist

	context.IndentedJSON(http.StatusOK, asks)
}

