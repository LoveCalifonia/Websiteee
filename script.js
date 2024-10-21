function showProject(projectId) {
    let message = '';

    switch (projectId) {
        case 1:
            window.open('netflix.html');
            message = "Proyek 1 adalah Website nonton yang masi dalam tahap pengembangan."
            break;
        case 2:
            window.open('gallery.html')
            message = "Proyek 2 adalah website yang berisikan sound motor bermerek ktm.";
            break;
        default:
            message = "Proyek tidak ditemukan.";
    }

    alert(message);
}
