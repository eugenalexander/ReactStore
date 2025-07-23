import { TextField } from "@mui/material";
import { type UseControllerProps, useController } from "react-hook-form";
import type { CreateProductSchema } from "../../../lib/schemas/createProductSchema";

type AppTextInputProps = {
  label: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
} & UseControllerProps<CreateProductSchema>;

export default function AppTextInput({
  label,
  type = "text",
  multiline = false,
  rows,
  ...props
}: AppTextInputProps) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <TextField
      {...field}
      type={type}
      label={label}
      fullWidth
      multiline={multiline}
      rows={rows}
      error={!!error}
      helperText={error?.message}
    />
  );
}
