const ToUserIndividual = async (created: any) => {
  try {
    let obj = {
      to: created?.email,
      subject: `New Corporate Seller Registered`,
      template: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
      
        <body
          style="
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          "
        >
          <div
            style="
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px 0;
            "
          >
            <div
              style="
                background-color: #a10244;
                height: 20px;
                margin: 0 auto;
              "
            ></div>
      
            <img
              src="https://bairuha-bucket.s3.ap-south-1.amazonaws.com/nextmiddleeast/logo.95174a95f2415bfa4f0f.png"
              alt="Company Logo"
              style="max-width: 50%; height: auto; display: block; margin: 0 auto"
            />
      
            <h1>Greetings from Next ME</h1>
      
            <!-- Content -->
            <div style="text-align: left; padding: 20px">
              <p>Hello ${created?.name},</p>
              <p style="padding-left: 10px">
                Congratulations! Your individual seller registration on NextMe is
                successful.
              </p>
              <p style="padding-left: 10px">
                If you have any questions or need assistance, feel free to reach out.
              </p>
              <p style="padding-top: 20px">Thank you for choosing NextMe!</p>
            </div>
            
            
            <div
              style="
                background-color: #a10244;
                height: auto;
                margin: 0 auto;
                padding: 10px 40px;
                text-align: justify;
                color: white;
                font-size: x-small;
              "
            >
            <h2 style="text-align: center; color: white;">
              <span style="text-decoration: none; color: inherit;">
                <a href="https://www.nextmiddleeast.com/" style="text-decoration: none; color: inherit;">Next ME</a>
              </span>
            </h2>
              <p>
                Founded in 2023 by UAE, with a group of businessmen, NextMe
                leverages the power of marketing intelligence and e-commerce vision to
                deliver a wide range of products that make your lifestyle more
                attractive..
              </p>
            </div>
          </div>
        </body>
      </html>      
      `,
    };
    return obj;
  } catch (err) {
    let obj = {};
    return obj;
  }
};
export { ToUserIndividual };
