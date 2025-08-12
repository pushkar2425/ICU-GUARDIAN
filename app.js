// AI ICU Guardian Dashboard JavaScript

// Patient data from the provided JSON
const appData = {
  "patients": [
    {
      "id": "P001",
      "name": "John Miller",
      "age": 67,
      "room": "ICU-101",
      "condition": "Post-surgical monitoring",
      "admissionDate": "2025-08-01",
      "status": "stable",
      "riskScore": "low",
      "doctor": "Dr. Sarah Wilson",
      "vitals": {
        "heartRate": 78,
        "bloodPressure": { "systolic": 125, "diastolic": 82 },
        "oxygenSaturation": 97,
        "respiratoryRate": 16,
        "temperature": 98.6
      },
      "notes": "Patient recovering well from cardiac surgery. Vitals stable.",
      "medications": ["Metoprolol", "Atorvastatin", "Aspirin"]
    },
    {
      "id": "P002",
      "name": "Sarah Johnson",
      "age": 45,
      "room": "ICU-102",
      "condition": "Pneumonia",
      "admissionDate": "2025-07-30",
      "status": "critical",
      "riskScore": "high",
      "doctor": "Dr. Michael Chen",
      "vitals": {
        "heartRate": 110,
        "bloodPressure": { "systolic": 95, "diastolic": 60 },
        "oxygenSaturation": 89,
        "respiratoryRate": 28,
        "temperature": 102.4
      },
      "notes": "Severe pneumonia with respiratory distress. Requires close monitoring.",
      "medications": ["Antibiotics", "Bronchodilators", "Oxygen therapy"]
    },
    {
      "id": "P003",
      "name": "Robert Chen",
      "age": 52,
      "room": "ICU-103",
      "condition": "Cardiac arrest recovery",
      "admissionDate": "2025-08-02",
      "status": "improving",
      "riskScore": "medium",
      "doctor": "Dr. Emily Rodriguez",
      "vitals": {
        "heartRate": 85,
        "bloodPressure": { "systolic": 118, "diastolic": 75 },
        "oxygenSaturation": 95,
        "respiratoryRate": 18,
        "temperature": 99.1
      },
      "notes": "Post-cardiac arrest. Neurological function improving.",
      "medications": ["ACE inhibitors", "Beta blockers", "Anticoagulants"]
    },
    {
      "id": "P004",
      "name": "Maria Rodriguez",
      "age": 38,
      "room": "ICU-104",
      "condition": "Post-operative complications",
      "admissionDate": "2025-07-29",
      "status": "stable",
      "riskScore": "low",
      "doctor": "Dr. James Thompson",
      "vitals": {
        "heartRate": 72,
        "bloodPressure": { "systolic": 128, "diastolic": 84 },
        "oxygenSaturation": 98,
        "respiratoryRate": 14,
        "temperature": 98.9
      },
      "notes": "Post-operative monitoring. Recovery progressing as expected.",
      "medications": ["Pain management", "Antibiotics", "Anti-inflammatory"]
    },
    {
      "id": "P005",
      "name": "David Thompson",
      "age": 71,
      "room": "ICU-105",
      "condition": "Sepsis",
      "admissionDate": "2025-08-01",
      "status": "critical",
      "riskScore": "high",
      "doctor": "Dr. Lisa Wang",
      "vitals": {
        "heartRate": 125,
        "bloodPressure": { "systolic": 88, "diastolic": 55 },
        "oxygenSaturation": 91,
        "respiratoryRate": 32,
        "temperature": 103.8
      },
      "notes": "Severe sepsis with organ dysfunction. Intensive treatment required.",
      "medications": ["Broad-spectrum antibiotics", "Vasopressors", "Fluid therapy"]
    },
    {
      "id": "P006",
      "name": "Lisa Wang",
      "age": 29,
      "room": "ICU-106",
      "condition": "Drug overdose",
      "admissionDate": "2025-08-02",
      "status": "improving",
      "riskScore": "medium",
      "doctor": "Dr. Robert Miller",
      "vitals": {
        "heartRate": 92,
        "bloodPressure": { "systolic": 115, "diastolic": 72 },
        "oxygenSaturation": 96,
        "respiratoryRate": 20,
        "temperature": 99.4
      },
      "notes": "Overdose patient. Toxicology levels decreasing.",
      "medications": ["Detoxification support", "Psychiatric evaluation pending"]
    }
  ],
  "alerts": [
    {
      "id": "A001",
      "type": "critical",
      "message": "Heart rate elevated above 120 BPM",
      "patientId": "P005",
      "patientName": "David Thompson",
      "timestamp": "2025-08-12T10:45:00",
      "room": "ICU-105",
      "acknowledged": false,
      "priority": "high"
    },
    {
      "id": "A002",
      "type": "warning",
      "message": "Oxygen saturation below 92%",
      "patientId": "P002",
      "patientName": "Sarah Johnson",
      "timestamp": "2025-08-12T10:32:00",
      "room": "ICU-102",
      "acknowledged": false,
      "priority": "medium"
    },
    {
      "id": "A003",
      "type": "info",
      "message": "Medication administered successfully",
      "patientId": "P003",
      "patientName": "Robert Chen",
      "timestamp": "2025-08-12T10:15:00",
      "room": "ICU-103",
      "acknowledged": true,
      "priority": "low"
    },
    {
      "id": "A004",
      "type": "critical",
      "message": "Blood pressure dangerously low",
      "patientId": "P005",
      "patientName": "David Thompson",
      "timestamp": "2025-08-12T10:28:00",
      "room": "ICU-105",
      "acknowledged": false,
      "priority": "high"
    },
    {
      "id": "A005",
      "type": "warning",
      "message": "Temperature elevated above 102°F",
      "patientId": "P002",
      "patientName": "Sarah Johnson",
      "timestamp": "2025-08-12T10:12:00",
      "room": "ICU-102",
      "acknowledged": false,
      "priority": "medium"
    },
    {
      "id": "A006",
      "type": "info",
      "message": "Patient vital signs reviewed",
      "patientId": "P001",
      "patientName": "John Miller",
      "timestamp": "2025-08-12T09:45:00",
      "room": "ICU-101",
      "acknowledged": true,
      "priority": "low"
    },
    {
      "id": "A007",
      "type": "warning",
      "message": "Respiratory rate elevated",
      "patientId": "P005",
      "patientName": "David Thompson",
      "timestamp": "2025-08-12T09:30:00",
      "room": "ICU-105",
      "acknowledged": false,
      "priority": "medium"
    }
  ],
  "analyticsData": {
    "admissionTrends": [
      {"date": "2025-08-06", "admissions": 3, "discharges": 2},
      {"date": "2025-08-07", "admissions": 5, "discharges": 1},
      {"date": "2025-08-08", "admissions": 2, "discharges": 4},
      {"date": "2025-08-09", "admissions": 4, "discharges": 2},
      {"date": "2025-08-10", "admissions": 6, "discharges": 3},
      {"date": "2025-08-11", "admissions": 3, "discharges": 2},
      {"date": "2025-08-12", "admissions": 1, "discharges": 0}
    ],
    "vitalTrends": {
      "heartRate": [75, 78, 82, 79, 85, 88, 92, 89, 86, 83, 81, 78],
      "timestamps": ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]
    },
    "alertFrequency": {
      "critical": 15,
      "warning": 23,
      "info": 31
    },
    "occupancyRates": [85, 92, 78, 88, 95, 82, 90]
  },
  "userSettings": {
    "notifications": {
      "criticalAlerts": true,
      "warningAlerts": true,
      "infoAlerts": false,
      "emailNotifications": true,
      "soundAlerts": true
    },
    "dashboard": {
      "refreshInterval": 30,
      "defaultView": "dashboard",
      "showPatientPhotos": false,
      "compactMode": false
    },
    "alertThresholds": {
      "heartRateHigh": 120,
      "heartRateLow": 50,
      "bloodPressureHigh": 160,
      "bloodPressureLow": 80,
      "oxygenSaturationLow": 92,
      "temperatureHigh": 102,
      "respiratoryRateHigh": 25
    }
  }
};

// Global variables
let currentPatientId = 'P001';
let alerts = [...appData.alerts];
let charts = {};
let updateInterval;
let currentSection = 'dashboard';
let filteredPatients = [...appData.patients];
let filteredAlerts = [...alerts];

// Navigation functionality
const sectionTitles = {
  dashboard: 'ICU Dashboard',
  patients: 'Patient Management',
  alerts: 'Alert Management', 
  analytics: 'Analytics & Reports',
  settings: 'Settings & Configuration'
};

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDashboard();
    startRealTimeUpdates();
    updateClock();
    setInterval(updateClock, 1000);
});

function initializeNavigation() {
    // Add click handlers to navigation items
    document.querySelectorAll('.nav-item').forEach(navItem => {
        navItem.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            navigateToSection(section);
        });
    });
}

function navigateToSection(section) {
    if (currentSection === section) return;
    
    // Update navigation active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');
    
    // Hide current section
    document.querySelectorAll('.content-section').forEach(contentSection => {
        contentSection.classList.remove('active');
    });
    
    // Show new section
    document.getElementById(`${section}-section`).classList.add('active');
    
    // Update page title and breadcrumb
    document.getElementById('pageTitle').textContent = sectionTitles[section];
    document.getElementById('breadcrumbPath').textContent = sectionTitles[section];
    
    currentSection = section;
    
    // Initialize section-specific content
    switch (section) {
        case 'dashboard':
            // Dashboard is already initialized
            break;
        case 'patients':
            initializePatientsSection();
            break;
        case 'alerts':
            initializeAlertsSection();
            break;
        case 'analytics':
            initializeAnalyticsSection();
            break;
        case 'settings':
            initializeSettingsSection();
            break;
    }
}

function initializeDashboard() {
    updateOverviewCards();
    renderPatients();
    renderAlerts();
    updateVitalSigns(currentPatientId);
    initializeCharts();
    setupEventListeners();
}

function initializePatientsSection() {
    renderDetailedPatients();
    setupPatientFilters();
}

function initializeAlertsSection() {
    renderDetailedAlerts();
    updateAlertStats();
    setupAlertFilters();
}

function initializeAnalyticsSection() {
    initializeAnalyticsCharts();
}

function initializeSettingsSection() {
    loadSettings();
    setupSettingsTabs();
    setupSettingsHandlers();
}

function updateOverviewCards() {
    const patients = appData.patients;
    const totalPatients = patients.length;
    const criticalPatients = patients.filter(p => p.status === 'critical').length;
    const stablePatients = patients.filter(p => p.status === 'stable' || p.status === 'improving').length;
    
    // Calculate average stay
    const avgStay = patients.reduce((acc, patient) => {
        const admissionDate = new Date(patient.admissionDate);
        const today = new Date('2025-08-12');
        const daysDiff = Math.ceil((today - admissionDate) / (1000 * 60 * 60 * 24));
        return acc + daysDiff;
    }, 0) / patients.length;

    document.getElementById('totalPatients').textContent = totalPatients;
    document.getElementById('criticalPatients').textContent = criticalPatients;
    document.getElementById('stablePatients').textContent = stablePatients;
    document.getElementById('avgStay').textContent = avgStay.toFixed(1);
}

function renderPatients() {
    const patientsGrid = document.getElementById('patientsGrid');
    if (!patientsGrid) return;
    
    patientsGrid.innerHTML = '';

    appData.patients.forEach(patient => {
        const patientCard = createPatientCard(patient);
        patientsGrid.appendChild(patientCard);
    });
}

function createPatientCard(patient) {
    const card = document.createElement('div');
    card.className = 'patient-card';
    card.dataset.patientId = patient.id;
    
    const admissionDate = new Date(patient.admissionDate).toLocaleDateString();
    
    card.innerHTML = `
        <div class="patient-header">
            <div class="patient-info">
                <h3>${patient.name}</h3>
                <div class="patient-details">
                    <div>Age: ${patient.age} | Room: ${patient.room}</div>
                    <div>Condition: ${patient.condition}</div>
                    <div>Admitted: ${admissionDate}</div>
                    <div>Risk Score: ${patient.riskScore.toUpperCase()}</div>
                </div>
            </div>
            <div class="patient-status">
                <div class="status-indicator ${patient.status}"></div>
                <span>${patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}</span>
            </div>
        </div>
        <div class="patient-vitals">
            <div class="vital-preview">
                <strong>HR:</strong> ${patient.vitals.heartRate} BPM
            </div>
            <div class="vital-preview">
                <strong>BP:</strong> ${patient.vitals.bloodPressure.systolic}/${patient.vitals.bloodPressure.diastolic}
            </div>
            <div class="vital-preview">
                <strong>O2:</strong> ${patient.vitals.oxygenSaturation}%
            </div>
            <div class="vital-preview">
                <strong>Temp:</strong> ${patient.vitals.temperature}°F
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        selectPatient(patient.id);
    });

    return card;
}

function selectPatient(patientId) {
    currentPatientId = patientId;
    const patientSelector = document.getElementById('patientSelector');
    if (patientSelector) {
        patientSelector.value = patientId;
    }
    updateVitalSigns(patientId);
    
    // Update patient card selection
    document.querySelectorAll('.patient-card').forEach(card => {
        card.classList.remove('selected');
    });
    const selectedCard = document.querySelector(`[data-patient-id="${patientId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
}

function updateVitalSigns(patientId) {
    const patient = appData.patients.find(p => p.id === patientId);
    if (!patient) return;

    const vitals = patient.vitals;
    
    // Update vital values
    const heartRateEl = document.getElementById('heartRate');
    const bloodPressureEl = document.getElementById('bloodPressure');
    const oxygenSatEl = document.getElementById('oxygenSat');
    const respiratoryRateEl = document.getElementById('respiratoryRate');
    const temperatureEl = document.getElementById('temperature');
    
    if (heartRateEl) heartRateEl.textContent = vitals.heartRate;
    if (bloodPressureEl) bloodPressureEl.textContent = `${vitals.bloodPressure.systolic}/${vitals.bloodPressure.diastolic}`;
    if (oxygenSatEl) oxygenSatEl.textContent = vitals.oxygenSaturation;
    if (respiratoryRateEl) respiratoryRateEl.textContent = vitals.respiratoryRate;
    if (temperatureEl) temperatureEl.textContent = vitals.temperature;

    // Update vital statuses
    updateVitalStatus('heartRate', vitals.heartRate, { normal: [60, 100], warning: [50, 120] });
    updateVitalStatus('bloodPressure', vitals.bloodPressure.systolic, { normal: [90, 140], warning: [80, 160] });
    updateVitalStatus('oxygenSat', vitals.oxygenSaturation, { normal: [95, 100], warning: [90, 94] });
    updateVitalStatus('respiratoryRate', vitals.respiratoryRate, { normal: [12, 20], warning: [10, 25] });
    updateVitalStatus('temperature', vitals.temperature, { normal: [97, 100], warning: [96, 102] });
}

function updateVitalStatus(vitalType, value, ranges) {
    const statusElement = document.getElementById(vitalType + 'Status');
    if (!statusElement) return;
    
    let status = 'normal';
    let statusText = 'Normal';

    if (value < ranges.warning[0] || value > ranges.warning[1]) {
        status = 'critical';
        statusText = 'Critical';
    } else if (value < ranges.normal[0] || value > ranges.normal[1]) {
        status = 'warning';
        statusText = 'Warning';
    }

    statusElement.className = `vital-status ${status}`;
    statusElement.textContent = statusText;
}

function renderAlerts() {
    const alertsList = document.getElementById('alertsList');
    if (!alertsList) return;
    
    alertsList.innerHTML = '';

    if (alerts.length === 0) {
        alertsList.innerHTML = '<div class="alert-item"><div class="alert-content"><div class="alert-message">No active alerts</div></div></div>';
        return;
    }

    // Show only first 5 alerts in dashboard
    const displayAlerts = alerts.slice(0, 5);
    displayAlerts.forEach(alert => {
        const alertElement = createAlertElement(alert);
        alertsList.appendChild(alertElement);
    });

    // Update notification count
    const notificationCount = document.querySelector('.notification-count');
    if (notificationCount) {
        notificationCount.textContent = alerts.filter(a => !a.acknowledged).length;
    }
}

function createAlertElement(alert) {
    const alertElement = document.createElement('div');
    alertElement.className = 'alert-item';
    alertElement.dataset.alertId = alert.id;

    const timestamp = new Date(alert.timestamp).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    alertElement.innerHTML = `
        <div class="alert-icon ${alert.type}">
            <i class="fas ${getAlertIcon(alert.type)}"></i>
        </div>
        <div class="alert-content">
            <div class="alert-message">${alert.message}</div>
            <div class="alert-details">${alert.patientName} - ${alert.room} | ${timestamp}</div>
        </div>
        <button class="alert-dismiss" onclick="dismissAlert('${alert.id}')">
            <i class="fas fa-times"></i>
        </button>
    `;

    return alertElement;
}

function getAlertIcon(type) {
    switch (type) {
        case 'critical': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        case 'info': return 'fa-info-circle';
        default: return 'fa-bell';
    }
}

function dismissAlert(alertId) {
    alerts = alerts.filter(alert => alert.id !== alertId);
    renderAlerts();
    if (currentSection === 'alerts') {
        renderDetailedAlerts();
        updateAlertStats();
    }
}

function clearAllAlerts() {
    alerts = alerts.filter(alert => alert.acknowledged);
    renderAlerts();
    if (currentSection === 'alerts') {
        renderDetailedAlerts();
        updateAlertStats();
    }
}

function renderDetailedPatients() {
    const container = document.getElementById('patientsDetailedList');
    if (!container) return;
    
    container.innerHTML = '';

    filteredPatients.forEach(patient => {
        const card = createDetailedPatientCard(patient);
        container.appendChild(card);
    });
}

function createDetailedPatientCard(patient) {
    const card = document.createElement('div');
    card.className = 'detailed-patient-card';
    
    const admissionDate = new Date(patient.admissionDate).toLocaleDateString();
    
    card.innerHTML = `
        <div class="detailed-patient-header">
            <div class="patient-main-info">
                <h3>${patient.name}</h3>
                <div class="patient-status">
                    <div class="status-indicator ${patient.status}"></div>
                    <span>${patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}</span>
                </div>
            </div>
        </div>
        
        <div class="patient-meta">
            <div class="meta-item">
                <div class="meta-label">Age</div>
                <div class="meta-value">${patient.age}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Room</div>
                <div class="meta-value">${patient.room}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Doctor</div>
                <div class="meta-value">${patient.doctor}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Admitted</div>
                <div class="meta-value">${admissionDate}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Risk Score</div>
                <div class="meta-value">${patient.riskScore.toUpperCase()}</div>
            </div>
        </div>
        
        <div class="patient-vitals-grid">
            <div class="vital-item">
                <div class="vital-item-label">Heart Rate</div>
                <div class="vital-item-value">${patient.vitals.heartRate} BPM</div>
            </div>
            <div class="vital-item">
                <div class="vital-item-label">Blood Pressure</div>
                <div class="vital-item-value">${patient.vitals.bloodPressure.systolic}/${patient.vitals.bloodPressure.diastolic}</div>
            </div>
            <div class="vital-item">
                <div class="vital-item-label">Oxygen Sat</div>
                <div class="vital-item-value">${patient.vitals.oxygenSaturation}%</div>
            </div>
            <div class="vital-item">
                <div class="vital-item-label">Respiratory Rate</div>
                <div class="vital-item-value">${patient.vitals.respiratoryRate}</div>
            </div>
            <div class="vital-item">
                <div class="vital-item-label">Temperature</div>
                <div class="vital-item-value">${patient.vitals.temperature}°F</div>
            </div>
        </div>
        
        <div class="patient-condition">
            <div class="meta-label">Condition</div>
            <div class="meta-value">${patient.condition}</div>
        </div>
        
        <div class="patient-notes">
            <div class="meta-label">Notes</div>
            <div class="meta-value">${patient.notes}</div>
        </div>
        
        <div class="patient-medications">
            <div class="meta-label">Medications</div>
            <div class="meta-value">${patient.medications.join(', ')}</div>
        </div>
    `;
    
    return card;
}

function setupPatientFilters() {
    // Search filter
    const searchInput = document.getElementById('patientSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterPatients();
        });
    }
    
    // Status filter
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            filterPatients();
        });
    }
    
    // Risk filter
    const riskFilter = document.getElementById('riskFilter');
    if (riskFilter) {
        riskFilter.addEventListener('change', function() {
            filterPatients();
        });
    }
}

function filterPatients() {
    const searchTerm = document.getElementById('patientSearch')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('statusFilter')?.value || '';
    const riskFilter = document.getElementById('riskFilter')?.value || '';
    
    filteredPatients = appData.patients.filter(patient => {
        const matchesSearch = patient.name.toLowerCase().includes(searchTerm) ||
                            patient.room.toLowerCase().includes(searchTerm) ||
                            patient.condition.toLowerCase().includes(searchTerm);
        const matchesStatus = !statusFilter || patient.status === statusFilter;
        const matchesRisk = !riskFilter || patient.riskScore === riskFilter;
        
        return matchesSearch && matchesStatus && matchesRisk;
    });
    
    renderDetailedPatients();
}

function renderDetailedAlerts() {
    const container = document.getElementById('alertsDetailedList');
    if (!container) return;
    
    container.innerHTML = '';

    if (filteredAlerts.length === 0) {
        container.innerHTML = '<div class="alert-item"><div class="alert-content"><div class="alert-message">No alerts found</div></div></div>';
        return;
    }

    filteredAlerts.forEach(alert => {
        const alertElement = createDetailedAlertElement(alert);
        container.appendChild(alertElement);
    });
}

function createDetailedAlertElement(alert) {
    const alertElement = document.createElement('div');
    alertElement.className = `alert-item ${alert.acknowledged ? 'acknowledged' : ''}`;
    alertElement.dataset.alertId = alert.id;

    const timestamp = new Date(alert.timestamp).toLocaleString();

    alertElement.innerHTML = `
        <div class="alert-icon ${alert.type}">
            <i class="fas ${getAlertIcon(alert.type)}"></i>
        </div>
        <div class="alert-content">
            <div class="alert-message">${alert.message}</div>
            <div class="alert-details">
                ${alert.patientName} - ${alert.room} | ${timestamp}
                ${alert.acknowledged ? ' | <span class="status success">Acknowledged</span>' : ''}
            </div>
        </div>
        <div class="alert-actions">
            ${!alert.acknowledged ? `<button class="btn btn--sm btn--outline" onclick="acknowledgeAlert('${alert.id}')">Acknowledge</button>` : ''}
            <button class="alert-dismiss" onclick="dismissAlert('${alert.id}')">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    return alertElement;
}

function acknowledgeAlert(alertId) {
    const alertIndex = alerts.findIndex(a => a.id === alertId);
    if (alertIndex !== -1) {
        alerts[alertIndex].acknowledged = true;
        renderDetailedAlerts();
        updateAlertStats();
    }
}

function updateAlertStats() {
    const criticalCount = alerts.filter(a => a.type === 'critical' && !a.acknowledged).length;
    const warningCount = alerts.filter(a => a.type === 'warning' && !a.acknowledged).length;
    const infoCount = alerts.filter(a => a.type === 'info' && !a.acknowledged).length;
    
    const criticalEl = document.getElementById('criticalAlertCount');
    const warningEl = document.getElementById('warningAlertCount');
    const infoEl = document.getElementById('infoAlertCount');
    
    if (criticalEl) criticalEl.textContent = criticalCount;
    if (warningEl) warningEl.textContent = warningCount;
    if (infoEl) infoEl.textContent = infoCount;
}

function setupAlertFilters() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterAlerts();
        });
    });
    
    // Time filter
    const timeFilter = document.getElementById('alertTimeFilter');
    if (timeFilter) {
        timeFilter.addEventListener('change', function() {
            filterAlerts();
        });
    }
}

function filterAlerts() {
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    const timeFilter = document.getElementById('alertTimeFilter')?.value || '';
    
    filteredAlerts = alerts.filter(alert => {
        const matchesType = activeFilter === 'all' || alert.type === activeFilter;
        
        let matchesTime = true;
        if (timeFilter) {
            const alertTime = new Date(alert.timestamp);
            const now = new Date();
            const diffHours = (now - alertTime) / (1000 * 60 * 60);
            
            switch (timeFilter) {
                case '1h':
                    matchesTime = diffHours <= 1;
                    break;
                case '24h':
                    matchesTime = diffHours <= 24;
                    break;
                case '7d':
                    matchesTime = diffHours <= 168; // 7 * 24
                    break;
            }
        }
        
        return matchesType && matchesTime;
    });
    
    renderDetailedAlerts();
}

function initializeCharts() {
    // Dashboard charts
    const admissionsCtx = document.getElementById('admissionsChart')?.getContext('2d');
    if (admissionsCtx) {
        charts.admissions = new Chart(admissionsCtx, {
            type: 'bar',
            data: {
                labels: appData.analyticsData.admissionTrends.map(item => 
                    new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                ),
                datasets: [{
                    label: 'Admissions',
                    data: appData.analyticsData.admissionTrends.map(item => item.admissions),
                    backgroundColor: '#1FB8CD',
                    borderColor: '#1FB8CD',
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    const vitalTrendCtx = document.getElementById('vitalTrendChart')?.getContext('2d');
    if (vitalTrendCtx) {
        charts.vitalTrend = new Chart(vitalTrendCtx, {
            type: 'line',
            data: {
                labels: appData.analyticsData.vitalTrends.timestamps,
                datasets: [{
                    label: 'Average Heart Rate',
                    data: appData.analyticsData.vitalTrends.heartRate,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 70,
                        max: 95
                    }
                }
            }
        });
    }
}

function initializeAnalyticsCharts() {
    // Detailed Analytics Charts
    setTimeout(() => {
        initializeDetailedAdmissionsChart();
        initializeOccupancyChart();
        initializeAlertFrequencyChart();
        initializeStatusDistributionChart();
    }, 100);
}

function initializeDetailedAdmissionsChart() {
    const ctx = document.getElementById('detailedAdmissionsChart')?.getContext('2d');
    if (!ctx) return;
    
    charts.detailedAdmissions = new Chart(ctx, {
        type: 'line',
        data: {
            labels: appData.analyticsData.admissionTrends.map(item => 
                new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
            ),
            datasets: [{
                label: 'Admissions',
                data: appData.analyticsData.admissionTrends.map(item => item.admissions),
                backgroundColor: '#1FB8CD',
                borderColor: '#1FB8CD',
                borderWidth: 2,
                fill: false
            }, {
                label: 'Discharges',
                data: appData.analyticsData.admissionTrends.map(item => item.discharges),
                backgroundColor: '#FFC185',
                borderColor: '#FFC185',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function initializeOccupancyChart() {
    const ctx = document.getElementById('occupancyChart')?.getContext('2d');
    if (!ctx) return;
    
    charts.occupancy = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Occupancy Rate (%)',
                data: appData.analyticsData.occupancyRates,
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                borderColor: '#1FB8CD',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

function initializeAlertFrequencyChart() {
    const ctx = document.getElementById('alertFrequencyChart')?.getContext('2d');
    if (!ctx) return;
    
    charts.alertFrequency = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Critical', 'Warning', 'Info'],
            datasets: [{
                data: [
                    appData.analyticsData.alertFrequency.critical,
                    appData.analyticsData.alertFrequency.warning,
                    appData.analyticsData.alertFrequency.info
                ],
                backgroundColor: ['#B4413C', '#FFC185', '#5D878F']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function initializeStatusDistributionChart() {
    const ctx = document.getElementById('statusDistributionChart')?.getContext('2d');
    if (!ctx) return;
    
    const statusCounts = {
        critical: appData.patients.filter(p => p.status === 'critical').length,
        stable: appData.patients.filter(p => p.status === 'stable').length,
        improving: appData.patients.filter(p => p.status === 'improving').length
    };
    
    charts.statusDistribution = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Critical', 'Stable', 'Improving'],
            datasets: [{
                data: [statusCounts.critical, statusCounts.stable, statusCounts.improving],
                backgroundColor: ['#B4413C', '#1FB8CD', '#FFC185']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function loadSettings() {
    const settings = appData.userSettings;
    
    // Load notification settings
    document.getElementById('criticalAlertsToggle').checked = settings.notifications.criticalAlerts;
    document.getElementById('warningAlertsToggle').checked = settings.notifications.warningAlerts;
    document.getElementById('infoAlertsToggle').checked = settings.notifications.infoAlerts;
    document.getElementById('emailNotificationsToggle').checked = settings.notifications.emailNotifications;
    document.getElementById('soundAlertsToggle').checked = settings.notifications.soundAlerts;
    
    // Load dashboard settings
    document.getElementById('refreshIntervalSelect').value = settings.dashboard.refreshInterval;
    document.getElementById('compactModeToggle').checked = settings.dashboard.compactMode;
    document.getElementById('showPatientPhotosToggle').checked = settings.dashboard.showPatientPhotos;
    
    // Load alert thresholds
    document.getElementById('heartRateHighThreshold').value = settings.alertThresholds.heartRateHigh;
    document.getElementById('heartRateLowThreshold').value = settings.alertThresholds.heartRateLow;
    document.getElementById('bloodPressureHighThreshold').value = settings.alertThresholds.bloodPressureHigh;
    document.getElementById('bloodPressureLowThreshold').value = settings.alertThresholds.bloodPressureLow;
    document.getElementById('oxygenSatLowThreshold').value = settings.alertThresholds.oxygenSaturationLow;
    document.getElementById('temperatureHighThreshold').value = settings.alertThresholds.temperatureHigh;
}

function setupSettingsTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            
            // Update tab buttons
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update tab content
            document.querySelectorAll('.settings-tab').forEach(tab => tab.classList.remove('active'));
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });
}

function setupSettingsHandlers() {
    // Save settings button
    document.getElementById('saveSettings')?.addEventListener('click', saveSettings);
    
    // Reset settings button
    document.getElementById('resetSettings')?.addEventListener('click', resetSettings);
}

function saveSettings() {
    // In a real application, this would save to a backend
    alert('Settings saved successfully!');
}

function resetSettings() {
    if (confirm('Reset all settings to defaults?')) {
        // Reset to default values
        loadSettings();
        alert('Settings reset to defaults!');
    }
}

function setupEventListeners() {
    // Patient selector
    const patientSelector = document.getElementById('patientSelector');
    if (patientSelector) {
        patientSelector.addEventListener('change', function(e) {
            selectPatient(e.target.value);
        });
    }

    // Clear all alerts button
    const clearAllAlertsBtn = document.getElementById('clearAllAlerts');
    if (clearAllAlertsBtn) {
        clearAllAlertsBtn.addEventListener('click', clearAllAlerts);
    }

    // Other action buttons
    document.getElementById('dismissAllAlerts')?.addEventListener('click', function() {
        alerts = alerts.filter(a => a.acknowledged);
        renderDetailedAlerts();
        updateAlertStats();
    });
}

function startRealTimeUpdates() {
    // Update vital signs every 15 seconds
    updateInterval = setInterval(() => {
        simulateVitalUpdates();
        updateLastUpdated();
        
        // Generate random alert occasionally
        if (Math.random() < 0.1 && alerts.length < 10) {
            generateRandomAlert();
        }
    }, 15000);
}

function simulateVitalUpdates() {
    // Simulate small variations in vital signs
    appData.patients.forEach(patient => {
        const vitals = patient.vitals;
        
        // Small random variations
        vitals.heartRate += Math.floor(Math.random() * 6) - 3; // ±3 BPM
        vitals.bloodPressure.systolic += Math.floor(Math.random() * 6) - 3;
        vitals.bloodPressure.diastolic += Math.floor(Math.random() * 4) - 2;
        vitals.oxygenSaturation += Math.floor(Math.random() * 3) - 1; // ±1%
        vitals.respiratoryRate += Math.floor(Math.random() * 3) - 1;
        vitals.temperature += (Math.random() * 0.4) - 0.2; // ±0.2°F
        
        // Keep values within realistic ranges
        vitals.heartRate = Math.max(40, Math.min(180, vitals.heartRate));
        vitals.bloodPressure.systolic = Math.max(70, Math.min(200, vitals.bloodPressure.systolic));
        vitals.bloodPressure.diastolic = Math.max(40, Math.min(120, vitals.bloodPressure.diastolic));
        vitals.oxygenSaturation = Math.max(85, Math.min(100, vitals.oxygenSaturation));
        vitals.respiratoryRate = Math.max(8, Math.min(40, vitals.respiratoryRate));
        vitals.temperature = Math.max(95, Math.min(106, parseFloat(vitals.temperature.toFixed(1))));
    });

    // Update current patient's vital signs display
    updateVitalSigns(currentPatientId);
    
    // Re-render patient cards with updated vitals
    renderPatients();
    
    if (currentSection === 'patients') {
        renderDetailedPatients();
    }
}

function generateRandomAlert() {
    const alertTypes = ['critical', 'warning', 'info'];
    const messages = {
        critical: [
            'Heart rate elevated above 120 BPM',
            'Blood pressure dangerously low',
            'Oxygen saturation critically low',
            'Temperature spike detected'
        ],
        warning: [
            'Vital signs trending upward',
            'Medication due in 30 minutes',
            'Patient movement detected',
            'Blood pressure slightly elevated'
        ],
        info: [
            'Medication administered successfully',
            'Patient vital signs stable',
            'Routine check completed',
            'Lab results received'
        ]
    };

    const randomPatient = appData.patients[Math.floor(Math.random() * appData.patients.length)];
    const randomType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
    const randomMessage = messages[randomType][Math.floor(Math.random() * messages[randomType].length)];

    const newAlert = {
        id: 'A' + Date.now(),
        type: randomType,
        message: randomMessage,
        patientId: randomPatient.id,
        patientName: randomPatient.name,
        timestamp: new Date().toISOString(),
        room: randomPatient.room,
        acknowledged: false,
        priority: randomType === 'critical' ? 'high' : (randomType === 'warning' ? 'medium' : 'low')
    };

    alerts.unshift(newAlert);
    renderAlerts();
    
    if (currentSection === 'alerts') {
        renderDetailedAlerts();
        updateAlertStats();
    }
}

function updateLastUpdated() {
    const now = new Date();
    const lastUpdatedEl = document.getElementById('lastUpdated');
    if (lastUpdatedEl) {
        lastUpdatedEl.textContent = `Last updated: ${now.toLocaleTimeString()}`;
    }
}

function updateClock() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    };
    
    const currentTimeEl = document.getElementById('currentTime');
    if (currentTimeEl) {
        currentTimeEl.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Cleanup function
window.addEventListener('beforeunload', function() {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
});