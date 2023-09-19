function submitForm() {
            // Mengambil nilai dari input
            var nama = document.getElementById("name").value;
            var role = document.getElementById("role").value;
            var availability = document.getElementById("avai").value;
            var usia = document.getElementById("usia").value;
            var lokasi = document.getElementById("lokasi").value;
            var experience = document.getElementById("Years").value;
            var email = document.getElementById("email").value;
    
            // Memasukkan nilai ke dalam elemen dengan class "header"
            var header = document.querySelector(".header");
            header.innerHTML = `
                <div class="person">
                    <div class="image">
                        <img src="upp.jpg" alt="logo">
                    </div>
                    <div>
                        <h4>${nama}</h4>
                        <p class="fe">${role}</p>
                        <div class="person-cta">
                            <a href="#" class="kontak-btn">Kontak</a>
                            <a href="#" class="resume-btn">Resume</a>
                        </div>
                    </div>
                </div>
                <div class="person-data">
                    <div class="label">
                        <strong>Availabilty</strong>
                        <p>${availability}</p>
                    </div>
                    <div class="label">
                        <strong>Usia</strong>
                        <p>${usia}</p>
                    </div>
                    <div class="label">
                        <strong>Lokasi</strong>
                        <p>${lokasi}</p>
                    </div>
                    <div class="label">
                        <strong>Pengalaman</strong>
                        <p>${experience}</p>
                    </div>
                    <div class="label">
                        <strong>Email</strong>
                        <p>${email}</p>
                    </div>
                </div>
            `;
        }