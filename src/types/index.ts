export interface SubDataSourceI {
  key: string;
  organization: string;
  segment: string;
  subConfirmed: boolean;
  subAccreditation: boolean;
  date: string;
  subBlocked: boolean;
}

export interface DataSourceI {
  key: string;
  name: string;
  segment: string;
  confirmed: boolean;
  accreditation: boolean;
  date: string;
  blocked: boolean;
  contact: string;
  subData: SubDataSourceI[];
}
