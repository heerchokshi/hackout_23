import csv
import random
from postgres_upload import data_insert
def abha_generator():
    digits = "0123456789"
    random_string = ''.join(random.choice(digits) for _ in range(14))
    return random_string

def generate_random_gender():
    genders = ["M", "F"]
    random_gender = random.choice(genders)
    return random_gender

def generate_random_age():
    random_age = random.randint(0, 100)
    return random_age

def generate_phr(name):
    final=""
    for i in name[0:5]:
        if (i==" "):
            continue
        else :
            final+=i
    return final+"@nhdm"

def random_string(num):
    digits = "abcdefghijklmnopqrstuvwxyz"
    random_string = ''.join(random.choice(digits) for _ in range(14))
    return random_string


data=[]
file=open("random_names.csv","r")
reader=csv.reader(file)
unique_abha_list=[]
unique_phr_list=[]
for i in reader :
    abha = abha_generator()
    if (abha in unique_abha_list):
        while(1):
            abha=abha_generator()
            if(abha not in unique_abha_list):
                unique_abha_list.append(abha)
                break
    else:
        unique_abha_list.append(abha)

    age = generate_random_age()
    gender= generate_random_gender()
    phr = generate_phr(i[0])
    if(phr in unique_phr_list):
        while(1):
            phr=generate_phr(random_string(5))
            if(phr not in unique_phr_list):
                unique_phr_list.append(phr)
                break
    else :
        unique_phr_list.append(phr)

    data.append([i[0],abha,age,gender,phr])
file.close()
'''
write_file=open("final_data.csv","w",newline="")
writer=csv.writer(write_file)

for i in data:
    writer.writerow(i)
write_file.close()
'''
data_insert(data)