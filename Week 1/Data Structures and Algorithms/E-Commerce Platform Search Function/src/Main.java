import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        Product[] products = {
                new Product(5, "Laptop", "Electronics"),
                new Product(1, "Wireless Charger", "Accessories"),
                new Product(4, "Earbuds", "Audio"),
                new Product(2, "Smartwatch", "Wearables"),
                new Product(3, "Keyboard", "Electronics")
        };

        System.out.println("------Linear Search------");
        System.out.println("Available products: Laptop, Wireless Charger, Earbuds, Smartwatch, Keyboard");
        System.out.print("Enter product name to search: ");
        String nameInput = in.nextLine();
        Product result = Search.linearSearch(products, nameInput);
        if (result != null)  System.out.println("Found: " + result);
        else System.out.println("Product with name '" + nameInput + "' not found.");

        System.out.println("------Binary Search------");
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));
        System.out.println("Sorted Products:");
        for (Product p : products) System.out.println(p);

        System.out.print("Enter product ID to search: ");
        int idInput = in.nextInt();
        result = Search.binarySearch(products, idInput);
        if (result != null) System.out.println("Found: " + result);
        else System.out.println("Product with ID " + idInput + " not found.");

        in.close();
    }
}