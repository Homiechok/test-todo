export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Filter = "All" | "Active" | "Completed";
