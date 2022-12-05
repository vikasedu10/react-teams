package connector

import (
	"go.mongodb.org/mongo-driver/mongo"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"context"
)
const dbConnectUrl = "mongodb://localhost:27017"

/*
	Create MongoDB client instance for db on port 27017
	Passed go context to mongo.Connect()
	Any time we make request to server (db), we should create context using contect.TODO() which the server will accept
*/
func MongoConnector() (*mongo.Client) {
	clientOption := options.Client().ApplyURI(dbConnectUrl)
	client, err := mongo.Connect(context.TODO(), clientOption)
	if err != nil {
		panic(err)
	}
	if err := client.Ping(context.TODO(), readpref.Primary()); err != nil {
		panic(err)
	}
	fmt.Println("Database connection successful!")
	return client
}	
