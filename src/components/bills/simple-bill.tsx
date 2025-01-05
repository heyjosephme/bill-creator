import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  table: {
    marginTop: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    paddingVertical: 5,
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
  },
  tableCell: {
    flex: 1,
    padding: 5,
  },
  bankInfo: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f6f6f6',
  }
});

// Sample static data
const sampleData = {
  billNumber: "INV-001",
  date: "2024-01-05",
  clientCompany: {
    name: "株式会社サンプル",
    address: "東京都渋谷区...",
    phoneNumber: "03-xxxx-xxxx"
  },
  freelancer: {
    name: "山田 太郎",
    address: "東京都新宿区...",
    phoneNumber: "090-xxxx-xxxx"
  },
  bankDetails: {
    bankName: "サンプル銀行",
    branch: "渋谷支店",
    accountType: "普通",
    accountNumber: "1234567",
    accountHolder: "ヤマダ タロウ"
  },
  workItems: [
    {
      date: "2024-01-01",
      description: "システム開発",
      hours: 8,
      rate: 5000
    },
    {
      date: "2024-01-02",
      description: "テスト作業",
      hours: 6,
      rate: 5000
    }
  ]
};

export const SimpleBillPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Title */}
      <Text style={styles.title}>請求書</Text>

      {/* Header Section */}
      <View style={styles.header}>
        {/* Client Info - Left */}
        <View style={styles.leftColumn}>
          <Text style={styles.text}>{sampleData.clientCompany.name} 御中</Text>
          <Text style={styles.text}>{sampleData.clientCompany.address}</Text>
          <Text style={styles.text}>TEL: {sampleData.clientCompany.phoneNumber}</Text>
        </View>
        {/* Freelancer Info - Right */}
        <View style={styles.rightColumn}>
          <Text style={styles.text}>{sampleData.freelancer.name}</Text>
          <Text style={styles.text}>{sampleData.freelancer.address}</Text>
          <Text style={styles.text}>TEL: {sampleData.freelancer.phoneNumber}</Text>
        </View>
      </View>

      {/* Work Details Table */}
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableCell}>日付</Text>
          <Text style={styles.tableCell}>作業内容</Text>
          <Text style={styles.tableCell}>時間</Text>
          <Text style={styles.tableCell}>単価</Text>
          <Text style={styles.tableCell}>金額</Text>
        </View>
        {sampleData.workItems.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.date}</Text>
            <Text style={styles.tableCell}>{item.description}</Text>
            <Text style={styles.tableCell}>{item.hours}h</Text>
            <Text style={styles.tableCell}>¥{item.rate.toLocaleString()}</Text>
            <Text style={styles.tableCell}>¥{(item.hours * item.rate).toLocaleString()}</Text>
          </View>
        ))}
      </View>

      {/* Total Amount */}
      <View style={[styles.tableRow, { marginTop: 10 }]}>
        <Text style={[styles.tableCell, { flex: 4 }]}>合計</Text>
        <Text style={styles.tableCell}>
          ¥{sampleData.workItems.reduce((sum, item) => sum + (item.hours * item.rate), 0).toLocaleString()}
        </Text>
      </View>

      {/* Bank Information */}
      <View style={styles.bankInfo}>
        <Text style={styles.text}>お振込先</Text>
        <Text style={styles.text}>{sampleData.bankDetails.bankName} {sampleData.bankDetails.branch}</Text>
        <Text style={styles.text}>{sampleData.bankDetails.accountType} {sampleData.bankDetails.accountNumber}</Text>
        <Text style={styles.text}>口座名義: {sampleData.bankDetails.accountHolder}</Text>
      </View>
    </Page>
  </Document>
);

export default SimpleBillPDF;
