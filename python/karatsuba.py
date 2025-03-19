"""
Notes for the Karatsuba algorithm

Multiplying two large numbers takes O(n^2) time complexity,
where n is the number of digits. Can we do better? Of course

Karatsuba algorithm is a divide-and-conquer algorithm, recursively splits
the numbers then joins them together to get the results of multiplication
(same paradigm as merge sort)

This reduces the O(n^2) -> O(n^(log_2 3)) ~= O(n^1.585)

---------------------------------------------------------------------------

Math Example walk through:
suppose we have the number: x = 421369
next we split this number into 2 parts "a", and "b":
|  a  |  b  |
| 421 | 369 |

421369 = 421000 + 369 = 421 * 10^3 + 369
we can make this a formula:
x = a * 10^(n/2) + b

Next we can come up with the second number to multiply by y:
y = 350140
|  c  |  d  |
| 350 | 140 |
y = c * 10^(n/2) + d

x * y = (a * 10^(n/2) + b)(c * 10^(n/2) + d)
= a * 10^(n/2) * c * 10^(n/2) + a * 10^(n/2) * d + b * c * 10^(n/2) + b * d
= ac * 10^2(n/2) + (ad + bc) * 10^(n/2) + bd

Here it may seem we need 4 multiplications (ac, ad, bc, bd) but in fact we can get away with 3
ac = karatsuba(a, c)
bd = karatsuba(b, d)
ad_plus_bc = karatsuba(a+b, c+d) - ac - bd
(a + b)(c + d) - ac - bd
= (ac + ad + bc + bd) - ac - bd
= ad + bc

OR Simply
(a + b)(c + d) = ac + ad + bc + bd
Isolate ad + bc
ad + bc = (a + b)(c + d) - ac - bd

---------------------------------------------------------------------------
"""

def karatsuba(x, y):
    if x < 10 or y < 10:
        return x * y
    
    n = max(len(str(x)), len(str(y)))
    m = n // 2
    
    high_x, low_x = divmod(x, 10**m)
    high_y, low_y = divmod(y, 10**m)
    
    ac = karatsuba(high_x, high_y)
    bd = karatsuba(low_x, low_y)
    ad_bc = karatsuba(high_x + low_x, high_y + low_y) - ac - bd
    
    return (10**(2*m) * ac) + (10**m * ad_bc) + bd

print(karatsuba(421369, 350140))