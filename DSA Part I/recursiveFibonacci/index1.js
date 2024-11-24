def recursiveFibonacci(n):
    # Base case: if n is 0 or 1, return n
    if n <= 1:
        return n
    # Recursive case: sum of the two previous Fibonacci numbers
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)

# Example usage
n = 10
print(f"Fibonacci of {n}: {recursiveFibonacci(n)}")
