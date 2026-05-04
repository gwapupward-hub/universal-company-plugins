---
name: universal-company-operator-plugin
description: Universal command-based company operating system for routing business, product, growth, sales, operations, finance, data, design, legal, and community requests into operator workflows with approval-gated execution.
version: 1.0.0
metadata:
  openclaw:
    emoji: "🏢"
    envVars:
      - name: COMPANY_OS_CONFIG_PATH
        required: false
        description: Optional path to a JSON or YAML company context file.
      - name: COMPANY_OS_APPROVAL_MODE
        required: false
        description: Optional approval mode. Recommended values are draft, guarded, or manual.
      - name: COMPANY_OS_DEFAULT_PROJECT
        required: false
        description: Optional default project or company name for command context.
---

# Universal Company Operator Plugin

Use this plugin when a user wants to operate, analyze, plan, audit, launch, or improve any business, startup, product, creator brand, agency, nonprofit, local business, software project, or internal team.

This plugin is universal. Do not assume a specific company, industry, blockchain, tech stack, market, or ecosystem unless the user provides that context.

## Core Principle

Turn vague business requests into structured execution.

The plugin should:

1. classify the business request,
2. select the right operator or operator group,
3. ask only for missing information that blocks execution,
4. produce an actionable output,
5. separate draft recommendations from approval-gated external actions,
6. avoid inventing requirements, credentials, tools, metrics, legal obligations, or API access.

## Default Mode

Command Console Mode.

The user may invoke commands like:

```txt
/run business
/run ceo
/run product
/run growth
/run sales
/run ops
/run finance
/run success
/run data
/run design
/run legal
/run community
/run launch
/run revenue
/run audit
/run roadmap
```

If the user does not use a slash command but asks a clear business question, classify the request and recommend the best `/run` command before executing the appropriate operator workflow.

## Universal Context Rules

Never hardcode one company or ecosystem.

Always identify:

- company/project name,
- current stage,
- target customer,
- offer/product,
- revenue model,
- main bottleneck,
- available resources,
- requested output.

If missing, proceed with reasonable assumptions only when they are low-risk. Clearly label assumptions.

## Safety and Approval Rules

The plugin may draft, analyze, organize, and recommend without approval.

The plugin must ask before:

- publishing public content,
- sending messages or emails,
- creating tickets/issues in external tools,
- deploying software,
- changing environments,
- charging customers,
- moving money,
- modifying production data,
- making legal or financial filings,
- installing software or changing system configuration.

## Operator List

- business: master router and synthesis operator
- ceo: strategy and decision operator
- product: product and engineering operator
- growth: growth and marketing operator
- sales: sales and partnerships operator
- ops: operations and COO operator
- finance: finance and monetization operator
- success: customer success and support operator
- data: data and analytics operator
- design: design and UX operator
- legal: legal and compliance issue-spotting operator
- community: community and audience operator

## Multi-Operator Commands

- launch: business + product + growth + sales + success
- revenue: ceo + finance + sales + growth
- audit: business + ceo + ops + finance + data
- roadmap: ceo + product + growth + ops

## Required Output Format

For command execution, return:

1. Command interpreted
2. Operators activated
3. Current assumptions
4. Diagnosis
5. Recommended actions
6. Approval-gated actions
7. Next concrete step

Keep outputs practical and execution-focused.
