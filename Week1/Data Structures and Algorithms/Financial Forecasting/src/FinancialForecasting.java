public class FinancialForecasting {

    public static double computeProjection(double currentAmount, double growthRate, int remainingYears) {
        if (remainingYears == 0) {
            return currentAmount;
        }
        return computeProjection(currentAmount * (1 + growthRate), growthRate, remainingYears - 1);
    }

    public static double[] estimateUpcomingValues(double[] pastValues, int futurePeriods) {
        if (pastValues.length < 2) {
            throw new IllegalArgumentException("At least 2 historical data points required");
        }

        double totalGrowthRate = 0;
        for (int i = 1; i < pastValues.length; i++) {
            double periodGrowth = (pastValues[i] - pastValues[i - 1]) / pastValues[i - 1];
            totalGrowthRate += periodGrowth;
        }

        double averageGrowthRate = totalGrowthRate / (pastValues.length - 1);
        double[] futureEstimates = new double[futurePeriods];
        double lastKnownValue = pastValues[pastValues.length - 1];

        for (int i = 0; i < futurePeriods; i++) {
            lastKnownValue = computeProjection(lastKnownValue, averageGrowthRate, 1);
            futureEstimates[i] = lastKnownValue;
        }
        return futureEstimates;
    }
}