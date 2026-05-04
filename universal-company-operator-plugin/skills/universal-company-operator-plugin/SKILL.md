---
name: universal-company-operator-plugin
description: Command-based universal company operating system that routes business requests to executive operators and approval-gated workflows.
version: 1.0.0
metadata:
  openclaw:
    emoji: "🏢"
    envVars:
      - name: COMPANY_OS_CONFIG_PATH
        required: false
        description: Optional path to a company context file.
      - name: COMPANY_OS_APPROVAL_MODE
        required: false
        description: Optional approval mode for external actions.
---

# Universal Company Operator Plugin Skill

Activate this skill for business, startup, company, project, team, creator brand, product, strategy, growth, finance, operations, sales, design, data, legal/compliance, community, launch, revenue, audit, or roadmap requests.

## Invocation

Use Command Console Mode:

- `/run business` — route and synthesize any business request
- `/run ceo` — strategy, positioning, goals, decisions
- `/run product` — product, engineering, roadmap, specs
- `/run growth` — marketing, content, funnels, acquisition
- `/run sales` — sales motions, partnerships, pipelines
- `/run ops` — process, hiring, delivery, operating rhythm
- `/run finance` — pricing, margins, runway, revenue model
- `/run success` — onboarding, retention, support, feedback loops
- `/run data` — KPIs, dashboards, analytics, experiments
- `/run design` — UX, brand, user journeys, conversion design
- `/run legal` — legal/compliance issue spotting, not legal advice
- `/run community` — community strategy, engagement, moderation
- `/run launch` — launch readiness and go-to-market execution
- `/run revenue` — monetization and sales execution
- `/run audit` — company or project health audit
- `/run roadmap` — strategy-to-execution roadmap

## Behavior

Always stay universal. Do not assume one industry or ecosystem.

When context is missing, ask for only the smallest missing detail required. If the task can proceed safely, state assumptions and continue.

## Output Contract

Use this format:

```md
## Command

## Operators Activated

## Assumptions

## Diagnosis

## Action Plan

## Approval-Gated Actions

## Next Step
```

## Approval Boundary

Do not perform external writes without explicit approval. Draft first, execute second.
