# Plugin Interface Spec

This spec is universal and vendor-neutral. It describes how business operators can connect to external tools without hardcoding any company ecosystem.

## TypeScript Contract

```ts
type OperatorCommand =
  | "business"
  | "ceo"
  | "product"
  | "growth"
  | "sales"
  | "ops"
  | "finance"
  | "success"
  | "data"
  | "design"
  | "legal"
  | "community"
  | "launch"
  | "revenue"
  | "audit"
  | "roadmap";

type PluginCapability =
  | "read"
  | "write"
  | "analyze"
  | "publish"
  | "deploy"
  | "notify"
  | "collect_payment"
  | "create_task"
  | "webhook"
  | "search"
  | "crm"
  | "analytics";

interface CompanyOSPlugin {
  id: string;
  name: string;
  category: string;
  capabilities: PluginCapability[];
  auth?: {
    type: "none" | "api_key" | "oauth" | "bearer" | "webhook_secret";
    envVars: string[];
  };
  actions: PluginAction[];
}

interface PluginAction {
  name: string;
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  endpoint: string;
  requiredInputs: string[];
  output: string;
  usedByCommands: OperatorCommand[];
  requiresApproval: boolean;
}
```

## Approval Rules

The OS may run read/analyze/search actions without extra approval.

The OS must request approval for:

- write
- publish
- deploy
- notify external parties
- collect_payment
- create_task in external systems
- webhook creation
- environment changes
- production mutations

## Vendor-Neutral Categories

- `project_management`
- `code_repository`
- `deployment`
- `analytics`
- `crm`
- `email`
- `calendar`
- `payments`
- `community`
- `social_media`
- `knowledge_base`
- `support`
- `automation`
- `webhooks`
