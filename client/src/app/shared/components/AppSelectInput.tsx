import { type UseControllerProps, useController } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, type SelectProps } from "@mui/material";
import { type CreateProductSchema } from "../../../lib/schemas/createProductSchema"; // anpassen je nach Pfad

type AppSelectInputProps = {
  label: string;
  items: string[];
} & UseControllerProps<CreateProductSchema> & Partial<SelectProps>;

export default function AppSelectInput({
  label,
  items,
  ...props
}: AppSelectInputProps) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} label={label} value={field.value || ""}>
        {items.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}
