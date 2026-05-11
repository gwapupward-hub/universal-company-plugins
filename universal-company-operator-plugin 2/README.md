# Universal Company Operator System Plugin

Execution plugin for the Universal Company Operator System.

## Purpose

This plugin turns the company-operator skill into an action layer. The skill provides strategy and operating intelligence; this plugin exposes structured commands that can be called by an agent runtime.

## Commands

### run_company_audit
Analyzes a project/company and returns departments needed, priorities, risks, and operating snapshot.

### route_operator_task
Routes a task to the correct operator role and returns an execution plan.

### generate_sprint_plan
Creates a sprint plan with timeline, owners, constraints, and deliverables.

### build_department_map
Maps company departments/roles needed based on current stage and bottleneck.

## Local test

```bash
npm install
npm test
```

## OpenClaw requirements included

- `OpenClaw.plugin.json`
- `package.json` with `openclaw.extensions`
- Node runtime entry: `src/index.js`


## Compatibility metadata

This package declares `openclaw.compat.pluginApi` and `openclaw.build.openclawVersion` in `package.json` so ClawHub can validate plugin API compatibility before publishing.
