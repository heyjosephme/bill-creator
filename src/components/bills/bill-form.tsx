import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface BillFormProps {
  billData: any; // Using the same BillData interface from BillCreator
  setBillData: React.Dispatch<React.SetStateAction<any>>;
}

export function BillForm({ billData, setBillData }: BillFormProps) {
  const handleInputChange = (section: string, field: string, value: any) => {
    setBillData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleWorkDetailChange = (index: number, field: string, value: any) => {
    const newWorkDetails = [...billData.workDetails];
    newWorkDetails[index] = {
      ...newWorkDetails[index],
      [field]: field === "hours" || field === "rate" ? Number(value) : value,
    };
    setBillData((prev) => ({
      ...prev,
      workDetails: newWorkDetails,
    }));
  };

  const addWorkEntry = () => {
    setBillData((prev) => ({
      ...prev,
      workDetails: [
        ...prev.workDetails,
        { date: "", description: "", hours: 0, rate: 0 },
      ],
    }));
  };

  return (
    <div className="w-1/2 p-4">
      <Card className="h-full bg-white p-6 overflow-y-auto">
        <form className="space-y-8">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">取引先情報</h3>
            <div className="space-y-2">
              <Label htmlFor="companyName">会社名</Label>
              <Input
                id="companyName"
                value={billData.companyInfo.name}
                onChange={(e) =>
                  handleInputChange("companyInfo", "name", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyAddress">住所</Label>
              <Input
                id="companyAddress"
                value={billData.companyInfo.address}
                onChange={(e) =>
                  handleInputChange("companyInfo", "address", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyPhone">電話番号</Label>
              <Input
                id="companyPhone"
                value={billData.companyInfo.phone}
                onChange={(e) =>
                  handleInputChange("companyInfo", "phone", e.target.value)
                }
              />
            </div>
          </div>

          {/* Work Details Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">作業内容</h3>
            {billData.workDetails.map((work: any, index: number) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-2 p-2 border rounded"
              >
                <div>
                  <Label htmlFor={`workDate${index}`}>日付</Label>
                  <Input
                    id={`workDate${index}`}
                    type="date"
                    value={work.date}
                    onChange={(e) =>
                      handleWorkDetailChange(index, "date", e.target.value)
                    }
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor={`workDesc${index}`}>作業内容</Label>
                  <Input
                    id={`workDesc${index}`}
                    value={work.description}
                    onChange={(e) =>
                      handleWorkDetailChange(
                        index,
                        "description",
                        e.target.value,
                      )
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`workHours${index}`}>時間</Label>
                  <Input
                    id={`workHours${index}`}
                    type="number"
                    value={work.hours}
                    onChange={(e) =>
                      handleWorkDetailChange(index, "hours", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor={`workRate${index}`}>単価</Label>
                  <Input
                    id={`workRate${index}`}
                    type="number"
                    value={work.rate}
                    onChange={(e) =>
                      handleWorkDetailChange(index, "rate", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
            <Button type="button" onClick={addWorkEntry} className="mt-2">
              作業行を追加
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
