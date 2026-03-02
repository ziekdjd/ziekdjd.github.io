document.querySelectorAll('.download-source').forEach(button => {
    button.addEventListener('click', function () {
        const file = this.getAttribute('data-file');
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop();
        link.click();
    });
});