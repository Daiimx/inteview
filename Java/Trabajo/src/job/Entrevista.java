package job;
import java.util.Scanner;
public class Entrevista {

	public static void main(String[] args) {
	
		Scanner Suma =new Scanner (System.in);
		int num1,num2,resultado;
		System.out.println ("Ingrese el primer numero");
		num1=Suma.nextInt();
		System.out.println ("Ingrese el segundo numero");
		num2=Suma.nextInt();
		resultado= num1+num2;
		System.out.println ("El resultado es: "+resultado);

	}

}
