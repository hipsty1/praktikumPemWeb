document.getElementById("myForm").addEventListener("submit", function(e) {
    const nama = document.querySelector("input[name='nama']").value.trim();
    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        e.preventDefault();
    }
});
