function showDetails(birdName) {
    const detailsContainer = document.getElementById('bird-details');
    detailsContainer.innerHTML = `<h2>${birdName} Details</h2><p>Additional information about the ${birdName}.</p>`;
}
