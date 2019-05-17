import React, {Component} from 'react';
import Dialog from './Dialog';
import FormErrors from './FormError';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      isSent: false,
      name: '',
      email: '',
      message: '',
      error: false,
      active: false,
      type: '',
      formErrors: {email: '', name: '', message: ''},
    emailValid: false,
    nameValid: false,
    messageValid: false,
    formValid: false
    }
    // BINDINGS
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  // METHODS
handleChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  const errorMsg = name + 'Msg';
  this.setState({[name]: value},
          () => { this.validateField(name, value) });
}

validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let nameValid = this.state.nameValid;
  let messageValid = this.state.messageValid;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'name':
      nameValid = value.length > 0;
      fieldValidationErrors.name = nameValid ? '': ' cannot be empty';
      break;
    case 'message':
    messageValid = value.length > 0 && value.length < 500;
    fieldValidationErrors.message = messageValid ? '': ' must be between 1-500 characters';
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  nameValid: nameValid,
                  messageValid: messageValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.messageValid});
}

errorClass(error) {
   return(error.length === 0 ? '' : 'has-error');
 }


handleSubmit(e) {
  e.preventDefault();
  this.setState({
    active: true
  })

  var check = document.querySelector('.field-email-verify').value;
  var formData = new FormData();
  formData.append('name', this.state.name);
  formData.append('email', this.state.email);
  formData.append('email_verify', check);
  formData.append('message', this.state.message);

  let url = 'php/testmail.php';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: formData, // data can be `string` or {object}!
  }).then(response => {
    console.log('Success:', JSON.stringify(response));
    this.setState({
      isSent: true
    });
    setInterval( () =>
     {
       this.setState({
         isSent: false
       });
     }, 4500);
  }
  )
  .catch(error => {
    this.setState({
      isSent: false
    })
  });
}
  render() {
    return(
      // JSX
      <form noValidate>
      <h2 className='contact-panel__heading'> Need a website or have a question? <span className="highlight">Message me!</span></h2>
      <div className="panel panel-default">
         <FormErrors formErrors={this.state.formErrors} />
      </div>
        <input type="text" id="name" name="name" onChange={this.handleChange} className={`field-user ${this.errorClass(this.state.formErrors.name)}`} name="name" placeholder="Name..." required></input>
        <input type="email" id="email" onChange={this.handleChange} name="email"  className={`field-email ${this.errorClass(this.state.formErrors.email)}`}  placeholder="Email Address..." required></input>
        <input type="email" id="verify" onChange={this.handleChange} name="email_verify" className="field-email-verify"></input>
        <textarea id="message" name="message"  className={`field-message ${this.errorClass(this.state.formErrors.message)}`}  onChange={this.handleChange} maxLength="500" placeholder="Your message.." required></textarea>
        <button type="submit"  onClick={this.handleSubmit} disabled={!this.state.formValid} className= {this.state.isSent ? 'btn-submit submitted' : 'btn-submit'}>  {this.state.isSent ? 'Thank you!' : 'Send'} </button>
      </form>
    )
  }
}

export default ContactForm;
