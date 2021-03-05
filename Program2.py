nums1 = [] 
n1 = int(input("Enter number of elements : ")) 
for i in range(0, n1): 
	element1 = int(input("enter nums1 elements: ")) 

	nums1.append(element1) 

nums2 = [] 
n2 = int(input("Enter number of elements : ")) 
for i in range(0, n2): 
	element2 = int(input("enter nums2 elements: ")) 

	nums2.append(element2)
	
	
def intersection(nums1, nums2): 
	return list(set(nums1) & set(nums2)) 	

print(intersection(nums1, nums2))