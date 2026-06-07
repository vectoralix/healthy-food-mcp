import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;

const requiredFiles = [
  ".mcp.json",
  ".claude-plugin/plugin.json",
  ".claude-plugin/marketplace.json",
  ".cursor-plugin/plugin.json",
  "gemini-extension.json",
  "README.md",
  "docs/tools.md",
  "docs/content-structure.md",
  "skills/find-healthy-recipes/SKILL.md",
  "skills/build-meal-plan/SKILL.md",
  "assets/logo.png"
];

const jsonFiles = [
  ".mcp.json",
  ".claude-plugin/plugin.json",
  ".claude-plugin/marketplace.json",
  ".cursor-plugin/plugin.json",
  "gemini-extension.json"
];

const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    errors.push(`Missing required file: ${file}`);
  }
}

for (const file of jsonFiles) {
  const path = join(root, file);

  if (!existsSync(path)) {
    continue;
  }

  try {
    JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`Invalid JSON in ${file}: ${error.message}`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Healthy Food MCP repository metadata is valid.");
