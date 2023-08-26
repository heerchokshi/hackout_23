import qrcode

# 14-digit long integer
integer_value = 12345678901234

def qr_generator(abha):
    integer_str = str(abha)

    # Create a QR code instance
    qr = qrcode.QRCode(
        version=1,  # QR code version (adjust if needed)
        error_correction=qrcode.constants.ERROR_CORRECT_L,  # Error correction level
        box_size=10,  # Size of each box/pixel in the QR code
        border=4,  # Border size
    )

    # Add the data to the QR code
    qr.add_data(integer_str)
    qr.make(fit=True)

    # Create an image of the QR code
    qr_image = qr.make_image(fill_color="black", back_color="white")

    # Save the image to a file
    return qr_image


