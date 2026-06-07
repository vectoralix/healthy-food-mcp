# Healthy Food MCP Server

Healthy Food MCP exposes structured recipe content for agents and editors. It can list calorie categories, list diet and meal groups, browse recipe records, fetch full structured recipe files, and search content by keyword.

This public repository promotes the Healthy Food MCP server and links installers, agents, and contributors back to the Vectoralix service page: <https://vectoralix.com/mcp-servers/healthy-food>.

MCP endpoint: <https://vectoralix.com/mcp/PrVaxzTB2TxR>

Contact: <mcp@vectoralix.com>

It contains MCP connection metadata, Claude and Cursor plugin manifests, Gemini extension metadata, reusable skills, documentation, assets, and a validation script.

## MCP Tools

The server currently exposes these tools:

- `list_categories`: returns high-level calorie categories.
- `list_groups`: returns dietary, lifestyle, meal-type, macro, and dish-type groups.
- `list_files`: returns recipe files with `name`, `slug`, `category_name`, and a preview. Supports optional `category` and `limit`.
- `get_file`: fetches a full content file by `slug`.
- `search_docs`: searches content records by keyword.

## Content Model

Recipe files are TOML-like structured records. A full record can include:

- Recipe metadata: `author`, `source_name`, `source_url`, `servings`, `serving_label`, `best_season`, estimated prep/cook/total minutes.
- `sources`: source URLs used for attribution.
- `recipe_markdown`: human-readable summary, method, and serving guidance.
- `nutrition`: estimated per-portion calories, protein, carbs, fat, fiber, sugar, and sodium.
- `ingredients`: metric and US quantities, preparation, macro estimates, allergens, and notes.
- `allergy_notes`: allergen-specific substitutions or cautions.
- `equipment`: cooking equipment and notes.
- `cooking_steps`: ordered steps with action, details, time, and heat.
- `cooking_guidance`: chopping, heat, doneness, and resting guidance.
- `storage`: refrigerator, freezer, and reheating guidance.

See [docs/content-structure.md](docs/content-structure.md) for the complete structure summary.

## Categories

The current high-level categories are:

- Bulking Friendly
- High Calorie
- Low Calorie
- Maintenance Friendly
- Moderate Calorie

## Configuration

The included `.mcp.json` points to the public Healthy Food MCP endpoint:

```json
{
  "mcpServers": {
    "healthy-food": {
      "type": "http",
      "url": "https://vectoralix.com/mcp/PrVaxzTB2TxR"
    }
  }
}
```

Use this endpoint URL when installing the Healthy Food MCP server in an MCP-compatible client.

## Skills

This repository includes two agent skills:

- `find-healthy-recipes`: find matching recipe slugs, fetch full records, and summarize the best options.
- `build-meal-plan`: combine categories, groups, and recipes into a practical meal plan.

## Validation

Run the local validation script from this directory:

```bash
node scripts/validate-repository.mjs
```

The script checks that required JSON manifests parse and that required repository files exist.

## License

This repository wrapper is licensed under the MIT License. The hosted Healthy Food MCP service remains operated by Vectoralix.
