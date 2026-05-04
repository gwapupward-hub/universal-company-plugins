# AGENTS.md

## Cursor Cloud specific instructions

### Codebase overview

This repository contains the **Universal Company Operator Plugin** — a declarative, content-only plugin bundle (Markdown + JSON) for OpenClaw/ClawHub agent workflows and Cursor. There is no executable backend or frontend application to run; the "application" is the plugin itself, loaded by an agent platform.

### Key facts

- **No build step, no runtime dependencies.** The plugin is entirely Markdown and JSON with a thin ESM `index.js` entry point.
- **No test framework.** Validation is structural: all JSON files must parse, all command `.md` files must have valid YAML frontmatter, and `node index.js` must load without errors.
- Node.js is only needed for `npm pack --dry-run` validation and `node -e "import('./index.js')"` module load checks.

### Validation commands

| Check | Command (run from `universal-company-operator-plugin/`) |
|---|---|
| JSON validity | `node -e "require('./package.json'); require('./openclaw.plugin.json'); require('./.cursor-plugin/plugin.json'); require('./PLUGIN_SCHEMA.json')"` |
| Module loads | `node -e "import('./index.js').then(m => console.log(m.name, m.version))"` |
| npm pack dry run | `npm pack --dry-run` |

### Plugin structure conventions

- `.cursor-plugin/plugin.json` — Cursor plugin manifest (skills, commands, rules).
- `.claude-plugin/plugin.json` — Claude/ClawHub plugin manifest.
- `commands/*.md` — Individual command definitions with YAML frontmatter (`name`, `description`).
- `rules/*.mdc` — Cursor rules with YAML frontmatter (`description`, `alwaysApply` or `globs`).
- `skills/*/SKILL.md` — Skill definitions with YAML frontmatter.
- `openclaw.plugin.json` — OpenClaw manifest listing commands, capabilities, and permissions.

### No services to start

There are no servers, databases, or background processes. The development workflow is: edit files, validate structure, commit.
