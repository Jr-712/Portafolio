// ===== TABS PORTFOLIO =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length && tabContents.length) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            // Quitar clases activas
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Activar actual
            btn.classList.add('active');
            const target = document.getElementById(btn.dataset.tab);
            if (target) target.classList.add('active');
        });
    });
}


// ===== MODALES PROYECTOS =====
const projectCards = document.querySelectorAll('.open-modal');

const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

// Abrir modal
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        const modal = document.getElementById(projectId);

        if (modal) {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // evitar scroll
        }
    });
});

// Cerrar con botón X
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});

// Cerrar al hacer clic fuera
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});

// Cerrar con tecla ESC (PRO)
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        modals.forEach(modal => {
            modal.style.display = "none";
        });
        document.body.style.overflow = "auto";
    }
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Ejecutar una vez al cargar
revealOnScroll();

// ===== MODAL CERTIFICADOS =====
const certCards = document.querySelectorAll('.certificate-card');
const certModal = document.getElementById('cert-modal');
const certImage = document.getElementById('cert-image');

// Mapeo de certificados
const certFiles = {
    cert1: "Coursera 11.jpg",
    cert2: "Coursera 12.jpg",
    cert3: "Coursera 13.jpg",
    cert4: "Coursera 14.jpg",
    cert5: "Coursera 15.jpg",
    cert6: "Coursera 16.jpg",
    cert7: "Coursera 17.jpg",
    cert8: "Coursera 18.jpg",
    cert9: "INEGI-QGIS.jpg",
    cert10: "INEGI-DENUE.jpg",
    cert11: "INEGI-MAPA.jpg"
};

// Abrir modal
certCards.forEach(card => {
    card.addEventListener('click', () => {
        const certId = card.dataset.cert;
        const file = certFiles[certId];

        if (file) {
            certImage.src = file;
            certModal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    });
});

// Cerrar modal
certModal.querySelector('.close-btn').addEventListener('click', () => {
    certModal.style.display = "none";
    certFrame.src = ""; // limpiar PDF
    document.body.style.overflow = "auto";
});

// Cerrar al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === certModal) {
        certModal.style.display = "none";
        certImage.src = "";
        document.body.style.overflow = "auto";
    }
});