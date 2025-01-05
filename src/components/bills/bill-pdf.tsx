import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  // Header section with company and freelancer info
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  // Left side - Client company info
  companyInfo: {
    flex: 1,
    padding: 10,
  },
  // Right side - Your info
  freelancerInfo: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-end',
  },
  // Middle section - Amount details
  amountSection: {
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
  },
  // Bank information
  bankInfo: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#f6f6f6',
  },
  // Work details table
  workTable: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#e6e6e6',
    textAlign: 'center',
    padding: 5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 5,
  },
  // Column widths
  dateColumn: { width: '20%' },
  descriptionColumn: { width: '50%' },
  hoursColumn: { width: '15%' },
  rateColumn: { width: '15%' },
});

interface BillPDFProps {
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

export const BillPDF = ({
  companyInfo,
  freelancerInfo,
  bankInfo,
  workDetails,
  totalAmount,
}: BillPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Title */}
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
        請求書
      </Text>

      {/* Header with company and freelancer info */}
      <View style={styles.header}>
        <View style={styles.companyInfo}>
          <Text>{companyInfo.name} 御中</Text>
          <Text>{companyInfo.address}</Text>
          <Text>TEL: {companyInfo.phone}</Text>
        </View>
        <View style={styles.freelancerInfo}>
          <Text>{freelancerInfo.name}</Text>
          <Text>{freelancerInfo.address}</Text>
          <Text>TEL: {freelancerInfo.phone}</Text>
          <Text>登録番号: {freelancerInfo.registrationNumber}</Text>
        </View>
      </View>

      {/* Amount section */}
      <View style={styles.amountSection}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>
          ご請求金額: ¥{totalAmount.toLocaleString()}
        </Text>
      </View>

      {/* Bank information */}
      <View style={styles.bankInfo}>
        <Text style={{ fontSize: 14, marginBottom: 5 }}>お振込先</Text>
        <Text>{bankInfo.bankName} {bankInfo.branchName}支店</Text>
        <Text>{bankInfo.accountType} {bankInfo.accountNumber}</Text>
        <Text>口座名義: {bankInfo.accountHolder}</Text>
      </View>

      {/* Work details table */}
      <View style={styles.workTable}>
        <View style={styles.tableHeader}>
          <Text style={styles.dateColumn}>日付</Text>
          <Text style={styles.descriptionColumn}>作業内容</Text>
          <Text style={styles.hoursColumn}>時間</Text>
          <Text style={styles.rateColumn}>単価</Text>
        </View>
        {workDetails.map((work, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.dateColumn}>{work.date}</Text>
            <Text style={styles.descriptionColumn}>{work.description}</Text>
            <Text style={styles.hoursColumn}>{work.hours}h</Text>
            <Text style={styles.rateColumn}>¥{work.rate}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
