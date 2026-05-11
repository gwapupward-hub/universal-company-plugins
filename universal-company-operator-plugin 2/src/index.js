#!/usr/bin/env node

const OPERATOR_ROLES = [
  "CEO / Strategy",
  "Product / Engineering",
  "Growth / Marketing",
  "Sales / Partnerships",
  "Operations / COO",
  "Finance",
  "Customer Success / Support",
  "Design / UX",
  "Legal / Compliance",
  "Data / Analytics",
  "Community"
];

function normalizePriority(priority = "medium") {
  return ["low", "medium", "high", "critical"].includes(priority) ? priority : "medium";
}

function inferRole(task = "") {
  const t = task.toLowerCase();
  if (/(revenue|pricing|budget|cash|finance|unit economics)/.test(t)) return "Finance";
  if (/(code|build|deploy|api|repo|bug|product|feature|engineering)/.test(t)) return "Product / Engineering";
  if (/(marketing|content|twitter|x |growth|campaign|brand|seo)/.test(t)) return "Growth / Marketing";
  if (/(sales|partner|integration|deal|sponsor|client)/.test(t)) return "Sales / Partnerships";
  if (/(support|customer|user feedback|ticket)/.test(t)) return "Customer Success / Support";
  if (/(legal|compliance|terms|privacy|risk|contract)/.test(t)) return "Legal / Compliance";
  if (/(design|ux|ui|brand kit|logo|wireframe)/.test(t)) return "Design / UX";
  if (/(analytics|data|metric|kpi|dashboard)/.test(t)) return "Data / Analytics";
  if (/(community|discord|telegram|moderator)/.test(t)) return "Community";
  if (/(process|ops|workflow|hiring|system|sop)/.test(t)) return "Operations / COO";
  return "CEO / Strategy";
}

function runCompanyAudit(input) {
  const goals = input.goals || [];
  return {
    command: "run_company_audit",
    projectName: input.projectName,
    stage: input.stage || "early",
    summary: `Operator audit for ${input.projectName}: ${input.projectDescription}`,
    departmentsNeeded: OPERATOR_ROLES.slice(0, 7),
    immediatePriorities: [
      "Clarify the core offer and target user.",
      "Define the next shippable milestone.",
      "Assign one owner per major function.",
      "Track weekly execution with measurable KPIs."
    ],
    goals,
    risks: [
      "Too many parallel priorities.",
      "No clear execution owner.",
      "Weak feedback loop from users/customers."
    ],
    output: "Use this audit as the company operating snapshot before creating sprint plans."
  };
}

function routeOperatorTask(input) {
  const role = inferRole(input.task);
  const priority = normalizePriority(input.priority);
  return {
    command: "route_operator_task",
    assignedRole: role,
    priority,
    task: input.task,
    executionPlan: [
      "Define the intended outcome.",
      "List required inputs and blockers.",
      "Break the work into 3-5 concrete actions.",
      "Ship the smallest useful version first.",
      "Report result, risk, and next action."
    ],
    successCriteria: [
      "Clear deliverable produced.",
      "Owner and deadline assigned.",
      "Next measurable step identified."
    ]
  };
}

function generateSprintPlan(input) {
  const constraints = input.constraints || [];
  return {
    command: "generate_sprint_plan",
    objective: input.objective,
    timeframe: input.timeframe || "7 days",
    teamSize: input.teamSize || 1,
    sprintStructure: {
      day1: "Scope objective, define success metrics, remove ambiguity.",
      day2_3: "Build or execute the highest-leverage work package.",
      day4_5: "Test, refine, document, and prepare launch/review.",
      day6: "Ship, publish, or hand off deliverables.",
      day7: "Review KPIs, risks, blockers, and next sprint."
    },
    owners: ["Strategy Owner", "Execution Owner", "Review Owner"],
    constraints,
    deliverables: ["Sprint brief", "Task board", "Risk log", "Completion report"]
  };
}

function buildDepartmentMap(input) {
  return {
    command: "build_department_map",
    companyType: input.companyType,
    currentStage: input.currentStage,
    recommendedDepartments: OPERATOR_ROLES.map((role, index) => ({
      role,
      priority: index < 5 ? "core" : "supporting"
    })),
    bottleneck: input.mainBottleneck || "Not specified",
    recommendation: "Start with CEO/Strategy, Product/Engineering, Growth, Sales/Partnerships, and Operations. Add Finance, Support, Legal, Data, Design, and Community as volume increases."
  };
}

export function execute(command, input = {}) {
  switch (command) {
    case "run_company_audit": return runCompanyAudit(input);
    case "route_operator_task": return routeOperatorTask(input);
    case "generate_sprint_plan": return generateSprintPlan(input);
    case "build_department_map": return buildDepartmentMap(input);
    default: throw new Error(`Unknown command: ${command}`);
  }
}

if (process.argv.includes("--self-test")) {
  console.log(JSON.stringify(execute("route_operator_task", { task: "Create a marketing plan", priority: "high" }), null, 2));
}
