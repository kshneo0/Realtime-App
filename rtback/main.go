package main

import (
	"fmt"
	"net/http"
)

func main() {
	// fmt.Println("Hello from go")
	http.HandleFunc("/", handler)
	http.ListenAndServe(":4000", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from go")
}
