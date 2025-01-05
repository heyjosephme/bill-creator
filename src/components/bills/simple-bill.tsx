import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Noto Sans JP",
  src: "fonts/NotoSansJP-Light.ttf",
});

// Styles definition as created earlier
// Helper function to get weekday in Japanese
const getJapaneseWeekday = (dateStr) => {
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const date = new Date(dateStr);
  return weekdays[date.getDay()];
};

// Helper function to calculate working hours
const calculateHours = (startTime, endTime) => {
  const [startHour, startMin] = startTime.split(":").map(Number);
  const [endHour, endMin] = endTime.split(":").map(Number);
  const hours = endHour - startHour + (endMin - startMin) / 60;
  return Number(hours.toFixed(2));
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Noto Sans JP",
    fontSize: 11,
    color: "#333333",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 30,
    color: "#1a1a1a",
    fontWeight: "bold",
  },
  invoiceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottom: "1pt solid #e0e0e0",
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    marginBottom: 40,
  },
  leftColumn: {
    flex: 1,
    paddingRight: 20,
  },
  rightColumn: {
    flex: 1,
    alignItems: "flex-end",
  },
  companyName: {
    fontSize: 16,
    marginBottom: 8,
    color: "#1a1a1a",
  },
  addressText: {
    fontSize: 11,
    lineHeight: 1.4,
    color: "#4a4a4a",
  },
  introText: {
    marginBottom: 20,
    fontSize: 12,
    color: "#1a1a1a",
  },
  table: {
    width: "100%",
    marginBottom: 30,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderBottom: "1pt solid #dee2e6",
    borderTop: "1pt solid #dee2e6",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1pt solid #eee",
    minHeight: 25,
    alignItems: "center",
  },
  tableCell: {
    fontSize: 10,
    color: "#4a4a4a",
    padding: "8pt 4pt",
  },
  colNumber: {
    width: "8%",
    textAlign: "center",
  },
  colDescription: {
    width: "44%",
  },
  colQuantity: {
    width: "12%",
    textAlign: "center",
  },
  colUnit: {
    width: "12%",
    textAlign: "center",
  },
  colPrice: {
    width: "12%",
    textAlign: "right",
  },
  colAmount: {
    width: "12%",
    textAlign: "right",
  },
  summary: {
    width: "40%",
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  summaryRow: {
    flexDirection: "row",
    borderBottom: "1pt solid #eee",
    paddingVertical: 5,
  },
  summaryLabel: {
    flex: 1,
    textAlign: "left",
    paddingLeft: 8,
    color: "#4a4a4a",
  },
  summaryValue: {
    flex: 1,
    textAlign: "right",
    paddingRight: 8,
  },
  bankInfo: {
    marginTop: 40,
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 4,
  },
  bankInfoTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: "#1a1a1a",
    borderBottom: "1pt solid #dee2e6",
    paddingBottom: 5,
  },
  bankInfoText: {
    fontSize: 11,
    lineHeight: 1.6,
    color: "#4a4a4a",
  },
  workLogTable: {
    width: "100%",
    marginBottom: 30,
    marginTop: 20,
  },
  workLogHeader: {
    backgroundColor: "#f0f0f0",
    borderBottom: "1pt solid #dee2e6",
    borderTop: "1pt solid #dee2e6",
  },
  workLogRow: {
    flexDirection: "row",
    borderBottom: "1pt solid #eee",
    minHeight: 30,
    alignItems: "center",
  },
  workLogCell: {
    fontSize: 9,
    padding: "4pt 2pt",
    color: "#4a4a4a",
  },
  dateCol: { width: "10%" },
  weekdayCol: { width: "5%" },
  timeCol: { width: "10%" },
  detailsCol: { width: "35%" },
  locationCol: { width: "15%" },
  hoursCol: { width: "15%" },
  totalRow: {
    flexDirection: "row",
    borderTop: "2pt solid #333",
    minHeight: 30,
    alignItems: "center",
  },
  notes: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 4,
  },
  notesTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  notesText: {
    fontSize: 10,
    lineHeight: 1.4,
  },
});

const sampleData = {
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
  },
  bankDetails: {
    bankName: "サンプル銀行",
    branch: "渋谷支店",
    accountType: "普通",
    accountNumber: "1234567",
    accountHolder: "ヤマダ タロウ",
  },
  workItems: [
    {
      date: "2024-01-01",
      description: "システム開発",
      hours: 8,
      rate: 5000,
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

const calculateTax = (amount) => amount * 0.1;

export const SimpleBillPDF = () => {
  const totalAmount = sampleData.workItems.reduce(
    (sum, item) => sum + item.hours * item.rate,
    0,
  );
  const tax = calculateTax(totalAmount);
  const finalAmount = totalAmount + tax;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title */}
        <Text style={styles.title}>請求書</Text>

        {/* Invoice Details */}
        <View style={styles.invoiceDetails}>
          <Text style={styles.addressText}>
            請求書番号: {sampleData.billNumber}
          </Text>
          <Text style={styles.addressText}>発行日: {sampleData.date}</Text>
        </View>

        {/* Header Section */}
        <View style={styles.header}>
          {/* Client Info - Left */}
          <View style={styles.leftColumn}>
            <Text style={styles.companyName}>
              {sampleData.clientCompany.name} 御中
            </Text>
            <Text style={styles.addressText}>
              〒 {sampleData.clientCompany.postcode}
            </Text>
            <Text style={styles.addressText}>
              {sampleData.clientCompany.address1}
            </Text>
            <Text style={styles.addressText}>
              {sampleData.clientCompany.address2}
            </Text>
          </View>

          {/* Freelancer Info - Right */}
          <View style={styles.rightColumn}>
            <Text style={styles.companyName}>{sampleData.freelancer.name}</Text>
            <Text style={styles.addressText}>
              〒 {sampleData.freelancer.postcode}
            </Text>
            <Text style={styles.addressText}>
              {sampleData.freelancer.address1}
            </Text>
            <Text style={styles.addressText}>
              {sampleData.freelancer.address2}
            </Text>
          </View>
        </View>

        {/* Introduction Text */}
        <Text style={styles.introText}>下記のとおり御請求申し上げます。</Text>

        {/* Work Details Table */}
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCell, styles.colNumber]}>項番</Text>
            <Text style={[styles.tableCell, styles.colDescription]}>品名</Text>
            <Text style={[styles.tableCell, styles.colQuantity]}>数量</Text>
            <Text style={[styles.tableCell, styles.colUnit]}>単位</Text>
            <Text style={[styles.tableCell, styles.colPrice]}>単価</Text>
            <Text style={[styles.tableCell, styles.colAmount]}>金額</Text>
          </View>

          {sampleData.workItems.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.colNumber]}>
                {index + 1}
              </Text>
              <Text style={[styles.tableCell, styles.colDescription]}>
                {item.description}
              </Text>
              <Text style={[styles.tableCell, styles.colQuantity]}>
                {item.hours}
              </Text>
              <Text style={[styles.tableCell, styles.colUnit]}>時間</Text>
              <Text style={[styles.tableCell, styles.colPrice]}>
                ¥{item.rate.toLocaleString()}
              </Text>
              <Text style={[styles.tableCell, styles.colAmount]}>
                ¥{(item.hours * item.rate).toLocaleString()}
              </Text>
            </View>
          ))}
        </View>

        {/* Summary Section */}
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>小計</Text>
            <Text style={styles.summaryValue}>
              ¥{totalAmount.toLocaleString()}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>消費税 (10%)</Text>
            <Text style={styles.summaryValue}>¥{tax.toLocaleString()}</Text>
          </View>
          <View style={[styles.summaryRow, { borderTopWidth: 2 }]}>
            <Text style={styles.summaryLabel}>総計</Text>
            <Text style={styles.summaryValue}>
              ¥{finalAmount.toLocaleString()}
            </Text>
          </View>
        </View>

        {/* Bank Information */}
        <View style={styles.bankInfo}>
          <Text style={styles.bankInfoTitle}>振込先</Text>
          <Text style={styles.bankInfoText}>
            {sampleData.bankDetails.bankName} {sampleData.bankDetails.branch}
          </Text>
          <Text style={styles.bankInfoText}>
            {sampleData.bankDetails.accountType}{" "}
            {sampleData.bankDetails.accountNumber}
          </Text>
          <Text style={styles.bankInfoText}>
            口座名義: {sampleData.bankDetails.accountHolder}
          </Text>
          <Text style={styles.bankInfoText}>支払期日　2025年1月31日</Text>
        </View>

        {/* Notes Section */}
        <View style={styles.notes}>
          <Text style={styles.notesTitle}>備考</Text>
          {sampleData.notes.map((note, index) => (
            <Text key={index} style={styles.notesText}>
              {note}
            </Text>
          ))}
        </View>

        {/* Work Log Title */}
        <Text
          style={[styles.bankInfoTitle, { marginTop: 30, marginBottom: 10 }]}
        >
          作業詳細
        </Text>

        {/* Work Log Table */}
        <View style={styles.workLogTable}>
          <View style={[styles.workLogRow, styles.workLogHeader]}>
            <Text style={[styles.workLogCell, styles.dateCol]}>日付</Text>
            <Text style={[styles.workLogCell, styles.weekdayCol]}>曜日</Text>
            <Text style={[styles.workLogCell, styles.timeCol]}>開始</Text>
            <Text style={[styles.workLogCell, styles.timeCol]}>終了</Text>
            <Text style={[styles.workLogCell, styles.detailsCol]}>
              作業内容
            </Text>
            <Text style={[styles.workLogCell, styles.locationCol]}>
              勤務形態
            </Text>
            <Text style={[styles.workLogCell, styles.hoursCol]}>就業時間</Text>
          </View>

          {sampleData.workLog.map((item, index) => {
            const workingHours = calculateHours(item.startTime, item.endTime);
            return (
              <View key={index} style={styles.workLogRow}>
                <Text style={[styles.workLogCell, styles.dateCol]}>
                  {item.date}
                </Text>
                <Text style={[styles.workLogCell, styles.weekdayCol]}>
                  {getJapaneseWeekday(item.date)}
                </Text>
                <Text style={[styles.workLogCell, styles.timeCol]}>
                  {item.startTime}
                </Text>
                <Text style={[styles.workLogCell, styles.timeCol]}>
                  {item.endTime}
                </Text>
                <Text style={[styles.workLogCell, styles.detailsCol]}>
                  {item.details}
                </Text>
                <Text style={[styles.workLogCell, styles.locationCol]}>
                  {item.location}
                </Text>
                <Text style={[styles.workLogCell, styles.hoursCol]}>
                  {workingHours}h
                </Text>
              </View>
            );
          })}

          {/* Total Hours Row */}
          <View style={styles.totalRow}>
            <Text style={[styles.workLogCell, { width: "85%" }]}>
              合計就業時間
            </Text>
            <Text style={[styles.workLogCell, styles.hoursCol]}>
              {sampleData.workLog
                .reduce(
                  (total, item) =>
                    total + calculateHours(item.startTime, item.endTime),
                  0,
                )
                .toFixed(2)}
              h
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default SimpleBillPDF;
