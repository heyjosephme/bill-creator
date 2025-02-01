export const sampleData = {
  billNumber: "INV-001",
  date: "2024-01-05",
  clientCompany: {
    name: "株式会社サンプル",
    postcode: "111-1111",
    address1: "東京都渋谷区",
    address2: "AAA BBB CCC",
    phoneNumber: "03-xxxx-xxxx",
  },
  freelancer: {
    name: "山田 太郎",
    postcode: "222-2222",
    address1: "東京都新宿区",
    address2: "ZZZ YYY XXX",
    phoneNumber: "090-xxxx-xxxx",
    hourlyRate: 5000,
  },
  bankDetails: {
    bankName: "サンプル銀行",
    branch: "渋谷支店",
    accountType: "普通",
    accountNumber: "1234567",
    accountHolder: "ヤマダ タロウ",
    deadline: "2025年2月28日",
  },
  workItems: [
    {
      date: "2024-01-01",
      description: "システム開発",
      hours: 8, // CUSTOM INPUT OR BASED ON WORK LOGS?
      rate: 5000, // CHANGE TO YOUR HOURLY RATE
    },
  ],
  workLog: [
    {
      date: "2024-01-01",
      startTime: "09:00",
      endTime: "18:00",
      details: "フロントエンド開発、APIの実装",
      location: "リモート",
    },
    {
      date: "2024-01-02",
      startTime: "09:30",
      endTime: "18:30",
      details: "バグ修正、ミーティング",
      location: "オフィス",
    },
    {
      date: "2024-01-03",
      startTime: "09:00",
      endTime: "17:30",
      details: "テスト作成、コードレビュー",
      location: "リモート",
    },
  ],
  notes: [
    "1. 休憩時間（1時間）は就業時間から除外済み",
    "2. リモートワークは事前に承認済み",
    "3. 時間外作業は案件マネージャーの承認済み",
  ],
};
