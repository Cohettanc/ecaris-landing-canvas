
import { offices } from '@/data/officeData';
import OfficePageLayout from '@/components/office/OfficePageLayout';

const LondonOffice = () => {
  const office = offices.find(o => o.city === 'London')!;
  return <OfficePageLayout office={office} />;
};

export default LondonOffice;
