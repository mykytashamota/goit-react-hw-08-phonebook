import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/slice';
import { TextField } from '@mui/material';

// const filterBarBoxStyles = {
//   // marginLeft: 15,
// };

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        color="secondary"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value.toLowerCase()))}
        size="small"
        sx={{
          marginLeft: '15px',
          marginTop: '18px',
        }}
      />
    </>
  );
};
