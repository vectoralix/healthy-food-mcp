# Examples

## Find Low-Calorie Recipes

1. Call `list_files` with `category` set to `Low Calorie`.
2. Review names and previews.
3. Call `get_file` for the most relevant slugs.
4. Compare nutrition, ingredients, allergens, and cooking time.

## Build a Meal Prep Set

1. Call `list_groups` and confirm the available group taxonomy.
2. Search with terms such as `meal prep chicken`, `lentil soup`, or `high protein lunch`.
3. Fetch full records for candidate recipes.
4. Prefer recipes with clear storage guidance and stable reheating notes.

## Screen for Allergens

1. Fetch the full recipe with `get_file`.
2. Inspect each ingredient `allergens` array.
3. Inspect `allergy_notes`.
4. Suggest only substitutions supported by the record or by obvious ingredient swaps.

## Compare Protein Options

1. Search for protein-rich terms such as `chicken`, `salmon`, `tofu`, `beef`, `lentil`, or `Greek yogurt`.
2. Fetch the recipe body for each candidate.
3. Compare `protein_g_per_portion`, calories, preparation time, and diet tags.
