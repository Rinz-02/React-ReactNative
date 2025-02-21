import * as React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel"; 

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);
  const [radio,setRadio] = React.useState("Firsr");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      {checked && <RadioGroup value={radio} onChange={(e) => setRadio(e.target.value)}>
        <FormControlLabel value="First" label="First" control={<Radio />} />
        <FormControlLabel value="Second" label="Second" control={<Radio />} />
        <FormControlLabel value="Third" label="Third" control={<Radio />} />
      </RadioGroup>}
    </>
  );
}
