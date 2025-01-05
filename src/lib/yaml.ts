import fs from "fs";
import path from "path";
import { parse, stringify } from "yaml";

export class YamlService {
  private static getFilePath(filename: string): string {
    return path.join(process.cwd(), "data", filename);
  }

  static getYamlData<T>(filename: string): T | null {
    try {
      const filePath = this.getFilePath(filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return parse(fileContents) as T;
    } catch (error) {
      console.error(`Error loading YAML file: ${filename}`, error);
      return null;
    }
  }

  static saveYamlData<T>(filename: string, data: T): boolean {
    try {
      const filePath = this.getFilePath(filename);
      const yamlString = stringify(data);
      fs.writeFileSync(filePath, yamlString, "utf8");
      return true;
    } catch (error) {
      console.error(`Error saving YAML file: ${filename}`, error);
      return false;
    }
  }
}

{
  /*
// pages/invoice/[id].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import { YamlService } from "../../utils/yaml";

interface InvoicePageProps {
  personal: PersonalInfo;
  company: CompanyInfo;
  workLogs: WorkLog[];
}

interface InvoiceParams {
  id: string;
}

export const getStaticProps: GetStaticProps<
  InvoicePageProps,
  InvoiceParams
> = async ({ params }) => {
  if (!params?.id) {
    return { notFound: true };
  }

  const personal = YamlService.getYamlData<PersonalInfo>("personal.yml");
  const companies = YamlService.getYamlData<Companies>("companies.yml");
  const workLogs = YamlService.getYamlData<WorkLog[]>("work-logs.yml");

  if (!personal || !companies || !workLogs) {
    return { notFound: true };
  }

  const companyInfo = companies[params.id];
  if (!companyInfo) {
    return { notFound: true };
  }

  const companyLogs = workLogs.filter((log) => log.company === params.id);

  return {
    props: {
      personal,
      company: companyInfo,
      workLogs: companyLogs,
    },
  };
}; */
}

{
  /*export const getStaticPaths: GetStaticPaths<InvoiceParams> = async () => {
  const companies = YamlService.getYamlData<Companies>("companies.yml");

  if (!companies) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = Object.keys(companies).map((companyId) => ({
    params: { id: companyId },
  }));

  return {
    paths,
    fallback: false,
  };
}; */
}

{
  /* const InvoicePage: React.FC<InvoicePageProps> = ({ personal, company, workLogs }) => {
  const totalHours = workLogs.reduce((sum, log) => sum + log.hours, 0);
  const totalAmount = workLogs.reduce((sum, log) => sum + (log.hours * log.rate), 0);

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Invoice</h1>
        <div className="mt-4">
          <h2 className="font-semibold">From:</h2>
          <p>{personal.name}</p>
          <p>{personal.address}</p>
          <p>{personal.city}</p>
          <p>{personal.email}</p>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold">To:</h2>
          <p>{company.name}</p>
          <p>{company.address}</p>
          <p>{company.city}</p>
          <p>Attn: {company.contact}</p>
        </div>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Date</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Hours</th>
            <th className="border p-2">Rate</th>
            <th className="border p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {workLogs.map((log, index) => (
            <tr key={index}>
              <td className="border p-2">{log.date}</td>
              <td className="border p-2">{log.description}</td>
              <td className="border p-2">{log.hours}</td>
              <td className="border p-2">${log.rate}</td>
              <td className="border p-2">${log.hours * log.rate}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-bold">
            <td colSpan={2} className="border p-2">Total</td>
            <td className="border p-2">{totalHours}</td>
            <td className="border p-2"></td>
            <td className="border p-2">${totalAmount}</td>
          </tr>
        </tfoot>
      </table>

      <div className="mt-8">
        <h2 className="font-semibold">Payment Details:</h2>
        <p>Bank: {personal.bank.name}</p>
        <p>Account: {personal.bank.account}</p>
        <p>Routing: {personal.bank.routing}</p>
      </div>
    </div>
  );
};

export default InvoicePage; */
}
