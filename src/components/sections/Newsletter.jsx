import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Newsletter = () => {
  return (
    <div>
      <div className="mt-20 flex-col text-clr">
        <h1 className="mb-2 font-bold text-4xl text-center tracking-wide">Subscribe To Newsletter</h1>
        <p className="font-light text-m text-center tracking-tight">
          Subscribe to our newsletter to get amazing offers in future.
        </p>
      </div>
      <div className="flex justify-center items-center mt-12 ">
        <form className="flex items-center gap-2">
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            className="w-80"
            autoComplete='off'
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#42454A",
              height: "48px",
            }}
          >
           Get start
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
