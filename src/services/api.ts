import { Product } from "../models/products";
import { Application, CreateApplication } from "../models/applications";
import { axg, axp, axu } from "./axios";

const baseUrl = "https://nesto-fe-exam.vercel.app/api";

export const fetchProducts = async (): Promise<Product[]> =>
  axg(`${baseUrl}/products`);

export const createApplication = async (
  data: CreateApplication
): Promise<Application> => axp(`${baseUrl}/applications`, data);

export const fetchApplications = async (): Promise<Application[]> =>
  axg(`${baseUrl}/applications`);

export const fetchApplication = async (id: string): Promise<Application> =>
  axg(`${baseUrl}/applications/${id}`);

export const updateApplication = async (data: Partial<Application>) =>
  axu(`${baseUrl}/applications/${data.id}`, data);
