
import { offices } from '@/data/officeData';
import OfficePageLayout from '@/components/office/OfficePageLayout';

const LuxembourgOffice = () => {
  const office = offices.find(o => o.city === 'Luxembourg')!;
  return <OfficePageLayout office={office} />;
};

export default LuxembourgOffice;
