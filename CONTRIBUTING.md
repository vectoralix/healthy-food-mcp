# Contributing

## Development

This repository is a plugin and documentation wrapper for the Healthy Food MCP server.

Official service page: <https://vectoralix.com/mcp-servers/healthy-food>

Questions about this MCP server can be sent to <mcp@vectoralix.com>.

When changing this repository:

1. Keep `.mcp.json`, `.claude-plugin/plugin.json`, `.cursor-plugin/plugin.json`, and `gemini-extension.json` aligned.
2. Update `docs/tools.md` when MCP tools change.
3. Update `docs/content-structure.md` when recipe fields change.
4. Update skills when agent workflows change.
5. Run `node scripts/validate-repository.mjs`.

## Content Guidelines

- Preserve source attribution.
- Treat nutrition as estimated unless verified.
- Include allergen notes when a recipe includes common allergens.
- Keep cooking and storage guidance practical.
