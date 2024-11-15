document.addEventListener('DOMContentLoaded', function() {
    // Animasi atau interaksi lainnya
    console.log('Halaman siap!');
    
    // Menambahkan animasi hover pada proyek
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            gsap.to(project, { scale: 1.05, duration: 0.5 });
        });
        project.addEventListener('mouseleave', () => {
            gsap.to(project, { scale: 1, duration: 0.5 });
        });
    });

    // Animasi 3D pada foto profil
    const profilePhoto = document.querySelector('.profile-photo');
    profilePhoto.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = profilePhoto;
        let { offsetX: x, offsetY: y } = e;

        if (e.target !== profilePhoto) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
        }

        const xPercent = (x / width) - 0.5;
        const yPercent = (y / height) - 0.5;

        const angleX = yPercent * 20;
        const angleY = -xPercent * 20;

        profilePhoto.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });

    profilePhoto.addEventListener('mouseleave', () => {
        gsap.to(profilePhoto, { rotateX: 0, rotateY: 0, duration: 0.5 });
    });
});
