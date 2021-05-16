import React from "react";
import Button from "@material-ui/core/Button";

export default function index({ children, ...otherProps }) {
  return <Button color="secondary">{children}</Button>;
}
