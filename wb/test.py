import unittest

from whiteboard import solution

class MatchTestCase(unittest.TestCase):
    def test_example_one(self):
        self.assertEqual(solution([[ 1, 2, 3, 4, 5 ],[ 5, 6, 7, 8, 9 ],[ 20, 21, 34, 56, 100 ]]), 26)
    def test_example_two(self):
        self.assertEqual(solution([[ 7, 9, 8, 6, 2 ], [ 6, 3, 5, 4, 3 ], [ 5, 8, 7, 4, 5 ]]), 9)
    def test_example_three(self):
        self.assertEqual(solution( [[ 11, 12, 14, 54 ], [ 67, 89, 90, 56 ], [ 7, 9, 4, 3 ], [ 9, 8, 6, 7 ]]), 76)

if __name__ == '__main__':
    unittest.main()