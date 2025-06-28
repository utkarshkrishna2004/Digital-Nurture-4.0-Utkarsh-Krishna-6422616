-- Create accounts table
CREATE TABLE accounts (
  account_id   NUMBER PRIMARY KEY,
  account_type VARCHAR2(20),
  balance      NUMBER(10,2)
);

-- Create employees table
CREATE TABLE employees (
  employee_id    NUMBER PRIMARY KEY,
  name           VARCHAR2(50),
  department_id  NUMBER,
  salary         NUMBER(10,2)
);

-- Insert sample accounts
INSERT INTO accounts VALUES (301, 'SAVINGS', 1200);
INSERT INTO accounts VALUES (302, 'SAVINGS', 2500);
INSERT INTO accounts VALUES (401, 'CURRENT', 4000);
INSERT INTO accounts VALUES (402, 'CURRENT', 1500);

-- Insert sample employees
INSERT INTO employees VALUES (11, 'David', 101, 52000);
INSERT INTO employees VALUES (12, 'Eva', 101, 61000);
INSERT INTO employees VALUES (13, 'Frank', 102, 48000);

COMMIT;

--------------------------------------------------------------------------------
-- Scenario 1: Monthly interest for savings accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE accounts
    SET balance = balance * 1.01
    WHERE account_type = 'SAVINGS';
    COMMIT;
END;
/

--------------------------------------------------------------------------------
-- Scenario 2: Employee bonus update
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department_id IN NUMBER,
    p_bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * p_bonus_percent / 100)
    WHERE department_id = p_department_id;
    COMMIT;
END;
/

--------------------------------------------------------------------------------
-- Scenario 3: Fund transfer between accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    SELECT balance INTO v_balance FROM accounts WHERE account_id = p_from_account FOR UPDATE;
    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
    END IF;

    UPDATE accounts
    SET balance = balance - p_amount
    WHERE account_id = p_from_account;

    UPDATE accounts
    SET balance = balance + p_amount
    WHERE account_id = p_to_account;

    COMMIT;
END;
/

--------------------------------------------------------------------------------
-- SHOW BEFORE: Account balances
PROMPT === BEFORE: Accounts ===
SELECT * FROM accounts;

-- Run Scenario 1
EXEC ProcessMonthlyInterest;

-- SHOW AFTER Scenario 1
PROMPT === AFTER Interest Applied ===
SELECT * FROM accounts;

--------------------------------------------------------------------------------
-- SHOW BEFORE: Employee salaries
PROMPT === BEFORE: Employees ===
SELECT * FROM employees;

-- Run Scenario 2
EXEC UpdateEmployeeBonus(101, 15); -- 15% bonus

-- SHOW AFTER Scenario 2
PROMPT === AFTER Bonus Update ===
SELECT * FROM employees;

--------------------------------------------------------------------------------
-- SHOW BEFORE: Fund Transfer
PROMPT === BEFORE Transfer: Accounts ===
SELECT * FROM accounts;

-- Run Scenario 3
EXEC TransferFunds(301, 402, 700); -- Transfer 700 from 301 to 402

-- SHOW AFTER Transfer
PROMPT === AFTER Transfer: Accounts ===
SELECT * FROM accounts;
