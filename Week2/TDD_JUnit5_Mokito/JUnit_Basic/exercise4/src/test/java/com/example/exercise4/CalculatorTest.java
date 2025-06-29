package com.example;

import org.junit.After;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {
    private Calculator calculator;
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setting up before test...");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Cleaning up after test...");
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testAdditionWithNegative() {
        // Arrange
        int a = -5;
        int b = 15;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(10, result);
    }
}