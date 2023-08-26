import pickle
import psycopg2


file=open("credentials.pickle","rb")
data=pickle.load(file)
file.close()
host=data[0]
port=data[1]
user=data[2]
passwd=data[3]

# Database connection parameters
db_params = {
    'host': host,
    'database': user,
    'user': user,
    'password': passwd,
}

# SQL query to insert data
def data_insert(data):
    # Establish a connection to the database
    connection = psycopg2.connect(**db_params)
    cursor = connection.cursor()

    for i in range(len(data)):
        try:
            abha=data[i][1]
            name=data[i][0]
            age=data[i][2]
            gender=data[i][3]
            phr=data[i][4]
            insert_query = f"""INSERT INTO abha_dummy (abha , name , age , gender , phr) VALUES ('{abha}','{name}','{age}','{gender}','{phr}');"""
            # Execute the insert query with data
            print(insert_query)
            cursor.execute(insert_query)
            # Commit the transaction
            connection.commit()
            print("Data inserted successfully!")
        except Exception as e:
            print(e)

    cursor.close()
    connection.close()


