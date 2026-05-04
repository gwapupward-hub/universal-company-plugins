# Plugin Interface Specification

## Plugin Object

```ts
interface CompanyOSPlugin {
  id: string;
  name: string;
  category: string;
  capabilities: Array<
    | "read"
    | "write"
    | "analyze"
    | "publish"
    | "deploy"
    | "notify"
    | "collect_payment"
    | "onchain_lookup"
    | "create_task"
  >;
  auth?: {
    type: "api_key" | "oauth" | "webhook_secret" | "bearer" | "none";
    envVars?: string[];
  };
  actions: PluginAction[];
}

interface PluginAction {
  name: string;
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  endpoint: string;
  requiredInputs: string[];
  output: string;
  usedByCommands: string[];
  requiresApproval: boolean;
}
```

## Approval Policy

Approval required for:
- write
- publish
- deploy
- notify external users
- collect payment
- create external tasks

Approval not required for:
- read
- analyze
- local planning
