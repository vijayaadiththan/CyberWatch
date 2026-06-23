async function loadIncident() {
  try {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;

    const response = await fetch('data/incidents.json');
    const incidents = await response.json();

    const incident = incidents.find(i => i.id === id);

    if (!incident) {
      document.title = 'Incident Not Found - CyberWatch';
      return;
    }

    document.title = incident.title + ' - CyberWatch';

    console.log('Loaded incident:', incident.title);

  } catch (error) {
    console.error('Error loading incident:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadIncident);