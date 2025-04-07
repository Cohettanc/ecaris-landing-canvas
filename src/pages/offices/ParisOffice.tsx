
import { offices } from '@/data/officeData';
import OfficePageLayout from '@/components/office/OfficePageLayout';

const ParisOffice = () => {
  const office = offices.find(o => o.city === 'Paris')!;
  return <OfficePageLayout office={office} />;
};

export default ParisOffice;
