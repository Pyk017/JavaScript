def neighbour(ar):
	result = [0] * 5
	result[0] = ar[0] + ar[1]

	for i in range(1, len(ar) - 1):
		result[i] = ar[i - 1] + ar[i] + ar[i + 1]
	
	result[-1] = ar[-1] + ar[-2]
	
	return result

arr = [3, 4, 5, 6, 7]
res = neighbour(arr)
print(*res)