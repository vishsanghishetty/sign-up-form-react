import React from "react";

function App() {

  const [formData, setFormData] = React.useState(
    {
      "email": "",
      "password": "",
      "confirm_pwd": "",
      "isJoined": false

    }
)

  function handleChange(event) {
    
    
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value

      }
    })
  }

  function handleClick(event) {
    event.preventDefault()
    formData.password === formData.confirm_pwd ?
        console.log('Successfully signed up') :
      console.log('Failed to sign up')
    
   formData.isJoined ? console.log('Thanks for signing up for our newsletter!') : console.log('')
}

  return (
    <div className="App">
      <header className="app-header">
        Sign Up form
      </header>
      <form className="form-container">
          <input 
                    type="email" 
                    placeholder="Email address"
                    className="form-input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
        <input
          onChange={handleChange}
          type="password"
          className="form-input"
          placeholder="Password"
          name="password"
          value={formData.password}

        />
        <input
          onChange={handleChange}
          type="password"
          className="form-input"
          placeholder="Confirm password"
          name="confirm_pwd"
          value={formData.confirm_pwd}

        />
        <div className="newsletter-container">
        <input
          onChange={handleChange}
          type="checkbox"
          name="isJoined"
          value={formData.isJoined}
          className="checkbox"  
        />
          <label className="checkbox-label">I want to join the newsletter?</label>
          </div>
    <button className="form-button" onClick={handleClick}>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
