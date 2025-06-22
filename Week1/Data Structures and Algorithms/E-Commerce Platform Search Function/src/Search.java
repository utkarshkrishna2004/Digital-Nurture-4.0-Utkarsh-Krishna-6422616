public class Search {
    public static Product linearSearch(Product[] products, String name) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductName().equals(name)) {
                return products[i];
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int id) {
        int low = 0, high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            int currentId = products[mid].getProductId();

            if (currentId == id) return products[mid];
            else if (currentId < id) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }
}