interface BankInfo {
  name: string;
  account: string;
  routing: string;
}

interface PersonalInfo {
  name: string;
  address: string;
  city: string;
  email: string;
  phone: string;
  bank: BankInfo;
}

interface CompanyInfo {
  name: string;
  address: string;
  city: string;
  contact: string;
  email: string;
}

interface Companies {
  [key: string]: CompanyInfo;
}

interface WorkLog {
  company: string;
  date: string;
  hours: number;
  description: string;
  rate: number;
}
