package main

import (
	"fmt"
)

func main () {
	fmt.Println(area(10))
}


// 01 Circle Area 

func area(r float32) float32{
	 var a float32 = 3.1455 * (r * r)
	 return a
}