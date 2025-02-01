import {
  StyleSheet,
} from "@react-pdf/renderer";
export const styles = StyleSheet.create({
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
