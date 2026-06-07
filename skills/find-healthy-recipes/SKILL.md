---
name: find-healthy-recipes
description: Find Healthy Food MCP recipe records by category, group, ingredient, calorie target, macro target, allergen constraint, season, author, or cooking time.
---

# Find Healthy Recipes

Use this skill when the user asks for recipe recommendations, food ideas, calorie-category browsing, ingredient-based search, allergen-aware options, or macro-focused meals.

## Workflow

1. Clarify constraints only when required. Otherwise infer reasonable defaults from the user request.
2. Call `list_categories` when the request uses calorie language or asks what buckets exist.
3. Call `list_groups` when the request uses diet, meal type, lifestyle, macro, or dish-family language.
4. Call `list_files` when browsing by category.
5. Call `search_docs` when matching ingredients, authors, recipe names, diets, or free-form constraints.
6. Call `get_file` for each promising slug before recommending it.
7. Recommend recipes using structured fields from the full file: nutrition, ingredients, allergy notes, cooking steps, equipment, and storage.

## Selection Rules

- Do not rely on previews for final recommendations.
- Treat nutrition as estimated when `[nutrition].estimated` is true.
- Respect explicit allergens and dietary constraints.
- Prefer records with matching `category_name`, relevant groups, and practical cooking/storage guidance.
- When results are weak, say what was searched and broaden with a nearby category or ingredient.

## Output Shape

For each recommendation, include:

- Recipe name and slug.
- Why it matches.
- Per-portion calories and macros when available.
- Prep/cook/total time when available.
- Allergen or substitution notes when relevant.
- Storage notes when meal prep is relevant.
