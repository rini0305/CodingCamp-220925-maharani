document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('.nav a, .nav-link').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Contact form -> preview
  const form = document.getElementById('contactForm');
  const preview = document.getElementById('previewContent');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inputName')?.value || '(Tidak diisi)';
      const dob = document.getElementById('dob')?.value || '(Tidak diisi)';
      const gender = document.getElementById('gender')?.value || '(Tidak diisi)';
      const message = document.getElementById('message')?.value || '(Tidak ada pesan)';

      preview.innerHTML = `
        <strong>Current time:</strong> ${new Date().toLocaleString()}<br>
        <strong>Nama:</strong> ${name}<br>
        <strong>Tanggal Lahir:</strong> ${dob}<br>
        <strong>Jenis Kelamin:</strong> ${gender}<br>
        <strong>Pesan:</strong> ${message}
      `;

      form.reset();
    });
  }

  // Hero contact CTA scroll
  document.getElementById('btnContact')?.addEventListener('click', () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  });
});