const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Masukkan kegiatan terlebih dahulu!");
        return;
    }

    // Membuat elemen list
    const li = document.createElement("li");

    // Membuat teks kegiatan
    const span = document.createElement("span");
    span.textContent = taskText;

    // Menandai kegiatan selesai
    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Membuat tombol hapus
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function() {
        li.remove();
        updateCount();
    });

    // Memasukkan elemen ke dalam list
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCount();
}

// Menghitung jumlah kegiatan
function updateCount() {
    const total = taskList.children.length;
    taskCount.textContent = total + " kegiatan";
}

// Menambahkan kegiatan dengan tombol Enter
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});