import React from "react";
import "./donate-styles.scss";
import FormInput from "../../components/form-input/form-input-coponent";

class DonateNow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="donatenow">
        <div className="donatenow-heading">
          {" "}
          <h1>Donate Now</h1> <h3>I would like to donate</h3>
        </div>
        <div className="donate-form-container">
          <form className="donate-form">
            <FormInput
              name="email"
              value={this.state.email}
              label="Email"
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="firstname"
              value={this.state.email}
              label="First Name"
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="lastname"
              value={this.state.email}
              label="Last Name"
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="password"
              value={this.state.password}
              label="Password"
              handleChange={this.handleChange}
              required
            />
          </form>
        </div>
      </div>
    );
  }
}

export default DonateNow;
