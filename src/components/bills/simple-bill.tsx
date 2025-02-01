import React from "react";
import { Document, Page, Text, View, Font } from "@react-pdf/renderer";
import {
  getJapaneseWeekday,
  calculateHours,
  calculateTax,
} from "@/lib/utils/transformers";
import { styles } from "@/lib/constants/styles";
import { sampleData } from "@/lib/constants/sampleData";

Font.register({
  family: "Noto Sans JP",
  src: "fonts/NotoSansJP-Light.ttf",
});

export const SimpleBillPDF = () => {
  const totalHours = sampleData.workLog.reduce(
    (total, item) => total + calculateHours(item.startTime, item.endTime),
    0,
  );
  const totalAmount = totalHours * sampleData.freelancer.hourlyRate;
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
                {totalHours}
              </Text>
              <Text style={[styles.tableCell, styles.colUnit]}>時間</Text>
              <Text style={[styles.tableCell, styles.colPrice]}>
                ¥{item.rate.toLocaleString()}
              </Text>
              <Text style={[styles.tableCell, styles.colAmount]}>
                ¥{totalAmount.toLocaleString()}
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
          <Text style={styles.bankInfoText}>
            支払期日　{sampleData.bankDetails.deadline}
          </Text>
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
              {totalHours.toFixed(2)}h
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default SimpleBillPDF;
