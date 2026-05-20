const app = {

  currentSection: "overview",

  tasks: [],
  leads: [],
  vault: [],

  init() {
    console.log("NEXUS OS Initialized 🚀");

    this.loadData();
    this.showSection("overview");
  },

  saveData() {

    localStorage.setItem(
      "nexus_tasks",
      JSON.stringify(this.tasks)
    );

    localStorage.setItem(
      "nexus_leads",
      JSON.stringify(this.leads)
    );

    localStorage.setItem(
      "nexus_vault",
      JSON.stringify(this.vault)
    );
  },

  loadData() {

    const savedTasks =
      localStorage.getItem("nexus_tasks");

    const savedLeads =
      localStorage.getItem("nexus_leads");

    const savedVault =
      localStorage.getItem("nexus_vault");

    this.tasks = savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            name: "Initialize Operator Workflow"
          },
          {
            id: 2,
            name: "Prepare Lead System"
          }
        ];

    this.leads = savedLeads
      ? JSON.parse(savedLeads)
      : [
          {
            id: 1,
            name: "First Potential Client"
          }
        ];

    this.vault = savedVault
      ? JSON.parse(savedVault)
      : [
          {
            id: 1,
            text: "AI Workflow Concepts"
          }
        ];
  },

  showSection(section) {

    this.currentSection = section;

    const workspace =
      document.getElementById("workspace");

    if (!workspace) return;

    if (section === "overview") {
      workspace.innerHTML = `
        <h3 class="text-2xl font-bold mb-4">
          Welcome to NEXUS OS 🚀
        </h3>

        <p class="text-slate-400 leading-relaxed">
          Your modular AI operator infrastructure is active.
          Manage workflows, tasks, leads, and operational systems.
        </p>
      `;
    }

    if (section === "tasks") {
      this.renderTasks();
    }

    if (section === "leads") {
      this.renderLeads();
    }

    if (section === "vault") {
      this.renderVault();
    }

    if (section === "ai") {
      workspace.innerHTML = `
        <h3 class="text-2xl font-bold mb-4">
          AI Actions ⚡
        </h3>

        <div class="grid md:grid-cols-2 gap-4">

          <div class="glass rounded-2xl p-4">
            Generate Proposal
          </div>

          <div class="glass rounded-2xl p-4">
            AI Reply Assistant
          </div>

          <div class="glass rounded-2xl p-4">
            Pricing Generator
          </div>

          <div class="glass rounded-2xl p-4">
            Workflow Suggestions
          </div>

        </div>
      `;
    }
  },

  renderTasks() {

    const workspace =
      document.getElementById("workspace");

    let html = `
      <div class="flex flex-col md:flex-row gap-3 mb-6">

        <input
          id="task-input"
          type="text"
          placeholder="Enter task..."
          class="flex-1 p-3 rounded-xl bg-slate-900 border border-white/10 outline-none"
        />

        <button
          onclick="app.addTask()"
          class="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-semibold text-black">

          Add Task

        </button>

      </div>

      <div class="space-y-3">
    `;

    this.tasks.forEach((task, index) => {

      html += `
        <div class="glass rounded-2xl p-4">
          ${index + 1}. ${task.name}
        </div>
      `;
    });

    html += `</div>`;

    workspace.innerHTML = html;
  },

  addTask() {

    const input =
      document.getElementById("task-input");

    if (!input) return;

    const value = input.value.trim();

    if (!value) return;

    this.tasks.push({
      id: Date.now(),
      name: value
    });

    this.saveData();
    this.renderTasks();
  },

  renderLeads() {

    const workspace =
      document.getElementById("workspace");

    let html = `
      <div class="flex flex-col md:flex-row gap-3 mb-6">

        <input
          id="lead-input"
          type="text"
          placeholder="Enter lead..."
          class="flex-1 p-3 rounded-xl bg-slate-900 border border-white/10 outline-none"
        />

        <button
          onclick="app.addLead()"
          class="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-semibold text-black">

          Add Lead

        </button>

      </div>

      <div class="space-y-3">
    `;

    this.leads.forEach((lead, index) => {

      html += `
        <div class="glass rounded-2xl p-4">
          ${index + 1}. ${lead.name}
        </div>
      `;
    });

    html += `</div>`;

    workspace.innerHTML = html;
  },

  addLead() {

    const input =
      document.getElementById("lead-input");

    if (!input) return;

    const value = input.value.trim();

    if (!value) return;

    this.leads.push({
      id: Date.now(),
      name: value
    });

    this.saveData();
    this.renderLeads();
  },

  renderVault() {

    const workspace =
      document.getElementById("workspace");

    let html = `
      <div class="flex flex-col md:flex-row gap-3 mb-6">

        <input
          id="vault-input"
          type="text"
          placeholder="Enter vault item..."
          class="flex-1 p-3 rounded-xl bg-slate-900 border border-white/10 outline-none"
        />

        <button
          onclick="app.addVaultItem()"
          class="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl font-semibold text-black">

          Add Item

        </button>

      </div>

      <div class="space-y-3">
    `;

    this.vault.forEach((item, index) => {

      html += `
        <div class="glass rounded-2xl p-4">
          ${index + 1}. ${item.text}
        </div>
      `;
    });

    html += `</div>`;

    workspace.innerHTML = html;
  },

  addVaultItem() {

    const input =
      document.getElementById("vault-input");

    if (!input) return;

    const value = input.value.trim();

    if (!value) return;

    this.vault.push({
      id: Date.now(),
      text: value
    });

    this.saveData();
    this.renderVault();
  }

};

app.init();
window.app = app;
