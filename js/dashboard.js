/* ==========================================================================
   Nuova Vita — TP4: JavaScript y manipulación del DOM
   Funcionalidades del panel principal
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const activePatientsCount = document.getElementById("active-patients-count");

  const pendingReportsCount = document.getElementById("pending-reports-count");

  const todayAppointmentsCount = document.getElementById(
    "today-appointments-count",
  );

  const alertsCount = document.getElementById("alerts-count");

  const activityList = document.getElementById("recent-activity-list");

  const emptyActivityMessage = document.getElementById(
    "empty-activity-message",
  );

  const patientSearchInput = document.getElementById("patient-search");

  const patientStatusFilter = document.getElementById("patient-status-filter");

  const patientTableBody = document.getElementById("patient-table-body");

  const patientResultsCount = document.getElementById("patient-results-count");

  const emptyPatientsMessage = document.getElementById(
    "empty-patients-message",
  );

  const patients = [
    {
      id: 1,
      name: "Elena García",
      status: "active",
    },
    {
      id: 2,
      name: "Carlos Fernández",
      status: "active",
    },
    {
      id: 3,
      name: "Marta López",
      status: "active",
    },
    {
      id: 4,
      name: "Roberto Díaz",
      status: "inactive",
    },
    {
      id: 5,
      name: "Teresa Gómez",
      status: "active",
    },
  ];

  const reports = [
    {
      id: 1,
      status: "completed",
    },
    {
      id: 2,
      status: "pending",
    },
    {
      id: 3,
      status: "pending",
    },
    {
      id: 4,
      status: "completed",
    },
  ];

  const appointments = [
    {
      id: 1,
      date: "today",
    },
    {
      id: 2,
      date: "today",
    },
    {
      id: 3,
      date: "tomorrow",
    },
  ];

  const alerts = [
    {
      id: 1,
      resolved: false,
    },
    {
      id: 2,
      resolved: true,
    },
    {
      id: 3,
      resolved: false,
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "Informe médico",
      description: "Se registró un nuevo control clínico.",
      person: "Elena García",
      time: "Hace 15 minutos",
    },
    {
      id: 2,
      type: "Actividad diaria",
      description: "Se actualizó el registro de medicación.",
      person: "Carlos Fernández",
      time: "Hace 45 minutos",
    },
    {
      id: 3,
      type: "Turno",
      description: "Se confirmó una consulta de kinesiología.",
      person: "Marta López",
      time: "Hace 2 horas",
    },
  ];

  const renderStatistics = () => {
    const activePatients = patients.filter(
      (patient) => patient.status === "active",
    ).length;

    const pendingReports = reports.filter(
      (report) => report.status === "pending",
    ).length;

    const todayAppointments = appointments.filter(
      (appointment) => appointment.date === "today",
    ).length;

    const unresolvedAlerts = alerts.filter((alert) => !alert.resolved).length;

    activePatientsCount.textContent = activePatients;
    pendingReportsCount.textContent = pendingReports;
    todayAppointmentsCount.textContent = todayAppointments;
    alertsCount.textContent = unresolvedAlerts;
  };

  const renderRecentActivities = () => {
    activityList.replaceChildren();

    const hasActivities = recentActivities.length > 0;

    activityList.hidden = !hasActivities;
    emptyActivityMessage.hidden = hasActivities;

    recentActivities.forEach((activity) => {
      const listItem = document.createElement("li");
      const activityContent = document.createElement("div");
      const activityTitle = document.createElement("h3");
      const activityDescription = document.createElement("p");
      const activityTime = document.createElement("small");

      listItem.className =
        "list-group-item d-flex flex-column flex-md-row " +
        "justify-content-between gap-2 px-0 py-3";

      activityContent.className = "activity-content";

      activityTitle.className = "h6 mb-1";
      activityTitle.textContent = `${activity.type} — ${activity.person}`;

      activityDescription.className = "mb-0 text-muted";
      activityDescription.textContent = activity.description;

      activityTime.className = "activity-time text-muted text-nowrap";

      activityTime.textContent = activity.time;

      activityContent.append(activityTitle, activityDescription);

      listItem.append(activityContent, activityTime);

      activityList.append(listItem);
    });
  };

  const renderPatients = (patientsToRender) => {
    patientTableBody.replaceChildren();

    const hasPatients = patientsToRender.length > 0;
    const patientTable = patientTableBody.closest("table");

    patientTable.hidden = !hasPatients;
    emptyPatientsMessage.hidden = hasPatients;

    const resultText =
      patientsToRender.length === 1
        ? "1 paciente encontrado"
        : `${patientsToRender.length} pacientes encontrados`;

    patientResultsCount.textContent = resultText;

    patientsToRender.forEach((patient) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const statusCell = document.createElement("td");
      const statusBadge = document.createElement("span");

      nameCell.textContent = patient.name;

      const isActive = patient.status === "active";

      statusBadge.className = isActive
        ? "badge text-bg-success"
        : "badge text-bg-secondary";

      statusBadge.textContent = isActive ? "Activo" : "Inactivo";

      statusCell.append(statusBadge);
      row.append(nameCell, statusCell);
      patientTableBody.append(row);
    });
  };

  const normalizeText = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const applyPatientFilters = () => {
    const searchTerm = normalizeText(patientSearchInput.value.trim());

    const selectedStatus = patientStatusFilter.value;

    const filteredPatients = patients.filter((patient) => {
      const normalizedPatientName = normalizeText(patient.name);

      const matchesName = normalizedPatientName.includes(searchTerm);

      const matchesStatus =
        selectedStatus === "all" || patient.status === selectedStatus;

      return matchesName && matchesStatus;
    });

    renderPatients(filteredPatients);
  };

  patientSearchInput.addEventListener("input", applyPatientFilters);

  patientStatusFilter.addEventListener("change", applyPatientFilters);

  renderStatistics();
  renderRecentActivities();
  applyPatientFilters();
});
