# SUM OF SMALLEST NUMBERS
# Given a 2D ( nested ) list/array of size m * n, your task is to find the sum of the minimum values in each row.

# For Example:
# INPUT: [[ 1, 2, 3, 4, 5 ],[ 5, 6, 7, 8, 9 ],[ 20, 21, 34, 56, 100 ]]
# OUTPUT:26

# [ [ 1, 2, 3, 4, 5 ] # minimum value of row is 1
# , [ 5, 6, 7, 8, 9 ] # minimum value of row is 5
# , [ 20, 21, 34, 56, 100 ] # minimum value of row is 20
# ]

# So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

# Note: You will be always given non-empty list containing Positive values. 


# INPUT: [[ 7, 9, 8, 6, 2 ], [ 6, 3, 5, 4, 3 ], [ 5, 8, 7, 4, 5 ]]
# OUTPUT: 9

# INPUT [[ 11, 12, 14, 54 ], [ 67, 89, 90, 56 ], [ 7, 9, 4, 3 ], [ 9, 8, 6, 7 ]]
# OUTPUT: 76 

def solution(array):
    ans = 0
    for sub_array in array:
        ans += min(sub_array)
    return ans
    

