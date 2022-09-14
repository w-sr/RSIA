export type Applicant = {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type Application = {
  readonly id: string;
  token: string;
  type: "NEW" | "RENEWAL" | "REFINANCE";
  applicants: Applicant[];
  productId?: number;
  readonly createdAt: string;
};

export type CreateApplication = {
  productId: number;
};

export type ApplicationsState = {
  applications: Application[];
  productId: number;
  loading: boolean;
  error: string;
};
