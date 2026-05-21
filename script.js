document.querySelectorAll('.card button').forEach(button => {
  button.addEventListener('click', function() {
    const foodName = this.closest('.card').querySelector('b').textContent;

    alert(`${foodName} berhasil ditambahkan ke keranjang!`);
  });
});