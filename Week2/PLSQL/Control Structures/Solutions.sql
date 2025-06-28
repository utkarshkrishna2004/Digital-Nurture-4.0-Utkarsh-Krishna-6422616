-- Create customers table
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name        VARCHAR2(50),
    age         NUMBER,
    balance     NUMBER(10,2),
    isVIP       CHAR(1) DEFAULT 'N'
);

-- Create loans table
CREATE TABLE loans (
    loan_id       NUMBER PRIMARY KEY,
    customer_id   NUMBER,
    due_date      DATE,
    interest_rate NUMBER(5,2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers VALUES (1, 'John Doe', 65, 15000, 'N');
INSERT INTO customers VALUES (2, 'Jane Smith', 45, 9000, 'N');
INSERT INTO customers VALUES (3, 'Bob Johnson', 70, 12000, 'N');

INSERT INTO loans VALUES (101, 1, SYSDATE + 15, 7.5);
INSERT INTO loans VALUES (102, 2, SYSDATE + 40, 6.0);
INSERT INTO loans VALUES (103, 3, SYSDATE + 10, 8.0);

COMMIT;

-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60 years old
DECLARE
    CURSOR cur_customers IS
        SELECT customer_id FROM customers WHERE age > 60;
BEGIN
    FOR cust IN cur_customers LOOP
        UPDATE loans
        SET interest_rate = interest_rate - (interest_rate * 0.01) -- 1% discount
        WHERE customer_id = cust.customer_id;
    END LOOP;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Discount applied to all loans for customers above 60.');
END;
/

-- Scenario 2: Set IsVIP flag to 'Y' for customers with balance over $10,000
BEGIN
    UPDATE customers
    SET isVIP = 'Y'
    WHERE balance > 10000;
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP status updated for customers with balance over $10,000.');
END;
/

-- Scenario 3: Print reminders for loans due within the next 30 days
DECLARE
    CURSOR cur_due_loans IS
        SELECT l.loan_id, l.due_date, c.name
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR rec IN cur_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: ' || rec.name || ', your loan #' || rec.loan_id ||
                             ' is due on ' || TO_CHAR(rec.due_date, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/