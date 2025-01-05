"use client";
import React, { useState } from "react";
import { BillForm } from "./bill-form";
import { BillPreview } from "./bill-preview";

// Define the shape of our bill data
interface BillData {
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
}

// Initial state
const initialBillData: BillData = {
  companyInfo: {
    name: "",
    address: "",
    phone: "",
  },
  freelancerInfo: {
    name: "",
    address: "",
    phone: "",
    registrationNumber: "",
  },
  bankInfo: {
    bankName: "",
    branchName: "",
    accountType: "",
    accountNumber: "",
    accountHolder: "",
  },
  workDetails: [
    {
      date: "",
      description: "",
      hours: 0,
      rate: 0,
    },
  ],
};

export function BillCreator() {
  const [billData, setBillData] = useState<BillData>(initialBillData);

  // Calculate total amount based on work details
  const totalAmount = billData.workDetails.reduce(
    (sum, detail) => sum + detail.hours * detail.rate,
    0,
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <BillPreview {...billData} totalAmount={totalAmount} />
      <BillForm billData={billData} setBillData={setBillData} />
    </div>
  );
}
