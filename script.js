document.getElementById("ticketForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const hp = document.getElementById("hp").value;
  const event = document.getElementById("event").value;
  const jumlah = document.getElementById("jumlah").value;

  const output = document.getElementById("output");
  output.innerHTML = `
    <h3>Ringkasan Pemesanan:</h3>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>No. HP:</strong> ${hp}</p>
    <p><strong>Jenis Event:</strong> ${event}</p>
    <p><strong>Jumlah Tiket:</strong> ${jumlah}</p>
  `;
});
