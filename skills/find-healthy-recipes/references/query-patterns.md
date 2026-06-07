# Query Patterns

Use broad terms first, then narrow with full recipe fetches.

## Category Browsing

- Low calorie dinners: call `list_files` with `category = "Low Calorie"`.
- Bulking meals: call `list_files` with `category = "Bulking Friendly"`.
- Maintenance meals: call `list_files` with `category = "Maintenance Friendly"`.

## Search Terms

Ingredient examples:

- `chicken`
- `salmon`
- `tofu`
- `lentil`
- `oats`
- `sweet potato`

Goal examples:

- `high protein`
- `low sugar`
- `quick`
- `meal prep`
- `family friendly`
- `gluten-free`

## Follow-Up Fetch

Always call `get_file` for candidate slugs before giving final advice.
