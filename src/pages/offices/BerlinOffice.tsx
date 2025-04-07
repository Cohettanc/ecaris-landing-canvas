
import { offices } from '@/data/officeData';
import OfficePageLayout from '@/components/office/OfficePageLayout';

const BerlinOffice = () => {
  const office = offices.find(o => o.city === 'Berlin')!;
  return <OfficePageLayout office={office} />;
};

export default BerlinOffice;
