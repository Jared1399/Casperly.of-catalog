const btnToggleTransferData = document.getElementById('toggleTransferData');
const transferData = document.getElementById('infoContainer');

btnToggleTransferData.addEventListener('click', () => {
    transferData.classList.toggle('invisible');
});