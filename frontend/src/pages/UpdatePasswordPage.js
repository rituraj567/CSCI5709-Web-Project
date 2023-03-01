import UpdatePassword from "../components/Account/updatepassword";
import ErrorPage from "../components/ErrorPage";
function UpdatePasswordPage() {
  return (
    <div>
      {localStorage.getItem("isUserLoggedIn") ? (
        <div>
          <UpdatePassword />
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}
export default UpdatePasswordPage;
