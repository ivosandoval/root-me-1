#!/usr/bin/python 
#resolve ELF - No software breakpoints challenge 
#https://www.root-me.org/en/Challenges/Cracking/ELF-No-software-breakpoints


def ROR(x, n):
    mask = (2L**n) - 1
    mask_bits = x & mask
    return (x >> n) | (mask_bits << (32 - n))
 
#rotate on left function
def ROL(x, n, bits=32):
    return ROR(x, bits - n)

#get checksum value!

#start of text section 
start = 0x80
end = 0x123


al = [0x1E, 0xCD, 0x2A, 0xD5, 0x34, 0x87, 0xFC, 0x78, 0x64, 0x35, 0x9D, 0xEC, 0xDE, 0x15, 0xAC, 0x97, 0x99, 0xAF, 0x96, 0xDA, 0x79, 0x26, 0x4F, 0x32, 0xE0]


fileIn = open("ch20.bin","rb")
content = fileIn.read()

codeSegment = content[start:end]

checksum = 0
for i in range(0,len(codeSegment)):
	checksum = (checksum& 0xffffff00) + ((checksum + ord(codeSegment[i]))&0x000000ff)
	checksum = ROL(checksum,3)


print "Checksum is: "+ hex(checksum)

#get good boy

pasword = ""
for i in range(len(al)-1, -1, -1):
	checksum = ROR(checksum,1)
	pasword = pasword + chr((checksum &0x000000ff)^ al[i])

passwordValid = ""
for i in range(len(pasword)-1, -1, -1):
	passwordValid = passwordValid + pasword[i]

print "password valid is: ", passwordValid

#difine Rotate onright function



