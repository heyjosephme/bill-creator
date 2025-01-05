import { StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Noto Sans JP",
    fontSize: 11,
    color: "#333333",
  },
  
  // Document Header
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 30,
    color: "#1a1a1a",
    fontWeight: "bold",
  },
  
  // Invoice Details
  invoiceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottom: "1pt solid #e0e0e0",
    paddingBottom: 10,
  },
  invoiceNumber: {
    fontSize: 12,
  },
  invoiceDate: {
    fontSize: 12,
  },
  
  // Header Section with Company and Freelancer Info
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
  
  // Company and Freelancer Info Styles
  companyName: {
    fontSize: 16,
    marginBottom: 8,
    color: "#1a1a1a",
  },
  addressBlock: {
    marginBottom: 15,
  },
  addressText: {
    fontSize: 11,
    lineHeight: 1.4,
    color: "#4a4a4a",
  },
  
  // Introduction Text
  introText: {
    marginBottom: 20,
    fontSize: 12,
    color: "#1a1a1a",
  },
  
  // Table Styles
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
  tableCol: {
    padding: "8pt 4pt",
  },
  tableCell: {
    fontSize: 10,
    color: "#4a4a4a",
  },
  
  // Specific Column Widths
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
  
  // Summary Section
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
  totalRow: {
    flexDirection: "row",
    borderTop: "1pt solid #1a1a1a",
    borderBottom: "2pt double #1a1a1a",
    paddingVertical: 8,
    marginTop: 4,
    fontWeight: "bold",
  },
  
  // Bank Information Section
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
  
  // Footer
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 9,
    color: "#666666",
    textAlign: "center",
    borderTop: "1pt solid #e0e0e0",
    paddingTop: 10,
  },
  
  // Notes Section
  notes: {
    marginTop: 20,
    fontSize: 10,
    color: "#666666",
    padding: 10,
    backgroundColor: "#fff",
    border: "1pt solid #eee",
  }
});

export default styles;
