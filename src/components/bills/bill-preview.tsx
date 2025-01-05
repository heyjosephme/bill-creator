"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { PDFViewer } from "@react-pdf/renderer";
import { BillPDF } from "./bill-pdf"; // Using the PDF component we created earlier

interface BillPreviewProps {
  companyInfo: {
    name: string;
    address: string;
    phone: string;
  };
  freelancerInfo: {
    name: string;
    address: string;
    phone: string;
    registrationNumber: string;
  };
  bankInfo: {
    bankName: string;
    branchName: string;
    accountType: string;
    accountNumber: string;
    accountHolder: string;
  };
  workDetails: Array<{
    date: string;
    description: string;
    hours: number;
    rate: number;
  }>;
  totalAmount: number;
}

export function BillPreview(props: BillPreviewProps) {
  return (
    <div className="w-1/2 p-4">
      <Card className="h-full bg-white">
        <PDFViewer width="100%" height="100%" className="rounded-lg">
          <BillPDF {...props} />
        </PDFViewer>
      </Card>
    </div>
  );
}
