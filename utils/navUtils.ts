export type RootStackParamList = {
  Feature: undefined;
  Drawer: undefined;
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};
