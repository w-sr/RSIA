import { Application, CreateApplication } from "../../models/applications";
import { applicationsSlice } from "./applications.reducer";

export function getApplications(productId: number) {
  return applicationsSlice.actions.getApplications(productId);
}

export function createApplication(data: CreateApplication) {
  return applicationsSlice.actions.createApplication(data);
}

export function updateApplication(data: Partial<Application>) {
  return applicationsSlice.actions.updateApplication(data);
}
