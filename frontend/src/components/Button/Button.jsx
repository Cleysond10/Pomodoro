import React from "react";
import Button from "@material-ui/core/Button";

export default function index({ children, ...otherProps }) {
  return (
    <Button type="button" data-testid="button" color="secondary">
      {children}
    </Button>
  );
}
