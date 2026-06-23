async function loadIncident() {
    try {
        const params = new URLSearchParams(window.location.search);
        const incidentId = parseInt(params.get("id")) || 1;

        const response = await fetch("data/incidents.json");
        const incidents = await response.json();
        console.log("Incidents:", incidents);
        const incident = incidents.find(i => i.id === incidentId);
        console.log("Incident ID:", incidentId);
        console.log("Found Incident:", incident);


        if (!incident) {
            document.getElementById("incident-title").textContent =
                "Incident Not Found";
            return;
        }

        document.title = incident.title + " - CyberWatch";

        // Hero
        document.getElementById("incident-title").textContent = incident.title;
        document.getElementById("incident-summary").textContent = incident.overview;

        const breadcrumb = document.getElementById("incident-breadcrumb");
        if (breadcrumb) breadcrumb.textContent = incident.title;

        const badge = document.getElementById("incident-category-badge");
        if (badge) badge.textContent = incident.category;

        // Metadata
        document.getElementById("incident-category").textContent = incident.category;
        document.getElementById("incident-severity").textContent = incident.severity;
        document.getElementById("incident-year").textContent = incident.year;
        document.getElementById("incident-impact").textContent = incident.impact;

        // Overview
        document.getElementById("incident-overview").textContent =
            incident.overview;

        // Stats
        document.getElementById("systems-affected").textContent =
            incident.stats.systemsAffected;

        document.getElementById("countries-impacted").textContent =
            incident.stats.countriesImpacted;

        document.getElementById("estimated-damage").textContent =
            incident.stats.estimatedDamage;

        document.getElementById("peak-activity").textContent =
            incident.stats.peakActivity;

        // Render sections
        renderTimeline(incident.timeline);
        renderAttackVector(incident.attackVector);
        renderImpact(incident.globalImpact);
        renderMitigation(incident.mitigation);
        renderLessons(incident.lessons);
        renderReferences(incident.references);
        renderRelatedIncidents(incident, incidents);

    } catch (error) {
        console.error(error);
    }
}

function renderTimeline(data) {
    const container = document.getElementById("timeline-container");

    container.innerHTML = data.map(item => `
        <div class="relative">
            <div class="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-primary-container timeline-indicator"></div>

            <div class="glass-card p-md rounded-lg">
                <span class="font-mono-sm text-primary">${item.date}</span>

                <h3 class="font-headline-md text-on-surface mt-xs">
                    ${item.event}
                </h3>
            </div>
        </div>
    `).join("");
}

function renderAttackVector(data) {
    const container = document.getElementById("attack-vector-container");

    container.innerHTML = data.map(item => `
        <div class="glass-card p-md rounded-xl flex flex-col gap-sm">
            <h3 class="font-headline-md text-on-surface">
                ${item.title}
            </h3>

            <p class="font-body-sm text-on-surface-variant">
                ${item.description}
            </p>
        </div>
    `).join("");
}

function renderImpact(data) {
    const container = document.getElementById("global-impact-container");

    container.innerHTML = data.map(item => `
        <div class="glass-card p-md rounded-xl">
            <p class="font-body-md">${item}</p>
        </div>
    `).join("");
}

function renderMitigation(data) {
    const container = document.getElementById("mitigation-container");

    container.innerHTML = data.map(item => `
        <div class="glass-card p-md rounded-xl flex items-center gap-sm">
            <span class="material-symbols-outlined text-green-400">
                check_circle
            </span>

            <span>${item}</span>
        </div>
    `).join("");
}

function renderLessons(data) {
    const container = document.getElementById("lessons-container");

    container.innerHTML = data.map(item => `
        <div class="glass-card p-md rounded-xl">
            <h3 class="font-headline-md text-on-surface">
                ${item}
            </h3>
        </div>
    `).join("");
}

function renderReferences(data) {
    const container = document.getElementById("references-container");

    container.innerHTML = data.map(item => `
        <div class="glass-card px-md py-sm rounded-lg">
            ${item}
        </div>
    `).join("");
}

function renderRelatedIncidents(currentIncident, allIncidents) {

    const container =
        document.getElementById("related-incidents-container");

    if (!container || !currentIncident.relatedIncidents) return;

    const related = allIncidents.filter(item =>
        currentIncident.relatedIncidents.includes(item.id)
    );
    console.log(related);

    container.innerHTML = related.map(item => `
        <div class="glass-card rounded-lg p-lg flex flex-col h-full hover:border-primary/50 transition-all duration-300 group">

            <div class="flex gap-sm mb-md">

                <span class="px-2 py-1 rounded bg-error/10 text-error border border-error/20 text-[10px] uppercase">
                    ${item.severity}
                </span>

                <span class="px-2 py-1 rounded bg-surface-bright text-on-surface-variant border border-white/5 text-[10px] uppercase">
                    ${item.category}
                </span>

            </div>

            <h3 class="font-headline-md text-on-surface mb-sm group-hover:text-primary transition-colors">
                ${item.title}
            </h3>

            <p class="font-body-sm text-on-surface-variant mb-md">
                ${item.overview.substring(0,120)}...
            </p>

            <a href="incident_dynamic.html?id=${item.id}"
               class="flex items-center gap-2 text-primary mt-auto">

                Learn More

                <span class="material-symbols-outlined text-[16px]">
                    arrow_forward
                </span>

            </a>

        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", loadIncident);