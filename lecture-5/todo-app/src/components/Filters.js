import React from "react";

import { VisibilityFilters } from "../actions";
import LinkFilter from "./LinkFilter";

const Filters = () => (
  <div>
    <span>Show: </span>
    <LinkFilter filter={VisibilityFilters.SHOW_ALL}>All</LinkFilter>
    <LinkFilter filter={VisibilityFilters.SHOW_ACTIVE}>Active</LinkFilter>
    <LinkFilter filter={VisibilityFilters.SHOW_COMPLETED}>Completed</LinkFilter>
  </div>
);

export default Filters;
