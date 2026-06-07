# Healthy Food MCP Tools

## `list_categories`

Returns the calorie-oriented category names used by recipe records.

Observed categories:

- Bulking Friendly
- High Calorie
- Low Calorie
- Maintenance Friendly
- Moderate Calorie

## `list_groups`

Returns a taxonomy of dietary patterns, meal types, lifestyle tags, macro tags, and dish families. Examples include:

- Dietary patterns: Mediterranean, Keto, Paleo, Vegetarian, Vegan, Pescatarian, Gluten-Free, Dairy-Free.
- Health constraints: Low Sugar, Low Sodium, Diabetic Friendly, Heart Friendly.
- Lifestyle tags: Fitness / Gym, Family Friendly, Budget Friendly, Quick & Easy, Meal Prep Friendly.
- Meal types: Breakfast, Lunch, Dinner, Snack, Dessert, Drink, Side Dish.
- Dish families: Eggs, Porridge / Oats, Salads, Bowls, Soups, Poultry Main, Fish / Seafood, Vegetarian Main, Sauce / Dressing.
- Macro tags: High Protein, High Carb, High Fat, Moderate Carb, Moderate Fat, Low Carb, Low Fat, Macro Balanced.

Some group names can appear more than once because group tags are also attached to individual recipe records.

## `list_files`

Lists recipe content records.

Accepted parameters:

- `category`: optional category-name filter.
- `limit`: optional maximum number of results.

Returns records with:

- `name`
- `slug`
- `category_name`
- `preview`

Use `slug` with `get_file` to fetch the full recipe.

## `get_file`

Fetches one recipe by slug.

Accepted parameters:

- `slug`: recipe slug from `list_files` or search results.

Returns:

- `name`
- `slug`
- `category_name`
- `body`

The `body` is a TOML-like structured recipe record.

## `search_docs`

Searches content records by keyword.

Accepted parameters:

- `query`: search query.
- `limit`: optional maximum number of results.

Use specific terms such as author names, ingredients, recipe names, meal types, diet tags, or constraints.
