import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  typo: {
    flexGrow: 1,
    textAlign: "left",
    marginLeft: 60
  }
}));

export const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default { useStyles, label }