
import { offices } from '@/data/officeData';
import OfficePageLayout from '@/components/office/OfficePageLayout';

const GenevaOffice = () => {
  const office = offices.find(o => o.city === 'Geneva')!;
  return <OfficePageLayout office={office} />;
};

export default GenevaOffice;
