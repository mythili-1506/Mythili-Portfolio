const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 

  document.getElementById("downloadCv").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const fileUrl = "Mythili_SoftwareDeveloper.pdf"; // Replace with your file's actual URL
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Mythili_SoftwareDeveloper.pdf"; // The downloaded file's name
    link.click();
  });

//  function sendMail() {
//     var params={
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };

//     const serviceId = "service_bqyfmur";
//     const templateId = "template_qc9dfra";

//     emailjs
//         .send(serviceId,templateId,params)
//         .then((res) => {
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("your message send sucessfully");
//         })
//         .catch((err)=> console.log(err));
// }



// Initialize EmailJS
// emailjs.init('mythilia737@gmail.com'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

// function sendMail() {
//     // Get form values
//     const name = document.querySelector('input[placeholder="Full Name"]').value;
//     const email = document.querySelector('input[placeholder="Email"]').value;
//     const phone = document.querySelector('input[placeholder="Mobile Number"]').value;
//     const subject = document.querySelector('input[placeholder="Subject For"]').value;
//     const message = document.querySelector('textarea[placeholder="Message"]').value;

//     // Define the template parameters
//     const templateParams = {
//         from_name: name,
//         from_email: email,
//         phone: phone,
//         subject: subject,
//         message: message,
//     };

//     // Send the email
//     emailjs.send('service_bqyfmur', 'template_qc9dfra', templateParams)
//         .then(response => {
//             alert('Message sent successfully!');
//             console.log('SUCCESS!', response.status, response.text);
//         })
//         .catch(error => {
//             alert('Failed to send message. Please try again.');
//             console.error('FAILED...', error);
//         });

//     // Prevent default form submission
//     return false;
// }

