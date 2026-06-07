# Content Structure

Healthy Food content files are structured recipe records. The body is TOML-like text with scalar metadata, nested sections, and repeated arrays.

## Top-Level Metadata

Common fields:

- `author`
- `source_name`
- `source_url`
- `servings`
- `serving_label`
- `best_season`
- `estimated_total_time_minutes`
- `estimated_prep_time_minutes`
- `estimated_cook_time_minutes`
- `sources`
- `recipe_markdown`

`recipe_markdown` contains a readable summary, method, and serving notes. The structured fields carry the data that should be used for filtering and planning.

## Nutrition

The `[nutrition]` section can include:

- `estimated`
- `calories_per_portion`
- `protein_g_per_portion`
- `carbs_g_per_portion`
- `fat_g_per_portion`
- `fiber_g_per_portion`
- `sugar_g_per_portion`
- `sodium_mg_per_portion`

Treat nutrition as estimated unless the record explicitly says otherwise.

## Ingredients

Each `[[ingredients]]` block can include:

- `name`
- `metric_quantity`
- `metric_unit`
- `us_quantity`
- `us_unit`
- `preparation`
- `calories`
- `protein_g`
- `carbs_g`
- `fat_g`
- `allergens`
- `notes`

Use ingredients for shopping lists, substitution reasoning, and allergen screening.

## Allergy Notes

Each `[[allergy_notes]]` block can include:

- `allergen`
- `recommendation`

Prefer these recommendations over generic substitutions when adapting a recipe.

## Equipment

Each `[[equipment]]` block can include:

- `item`
- `notes`

Use equipment data when planning recipes for a specific kitchen setup.

## Cooking Steps

Each `[[cooking_steps]]` block can include:

- `order`
- `action`
- `details`
- `time_minutes`
- `heat`

Use `order` to preserve cooking sequence.

## Cooking Guidance

The `[cooking_guidance]` section can include:

- `chopping`
- `heat`
- `fire`
- `doneness`
- `resting`

Use this for execution details that do not fit into a single step.

## Storage

The `[storage]` section can include:

- `refrigerator`
- `freezer`
- `reheating`

Use storage data for meal prep and leftover guidance.
