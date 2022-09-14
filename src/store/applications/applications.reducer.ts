import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Application } from "../../models/applications";

export const applicationsSlice = createSlice({
  name: "applications",
  initialState: {
    loading: false,
    error: "",
    productId: 0,
    applications: [] as Application[],
  },
  reducers: {
    getApplications: (state, _) => {
      state.applications = [];
      state.loading = true;
      state.error = "";
    },
    getApplicationsSuccess: (state, action) => {
      state.applications = action.payload.applications
        .filter(
          (app: Application) => app.productId === action.payload.productId
        )
        .sort((a: Application, b: Application) =>
          a.createdAt > b.createdAt ? 1 : -1
        );
      state.loading = false;
    },
    getApplicationsFailure: (state, action: PayloadAction<{ error: any }>) => {
      state.loading = false;
      state.error = "Application not found";
    },
    updateApplication: (state, _) => {
      state.loading = true;
      state.error = "";
    },
    updateApplicationSuccess: (state, action) => {
      const index = state.applications.findIndex(
        (app) => app.id === action.payload.application.id
      );
      state.applications[index] = action.payload.application;
      state.loading = false;
    },
    updateApplicationFailure: (
      state,
      action: PayloadAction<{ error: any }>
    ) => {
      state.loading = false;
      state.error = "Update failed";
    },
    createApplication: (state, _) => {
      state.loading = true;
      state.error = "";
    },
    createApplicationSuccess: (state, action) => {
      state.applications.push(action.payload.application);
      state.loading = false;
    },
    createApplicationFailure: (
      state,
      action: PayloadAction<{ error: any }>
    ) => {
      state.loading = false;
      state.error = "Create failed";
    },
  },
});

export default applicationsSlice.reducer;
