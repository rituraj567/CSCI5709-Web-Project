import React from "react";
import Wallet from "../components/wallet/Wallet";
import ErrorPage from "../components/ErrorPage";

function CheckoutPage() {
  return (
    <div>
      {localStorage.getItem("isUserLoggedIn") ? (
        <div>
          <Wallet />
        </div>
      ) : (
        <Wallet />
      )}
    </div>
  );
}

export default CheckoutPage;