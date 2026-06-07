---
name: build-meal-plan
description: Build meal plans using Healthy Food MCP categories, groups, recipe records, nutrition estimates, ingredients, allergens, cooking steps, and storage guidance.
---

# Build Meal Plan

Use this skill when the user asks for a daily plan, weekly plan, meal prep plan, shopping-list-friendly plan, calorie target, macro target, family plan, or dietary pattern.

## Workflow

1. Identify plan scope: number of days, meals per day, snacks, calorie target, diet constraints, allergens, budget, and cooking time.
2. Call `list_categories` to map calorie intent to available categories.
3. Call `list_groups` to map dietary patterns and meal types.
4. Use `list_files` for category browsing and `search_docs` for specific constraints.
5. Fetch full recipes with `get_file`.
6. Select recipes using calories, protein, carbs, fat, cooking time, storage, and allergen notes.
7. Present a practical plan with recipe slugs so records can be fetched again later.

## Planning Rules

- Use full recipe records, not previews, for final meal plan decisions.
- Avoid repeating the same protein source too often unless the user asks for simplicity.
- Prefer recipes with storage guidance for meal prep.
- Flag estimated nutrition instead of presenting it as exact.
- Use allergy notes from the recipe record when adapting meals.

## Output Shape

Include:

- Meal schedule.
- Recipe names and slugs.
- Estimated calories and macros when available.
- Prep notes and batching opportunities.
- Allergen warnings or substitutions.
- Storage and reheating guidance for meal prep plans.
