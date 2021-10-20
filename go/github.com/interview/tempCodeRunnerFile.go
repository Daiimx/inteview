package main

import "fmt"

func main() {
	println("Imprimiremos unos datos")

	var num1 int
	var num2 int

	println("Ingrese el numero 1: ")
	fmt.Scanln(&num1)
	println("Ingrese el numero 2: ")
	fmt.Scanln(&num2)
	print("Resultado: ", num1+num2)

}
