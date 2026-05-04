# Universal Company Operator Plugin

A universal command-based company operating system plugin for OpenClaw/ClawHub-style agent workflows.

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

## Install Locally

```bash
openclaw plugins install ./universal-company-operator-plugin
openclaw plugins list
openclaw plugins inspect universal-company-operator-plugin
openclaw gateway restart
```

OpenClaw supports plugin installation from local directories or archives, and plugin bundles can map skill and command content into OpenClaw sessions.

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

## Publishing Notes

This package avoids required secrets by default. Optional environment variables are declared only for configuration convenience.

No third-party API keys are required to use the base package.

## Safety Model

The plugin drafts and analyzes freely. It must request approval before external actions such as posting, sending, deploying, charging, changing environments, creating external tasks, or modifying production systems.
