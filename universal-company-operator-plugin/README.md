# Universal Company Operator Plugin

A universal command-based company operating system plugin for OpenClaw/ClawHub-style agent workflows and Cursor.

It turns business requests into structured operator workflows across strategy, product, growth, sales, operations, finance, success, data, design, legal/compliance issue-spotting, and community.

## What It Is

This is a universal operating layer, not a company-specific skill.

It can be used for:

- startups
- SaaS companies
- agencies
- creator brands
- nonprofits
- local businesses
- e-commerce stores
- Web3 projects
- internal teams
- product launches
- revenue systems

## Plugin Structure

```
universal-company-operator-plugin/
├── .cursor-plugin/
│   └── plugin.json           # Cursor plugin manifest
├── commands/                  # Individual operator commands
│   ├── run.md                # Master /run command router
│   ├── run-business.md       # General business routing
│   ├── run-ceo.md            # Strategy and prioritization
│   ├── run-product.md        # Product and engineering
│   ├── run-growth.md         # Marketing and acquisition
│   ├── run-sales.md          # Sales and partnerships
│   ├── run-ops.md            # Operations and systems
│   ├── run-finance.md        # Finance and pricing
│   ├── run-success.md        # Customer success
│   ├── run-data.md           # Analytics and reporting
│   ├── run-design.md         # Brand, UX, creative
│   ├── run-legal.md          # Legal/compliance review
│   ├── run-community.md      # Community operations
│   ├── run-launch.md         # Launch coordination (multi-operator)
│   ├── run-revenue.md        # Monetization planning (multi-operator)
│   ├── run-audit.md          # Business/system audit (multi-operator)
│   └── run-roadmap.md        # Roadmap planning (multi-operator)
├── rules/                    # Persistent AI guidance rules
│   ├── approval-policy.mdc   # Approval-gated execution policy
│   └── universal-context.mdc # Universal vendor-neutral context rules
├── skills/
│   └── universal-company-operator-plugin/
│       └── SKILL.md          # Main skill definition
├── docs/
│   ├── COMMANDS.md           # Command console reference
│   ├── PLUGIN_INTERFACE_SPEC.md  # TypeScript interface spec
│   └── APPROVAL_POLICY.md   # Detailed approval policy
├── schemas/
│   └── company-os-plugin.schema.json  # JSON Schema for plugin catalog
├── examples/
│   └── plugin.catalog.example.json    # Example plugin catalog
├── SKILL.md                  # Top-level skill entry point
├── COMMANDS.md               # Command registry quick reference
├── PLUGIN_INTERFACE.md       # Plugin interface spec
├── PLUGIN_SCHEMA.json        # Plugin schema (npm package)
├── CHANGELOG.md              # Version history
├── openclaw.plugin.json      # OpenClaw manifest
├── package.json              # npm package manifest
└── index.js                  # Module entry point
```

## Install Locally (OpenClaw)

```bash
openclaw plugins install ./universal-company-operator-plugin
openclaw plugins list
openclaw plugins inspect universal-company-operator-plugin
openclaw gateway restart
```

## Install in Cursor

Install this plugin from the local directory in Cursor, then:

1. Invoke skills by describing business tasks
2. Use commands via `/run <operator> <goal>`
3. Rules auto-apply to enforce approval policy and universal context

## Main Commands

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

## Safety Model

The plugin drafts and analyzes freely. It must request approval before external actions such as posting, sending, deploying, charging, changing environments, creating external tasks, or modifying production systems.

## Publishing Notes

This package avoids required secrets by default. Optional environment variables are declared only for configuration convenience.

No third-party API keys are required to use the base package.
