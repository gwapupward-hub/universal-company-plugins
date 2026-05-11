# Plugin Interface Spec

## Runtime
- Type: Node.js
- Minimum Node: 18
- Entry: `src/index.js`

## Security Defaults
- Network: disabled
- Filesystem: disabled
- Secrets: none

## Command Contract
Every command accepts a JSON object and returns a JSON object.

## Commands

### run_company_audit
Required:
- `projectName: string`
- `projectDescription: string`

Optional:
- `stage: string`
- `goals: string[]`

### route_operator_task
Required:
- `task: string`

Optional:
- `companyContext: string`
- `priority: low | medium | high | critical`

### generate_sprint_plan
Required:
- `objective: string`

Optional:
- `timeframe: string`
- `teamSize: number`
- `constraints: string[]`

### build_department_map
Required:
- `companyType: string`
- `currentStage: string`

Optional:
- `revenueModel: string`
- `mainBottleneck: string`
