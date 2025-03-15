import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export default function DecklistInput() {
  const mockDeckData = [
    { name: "Card 1", price: "100円", rarity: "Common" },
    { name: "Card 2", price: "200円", rarity: "Uncommon" },
    { name: "Card 3", price: "300円", rarity: "Rare" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6 shadow-lg rounded-xl bg-white dark:bg-gray-900 col-span-2">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          取得したカードリスト
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell className="font-semibold">カード名</TableCell>
              <TableCell className="font-semibold">価格</TableCell>
              <TableCell className="font-semibold">レアリティ</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDeckData.map((card, index) => (
              <TableRow key={index}>
                <TableCell>{card.name}</TableCell>
                <TableCell>{card.price}</TableCell>
                <TableCell>{card.rarity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
