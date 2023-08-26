import datetime
import pickle
import psycopg2
import datetime

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

def get_patient_data(abha):
    select_query = f"SELECT name , age , gender , phr FROM abha_dummy WHERE abha ='{abha}';"

    # List to store retrieved data
    data_list = []

    # Establish a connection to the database
    try:
        connection = psycopg2.connect(**db_params)
        cursor = connection.cursor()

        # Execute the SELECT query
        cursor.execute(select_query)

        # Fetch all rows
        rows = cursor.fetchall()

        # Insert retrieved data into the list
        for row in rows:
            data_list.append(row)

        print("Data retrieved and inserted into the list!")

    except (Exception, psycopg2.Error) as error:
        print("Error retrieving data:", error)

    finally:
        # Close the cursor and connection
        if cursor:
            cursor.close()
        if connection:
            connection.close()

    # Print the retrieved data list
    x=[]
    for i in data_list:
        for j in i :
            x.append(j)
    return x


def get_token(abha , doctor):
    none_query="SELECT COUNT(*) FROM token_ledger;"
    try:
        connection = psycopg2.connect(**db_params)
        cursor = connection.cursor()

        # Execute the query
        cursor.execute(none_query)

        # Fetch the count result
        count = cursor.fetchone()[0]
        today = datetime.date.today()
        if count == 0:
            token_number = 1
            new_token_query = f"insert into token_ledger (token , doctor_id , abha , date )VALUES ('{token_number}','{doctor}','{abha}','{today}')"
            cursor.execute(new_token_query)
        else:
            last_token_query = f"SELECT MAX(token) FROM token_ledger WHERE date = '{today}';"
            cursor.execute(last_token_query)
            rows = cursor.fetchone()
            # Insert retrieved data into the list
            token_number = int(rows[0])+1
            new_token_query = f"insert into token_ledger (token , doctor_id , abha , date )VALUES ('{token_number}','{doctor}','{abha}','{today}')"
            cursor.execute(new_token_query)

    except (Exception, psycopg2.Error) as error:
        print("Error:", error)
    finally:
        # Close the cursor and connection
        if cursor:
            cursor.close()
        if connection:
            connection.commit()
            connection.close()

    return [token_number , today]