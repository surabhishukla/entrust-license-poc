import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CustomCard, CustomCardContent } from "./GenerateLicense";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import { RadioGroup } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "./../../../App";

const LimitationDetails = () => {
  const { state, setState } = useContext(AppContext);
  const [radioValue, setRadioValue] = useState("No expiry Date");

  const radioHandler = (e) => {
    setRadioValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Limitations</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              The limit count needs to be between 1 and 40
            </Typography>
          </Grid>
          <Grid item container xs pt={1}>
            <Grid item>
              <TextField
                label="Limit Count"
                variant="outlined"
                size="small"
                required
                value={state.limitation.limitCount}
                onChange={(e) =>
                  setState({
                    ...state,
                    limitation: {
                      ...state.limitation,
                      limitCount: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item pr={1}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Site license or unlimited"
              />
            </Grid>
          </Grid>
        </CustomCardContent>

        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Expiration date</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              The expiration date can be set to none, a specific day count from
              today on, or a set date.
            </Typography>
          </Grid>
          <Grid item mb={2}>
            <RadioGroup
              name="use-radio-group"
              defaultValue="No expiry Date"
              onChange={radioHandler}
              value={radioValue}
            >
              <FormControlLabel
                value="No expiry Date"
                label="No expiry Date"
                control={<Radio />}
              />
              <Grid item container xs pt={1}>
                <Grid item xs pr={2}>
                  <FormControlLabel
                    value="Expiry in days:"
                    label="Expiry in days:"
                    control={<Radio />}
                  />
                </Grid>
                <Grid item xs pr={2}>
                  <TextField
                    disabled={radioValue !== "Expiry in days:"}
                    label="Number of days"
                    variant="outlined"
                    size="small"
                    required
                    value={state.limitation.expiration}
                    onChange={(e) =>
                      setState({
                        ...state,
                        limitation: {
                          ...state.limitation,
                          expiration: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
              </Grid>
              <Grid item container xs pt={1}>
                <Grid item xs pr={2}>
                  <FormControlLabel
                    value="Specific date"
                    label="Specific date"
                    control={<Radio />}
                  />
                </Grid>

                <Grid item xs pr={2}>
                  <TextField
                    disabled={radioValue !== "Specific date"}
                    defaultValue={new Date().toISOString()}
                    inputProps={{
                      min: new Date().toISOString().slice(0, 16)
                    }}
                    variant="outlined"
                    label="Birthday"
                    placeholder="Birthday"
                    type="datetime-local"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default LimitationDetails;
