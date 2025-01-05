// components/bills/bill-creator.tsx
import { BillPreview } from "./bill-preview"
import { BillForm } from "./bill-form"

export function BillCreator() {
  return (
    <div className="flex h-screen bg-gray-100">
      <BillPreview />
      <BillForm />
    </div>
  )
}
