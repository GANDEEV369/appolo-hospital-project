import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Form id="contact-form" method="post" action="your-action-url">
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Your Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Your Email" />
                </FormGroup>
                {/* Add more form fields here */}
                <Button id="submit-1" type="submit">
                  Submit
                </Button>
                <div className="alert" id="contact-alert"></div>
              </Form>
            </div>
          </div>
        </div>
        <div className="contact-action2">
          <p>
            Can't read the image?{' '}
            <a href="javascript:void(0);" className="reload-cap">
              <FontAwesomeIcon icon={faRefresh} /> Click here to refresh
            </a>
            .
          </p>
        </div>
        {/* ... (rest of your HTML and styles) ... */}
      </div>
    );
  }
}

export default ContactForm;
