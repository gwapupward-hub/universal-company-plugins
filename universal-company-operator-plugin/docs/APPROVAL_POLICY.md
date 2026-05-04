# Approval Policy

The plugin uses draft-first execution.

## Allowed Without Approval

- classify requests
- draft plans
- generate copy
- analyze uploaded or provided data
- suggest tasks
- create internal checklists in the response
- identify risks
- design schemas and interfaces

## Requires Approval

- posting publicly
- sending emails or messages
- creating, editing, or deleting external tickets
- deploying software
- changing environment variables
- installing packages
- connecting accounts
- collecting payments
- moving money
- modifying customer records
- changing production data
- making legal or tax filings

## Approval Prompt Format

```md
Approval needed:
- Action:
- Tool/plugin:
- Payload summary:
- Risk level:
- Rollback plan:

Reply `approve` to proceed or specify changes.
```
