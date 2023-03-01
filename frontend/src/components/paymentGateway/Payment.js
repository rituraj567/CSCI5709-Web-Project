import "./Payment.css";
import { useFormik } from "formik";
import { card } from "./PaymentValidation";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../Header";

const initialValues = {
  name: "",
  card: "",
  expiry: "",
  cvv: "",
  radiobuttons: "a",
};
function Payment() {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: card,
      onSubmit: (values, action) => {
        action.resetForm();
      
      },
    });
  console.log("errors", errors);

  let title = "Payment";
  const primaryColor = "#2B2D42";
  const selectedColor = "#EF233C";

  return (
    <div className="pg">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <Header />
      <h1 style={{ fontWeight: "bold" }}>Payment Gateway</h1>
      <div className="form-layout">
        <form onSubmit={handleSubmit} sx={{ display: "flex", gap: 2 }}>
          <div className="mode">
            <input
              type="radio"
              checked={values.radiobuttons === "a"}
              onChange={handleChange}
              value="a"
              name="radiobuttons"
              id="option-1"
            />
            <input
              type="radio"
              checked={values.radiobuttons === "b"}
              onChange={handleChange}
              value="b"
              name="radiobuttons"
              id="option-2"
            />
            <input
              type="radio"
              checked={values.radiobuttons === "c"}
              onChange={handleChange}
              value="c"
              name="radiobuttons"
              id="option-3"
            />
            <label htmlFor="option-1" className="option option-1">
              <div className="dot"></div>
              <span>Credit</span>
            </label>

            <label htmlFor="option-2" className="option option-2">
              <div className="dot"></div>
              <span>Debit</span>
            </label>

            <label htmlFor="option-3" className="option option-3">
              <div className="dot"></div>
              <span>Wallet</span>
            </label>
          </div>

          {values.radiobuttons === "a" && (
            <div className="form">
              <div>
                <input
                  type="text"
                  style={{ width: 500, padding: 12, margin: 8 }}
                  id="formfield"
                  value={values.name}
                  onBlur={handleBlur}
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter name on card"
                  required
                />
                {errors.name && touched.name ? (
                  <p className="form-error">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <input
                  type="number"
                  style={{ width: 500, padding: 12, margin: 8 }}
                  name="card"
                  value={values.card}
                  onBlur={handleBlur}
                  placeholder="Enter credit card number"
                  onChange={handleChange}
                  required
                />
                {errors.card && touched.card ? (
                  <p className="form-error">{errors.card}</p>
                ) : null}
              </div>

              <div>
                <input
                  type="month"
                  style={{ width: 500, padding: 12, margin: 8 }}
                  id="formfield"
                  value={values.expiry}
                  onBlur={handleBlur}
                  name="expiry"
                  placeholder="Expiry"
                  onChange={handleChange}
                  min={2023}
                  required
                />
                {errors.expiry && touched.expiry ? (
                  <p className="form-error">{errors.expiry}</p>
                ) : null}
              </div>

              <div>
                <input
                  type="number"
                  style={{ width: 500, padding: 12, margin: 8 }}
                  placeholder="CVV"
                  value={values.cvv}
                  onBlur={handleBlur}
                  name="cvv"
                  onChange={handleChange}
                  required
                />
                {errors.cvv && touched.cvv ? (
                  <p className="form-error">{errors.cvv}</p>
                ) : null}
              </div>
              <Button
                aria-label="Submit"
                sx={{
                  background: primaryColor,
                  textTransform: "none",
                  height: "2.5rem",
                  "&:hover": {
                    backgroundColor: selectedColor,
                  },
                }}
                type="submit"
                variant="contained"
                onClick={() => navigate("success")}
              >
                Pay
              </Button>
              
            </div>
          )}

          {values.radiobuttons === "b" && (
            <div className="form">
              <div>
                <input
                  type="text"
                  style={{ width: 500, padding: 12, margin: 8 }}
                  id="formfield"
                  value={values.name}
                  onBlur={handleBlur}
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter name on card"
                  required
                />
                {errors.name && touched.name ? (
                  <p className="form-error">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <input
                  type="number"
                  style={{ width: 500, padding: 12, margin: 8 }}
                  name="card"
                  value={values.card}
                  onBlur={handleBlur}
                  placeholder="Enter credit card number"
                  onChange={handleChange}
                  required
                />
                {errors.card && touched.card ? (
                  <p className="form-error">{errors.card}</p>
                ) : null}
              </div>

              <div>
                <input
                  type="month"
                  style={{ width: 500, padding: 12, margin: 8 }}
                  id="formfield"
                  value={values.expiry}
                  onBlur={handleBlur}
                  name="expiry"
                  placeholder="Expiry"
                  onChange={handleChange}
                  min={2023}
                  required
                />
                {errors.expiry && touched.expiry ? (
                  <p className="form-error">{errors.expiry}</p>
                ) : null}
              </div>

              <div>
                <input
                  type="number"
                  style={{ width: 500, padding: 12, margin: 8 }}
                  placeholder="CVV"
                  value={values.cvv}
                  onBlur={handleBlur}
                  name="cvv"
                  onChange={handleChange}
                  required
                />
                {errors.cvv && touched.cvv ? (
                  <p className="form-error">{errors.cvv}</p>
                ) : null}
              </div>
              <Button
                aria-label="Submit"
                sx={{
                  background: primaryColor,
                  textTransform: "none",
                  height: "2.5rem",
                  "&:hover": {
                    backgroundColor: selectedColor,
                  },
                }}
                type="submit"
                variant="contained"
                onClick={() => navigate("success")}
              >
                Pay
              </Button>
              
            </div>
          )}

          {values.radiobuttons === "c" && (
            <div className="form">
              <h3>Shobhit Arora</h3>
              <h3>Available Balance: $20</h3>
              <input
                type="number"
                style={{ width: 500, padding: 12, margin: 8 }}
                placeholder="Top Up Amount"
                required
              />
              <br></br>
              <Button
                aria-label="Submit"
                sx={{
                  background: primaryColor,
                  textTransform: "none",
                  height: "2.5rem",
                  "&:hover": {
                    backgroundColor: selectedColor,
                  },
                }}
                type="submit"
                variant="contained"
                onClick={() => navigate("success")}
              >
                Pay
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Payment;
