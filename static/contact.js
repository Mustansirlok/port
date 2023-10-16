// JavaScript for your HTML page

document.addEventListener("DOMContentLoaded", function (event) {
    // Add any additional JavaScript functionality here
  
    // Handle form submission
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // You can perform further actions here, such as sending data to a server
      // or displaying a success message to the user.
      
      // For this example, let's just log the form data to the console:
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      console.log("Form Data:");
      console.log("Email:", email);
      console.log("Subject:", subject);
      console.log("Message:", message);
  
      // You can add your logic to process the form data here.
    });
  });
  