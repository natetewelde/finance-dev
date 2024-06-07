import { TriangleAlert } from "lucide-react";
import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { useOpenTransaction } from "@/features/transactions/hooks/use-open-transaction";

import { cn } from "@/lib/utils";

type Props = {
  id: string;
  category: string | null;
  categoryId: string | null;
};

export function CategoryColumn({ id, category, categoryId }: Props) {
  const { onOpen: onOpenCategory } = useOpenCategory();
  const { onOpen: onOpenTransaction } = useOpenTransaction();

  const onClick = () => {
    categoryId ? onOpenCategory(categoryId) : onOpenTransaction(id);
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex cursor-pointer items-center hover:underline",
        !category && "text-rose-500",
      )}
    >
      {" "}
      {!category && <TriangleAlert className="mr-2 size-4 shrink-0" />}
      {category || "Uncategorized"}
    </div>
  );
}
