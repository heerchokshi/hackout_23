from reportlab.platypus import SimpleDocTemplate,Paragraph,Table,TableStyle,Image
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors
from postgres_utils import get_patient_data , get_token
from reportlab.lib.pagesizes import letter
from qr_generator import qr_generator
from reportlab.platypus import SimpleDocTemplate, Image

# Create a Pandas DataFrame for the table content
# Create a PDF document
def generate_pdf(abha,doctor):
    pdf_filename = "letter_with_table.pdf"
    doc = SimpleDocTemplate(pdf_filename, pagesize=letter)
    qr=True
    # Create a list to hold the flowable elements
    elements = []
    hospital_details=[]
    file=open("details.txt",'r')
    reader=file.readlines()

    # Define the letterhead content (can be an image, text, etc.)
    hospital_name = reader[0]
    hospital_addr = reader[1]
    hospital_phone_no = reader[2]
    hospital_email = reader[3]
    hospital_registration_number = reader[4]

    title_text = hospital_name
    title_style = getSampleStyleSheet()["Title"]
    title = Paragraph(title_text, title_style)
    elements.append(title)

    info_text = f"""
         {hospital_addr}<br/>
        Registration Number: {hospital_registration_number}<br/>
        Phone: {hospital_phone_no} | Email :{hospital_email} <br/> 
        <br/>
    """

    info_style = getSampleStyleSheet()["Normal"]
    info_style.alignment = 1  # Center alignment
    info_style.fontSize = 10  # Smaller font size
    info = Paragraph(info_text, info_style)
    elements.append(info)

    # Convert the DataFrame to a list of lists for the table content
    patient_details=get_patient_data(abha)
    if (patient_details ==[]):
        patient_name = ''
        age = ''
        gender = ''
        abha_number = 'NOT REGISTERED UNDER ABHA'
        phr_addr = ''
        qr=False
    else:
        patient_name = patient_details[0]
        age = patient_details[1]
        gender = patient_details[2]
        abha_number = abha
        phr_addr = patient_details[3]

    data = [
        ["NAME  " ,patient_name],
        ["AGE  ",age],
        ["GENDER  ",gender],
        ["ABHA NUMBER  ",abha_number],
        ["PHR ADDRESS  ", phr_addr]

    ]
    patient_details_table = Table(data)
    patient_details_table.setStyle(TableStyle([('GRID', (0, 0), (-1, -1), 1, colors.black)]))
    if (qr==False):
        elements.append(patient_details_table)
    else :
        qr_image=qr_generator(abha)
        qr_image.save("qr_img.png")
        data=[[Image("qr_img.png",width=100,height=100) , patient_details_table]]
        table_qith_qr = Table(data)
        elements.append(table_qith_qr)

    token_no_data=get_token(abha , doctor)
    doctor_token = f"""
            Date : {token_no_data[1]}<br/>
            Token Number: {token_no_data[0]}<br/>
             {doctor}<br/>
            <br/>
            <br/>
            Rx <br/> 
        """

    info_style = getSampleStyleSheet()["Normal"]
    info_style.alignment = 0  # Center alignment
    info_style.fontSize = 8  # Smaller font size
    info = Paragraph(doctor_token, info_style)
    elements.append(info)

    # Build the PDF document
    doc.build(elements)

    print(f"PDF created: {pdf_filename}")


generate_pdf("12345678912345" , "Dr. Yadav")
