var employmentGraphsModal = document.getElementById('employmentGraphsModal')
employmentGraphsModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var employmentSector = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = employmentGraphsModal.querySelector('.modal-title')
  var modalBody = employmentGraphsModal.querySelector('.modal-body')
 // var modalBodyInput = employmentGraphsModal.querySelector('.modal-body input')

  //employmentSectorImage = employmentSector.replace(/\s+/g, '-').toLowerCase();

  // modalBody.classList.add(employmentSectorClass);

  modalBody.innerHTML = '<img src="images/' + employmentSector.replace(/\s+/g, '-').replace(/\,/g, '').toLowerCase() + '.jpg" alt="Graph of migrants into the ' + employmentSector + ' sector">';


  modalTitle.textContent = employmentSector + ' Sector'
  //modalBodyInput.value = employmentSector
})


