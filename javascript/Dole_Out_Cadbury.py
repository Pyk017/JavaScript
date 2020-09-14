# You are a teacher in reputed school. During Celebration Day you were assigned a task to distribute Cadbury such that maximum children get the chocolate. You have a box full of Cadbury with different width and height. You can only distribute largest square shape Cadbury. So if you have a Cadbury of length 10 and width 5, then you need to break Cadbury in 5X5 square and distribute to first child and then remaining 5X5 to next in queue

# Constraints
# 0<P<Q<1501

# 0<R<S<1501

# Input Format
# First line contains an integer P that denotes minimum length of Cadbury in the box

# Second line contains an integer Q that denotes maximum length of Cadbury in the box

# Third line contains an integer R that denotes minimum width of Cadbury in the box

# Fourth line contains an integer S that denotes maximum width of Cadbury in the box

# Output
# Print total number of children who will get chocolate.

# Timeout
# 1

# Explanation
# Example 1

# Input

# 5

# 7

# 3

# 4

# Output

# 24

# Explanation

# Length is in between 5 to 7 and width is in between 3 to 4.

# So we have 5X3,5X4,6X3,6X4,7X3,7X4 type of Cadbury in the box.

# If we take 5X3 :

# First, we can give 3X3 square Cadbury to 1st child .Then we are left with 3X2. Now largest square is 2X2 which will be given to next child. Next, we are left with two  1X1 part of Cadbury which will be given to another two children.

# And so on


def calculate(length, width):
	count = 0
	if length == width:
		return 1

	while length != 1 and width != 1:
		if length == width:
			return count + 1

		count += 1
		if length < width:
			width = width - length
		else:
			length = length - width

	return width + count if length == 1 else length + count


def cadbury(maxl, minl, maxw, minw):
	res = 0
	for i in range(minl, maxl + 1):
		for j in range(minw, maxw + 1):
			res += calculate(i, j)

	return res

minl = int(input())
maxl = int(input())
minw = int(input())
maxw = int(input())
result = cadbury(maxl, minl, maxw, minw)
print(result)
