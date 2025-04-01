
import { ReactNode } from 'react';

export type DetailContentItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type ServiceType = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  detailImage?: string;
  detailContent?: DetailContentItem[];
  pagePath?: string;
};
