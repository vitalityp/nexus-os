const app = {
  tasks: [],
  leads: [],
  vault: [],

  init() {
    console.log("NEXUS OS Initialized 🚀");

    this.loadData();
    this.renderTasks();
    this.bindUI();
  },

  bindUI() {
    console.log("UI Connected");
  },

  addTask(taskName) {
    this.tasks.push({
      id: Date.now(),
      name: taskName,
      status: "active"
    });

    this.saveData();
    this.renderTasks();
  },

  renderTasks() {
    let existing = document.getElementById("task-system");

    if (existing) {
      existing.remove();
    }

    const container = document.createElement("section");

    container.id = "task-system";

    container.className =
      "glass rounded-2xl p-6 mt-6";

    let html = `
      <h3 class="text-xl font-semibold mb-4">
        Active Tasks
      </h3>
    `;

    if (this.tasks.length === 0) {
      html += `
        <p class="text-slate-400">
          No active tasks.
        </p>
      `;
    }

    this.tasks.forEach((task, index) => {
      html += `
        <div class="p-3 rounded-xl mb-2 bg-slate-800">
          ${index + 1}. ${task.name}
        </div>
      `;
    });

    container.innerHTML = html;

    document
      .querySelector("main")
      .appendChild(container);
  },

  saveData() {
    localStorage.setItem(
      "nexus_tasks",
      JSON.stringify(this.tasks)
    );
  },

  loadData() {
    const savedTasks =
      localStorage.getItem("nexus_tasks");

    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    } else {
      this.tasks = [
        {
          id: 1,
          name: "Initialize Operator Workflow",
          status: "active"
        },
        {
          id: 2,
          name: "Prepare Lead System",
          status: "active"
        },
        {
          id: 3,
          name: "Deploy AI Operations",
          status: "active"
        }
      ];

      this.saveData();
    }
  }
};

app.init();
