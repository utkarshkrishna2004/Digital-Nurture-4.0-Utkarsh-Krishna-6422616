import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter principal amount: ");
        double principal = in.nextDouble();
        System.out.print("Enter annual growth rate (e.g. 0.05 for 5%): ");
        double growthRate = in.nextDouble();
        System.out.print("Enter number of years: ");
        int numYears = in.nextInt();
        
    
        double futureAmount = FinancialForecasting.computeProjection(principal, growthRate, numYears);
        System.out.printf("Projected Amount after %d years: INR %.2f\n", numYears, futureAmount);
        
        in.close();
    }
}