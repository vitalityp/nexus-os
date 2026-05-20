const workspace = document.getElementById("workspace");

const app = {

  tasks: [
    "Initialize Operator Workflow",
    "Prepare Lead System"
  ],

  leads: [
    "First Potential Client"
  ],

  vault: [
    "AI Workflow Concepts"
  ],

  showSection(section) {

    if (section === "overview") {

      workspace.innerHTML = `
        <h3 class="text-2xl font-bold mb-4">
          Welcome to NEXUS OS 🚀
        </h3>

        <p class="text-slate-400 leading-relaxed">
          Your modular AI operator infrastructure is active.
        </p>
      `;
    }

    if (section === "tasks") {

      let html = `
        <h3 class="text-2xl font-bold mb-4">
          Tasks ✅
        </h3>
      `;

      this.tasks.forEach((task) => {

        html += `
          <div class="glass rounded-2xl p-4 mb-3">
            ${task}
          </div>
        `;
      });

      workspace.innerHTML = html;
    }

    if (section === "leads") {

      let html = `
        <h3 class="text-2xl font-bold mb-4">
          Leads 🎯
        </h3>
      `;

      this.leads.forEach((lead) => {

        html += `
          <div class="glass rounded-2xl p-4 mb-3">
            ${lead}
          </div>
        `;
      });

      workspace.innerHTML = html;
    }

    if (section === "vault") {

      let html = `
        <h3 class="text-2xl font-bold mb-4">
          Vault 🧠
        </h3>
      `;

      this.vault.forEach((item) => {

        html += `
          <div class="glass rounded-2xl p-4 mb-3">
            ${item}
          </div>
        `;
      });

      workspace.innerHTML = html;
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
  }
};

window.app = app;

app.showSection("overview");
