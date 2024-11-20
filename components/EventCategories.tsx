import { Button } from "@/components/ui/button";

const categories = [
  { id: "music", label: "Music", segment: "KZFzniwnSyZfZ7v7nJ" },
  { id: "sports", label: "Sports", segment: "KZFzniwnSyZfZ7v7nE" },
  { id: "arts", label: "Arts & Theatre", segment: "KZFzniwnSyZfZ7v7na" },
  { id: "family", label: "Family", segment: "KZFzniwnSyZfZ7v7n1" },
  { id: "other", label: "Other", segment: "KZFzniwnSyZfZ7v7n%" },
];

interface EventCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const EventCategories = ({
  selectedCategory,
  onCategoryChange,
}: EventCategoriesProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      <Button
        variant={selectedCategory === "" ? "default" : "outline"}
        onClick={() => onCategoryChange("")}
      >
        All Events
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={
            selectedCategory === category.segment ? "default" : "outline"
          }
          onClick={() => onCategoryChange(category.segment)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default EventCategories;
