import React from "react";
import Button from "@material-ui/core/Button";

export default function index({ children, ...otherProps }) {
  return (
    <Button type="button" color="secondary">
      {children}
    </Button>
  );
}
