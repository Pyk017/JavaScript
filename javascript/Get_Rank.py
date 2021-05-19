from itertools import combinations, permutations



def get_rank(string):	
	global s
	l = tuple(string)
	d = s.index(l)

	return d + 1

def get_word(string, num):
	global s
	return ''.join(s[num - 1])

# By using lambda expression
# rank = lambda string: sorted(set(permutations(string, len(string)))).index(tuple(string)) + 1



string = input()
s = sorted(set(permutations(string, len(string))))
# num = int(input())
# print(get_word(string, num))
print(get_rank(string))
# print(rank(string))
 
