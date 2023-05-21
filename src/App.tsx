import GuidesAccordion from "./components/Guides";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <div className="w-full">
      <Navbar />
      <GuidesAccordion />
      {/* <div id="modal-signup" className="modal">
        <div className="modal-content">
          <h4>Sign up</h4>
          <br />
          <form id="signup-form">
            <div className="input-field">
              <input type="email" id="signup-email" required />
              <label htmlFor="signup-email">Email address</label>
            </div>
            <div className="input-field">
              <input type="password" id="signup-password" required />
              <label htmlFor="signup-password">Choose password</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0">Sign up</button>
          </form>
        </div>
      </div> */}

      {/* <div id="modal-login" className="modal">
        <div className="modal-content">
          <h4>Login</h4>
          <br />
          <form id="login-form">
            <div className="input-field">
              <input type="email" id="login-email" required />
              <label htmlFor="login-email">Email address</label>
            </div>
            <div className="input-field">
              <input type="password" id="login-password" required />
              <label htmlFor="login-password">Your password</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0">Login</button>
          </form>
        </div>
      </div> */}

      {/* <div id="modal-account" className="modal">
        <div className="modal-content center-align">
          <h4>Account details</h4>
          <br />
          <div className="account-details"></div>
        </div>
      </div> */}

      {/* <div id="modal-create" className="modal">
        <div className="modal-content">
          <h4>Create Guide</h4>
          <br />
          <form id="create-form">
            <div className="input-field">
              <input type="text" id="title" required />
              <label htmlFor="title">Guide Title</label>
            </div>
            <div className="input-field">
              <textarea
                id="content"
                className="materialize-textarea"
                required
              ></textarea>
              <label htmlFor="content">Guide Content</label>
            </div>
            <button className="btn yellow darken-2 z-depth-0">Create</button>
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default App;
