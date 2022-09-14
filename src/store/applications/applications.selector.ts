import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../models/state";

const selectApplicationState = (state: State) => state.applications;

export const selectApplications = createSelector(
  selectApplicationState,
  (applicationsState) => applicationsState.applications
);

export const selectApplicationLoading = createSelector(
  selectApplicationState,
  (applicationsState) => applicationsState.loading
);

export const selectApplicationError = createSelector(
  selectApplicationState,
  (applicationsState) => applicationsState.error
);
