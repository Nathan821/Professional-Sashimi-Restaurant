document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();


    document.getElementById('successMessage').textContent = "Thank you! Your message has been sent successfully.";
    document.getElementById('successMessage').style.color = "#ff6347";
    

    this.reset();
});


const heroVideo = document.getElementById('hero-video');
heroVideo.loop = true;
heroVideo.play();


let dt = document.getElementById("dT");

dt.innerHTML = new Date().getFullYear();