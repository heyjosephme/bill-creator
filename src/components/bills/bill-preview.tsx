// components/bills/bill-preview.tsx
import { Card } from "@/components/ui/card"

export function BillPreview() {
  return (
    <div className="w-1/2 p-4">
      <Card className="h-full bg-white p-6">
        <div className="text-lg font-semibold mb-4">PDF Preview</div>
        <div className="h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">PDF preview will appear here</p>
        </div>
      </Card>
    </div>
  )
}
