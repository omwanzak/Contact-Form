document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
    
      // Clear previous error messages
      document.getElementById('nameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('queryError').textContent = '';
      document.getElementById('messageError').textContent ='';
      document.getElementById('consentError').textContent = '';

      // Retrieve and trim input values
      const name1 = document.getElementById('fname').value.trim();
      const name2 = document.getElementById('lname').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('textplace').value.trim();


      let valid = true;

      // Validate name
      if (name1 === '') {
        document.getElementById('name1Error').textContent = 'This field is required.';
        valid = false;
      }

      if (name2 === '') {
        document.getElementById('nameError').textContent = 'This field is required.';
        valid = false;
      }

      // Validate email
      if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
      } else {
        
        // Basic email regex for validation
        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailPattern.test(email)) {
          document.getElementById('emailError').textContent = 'Please enter a valid email address.';
          valid = false;
        }
      }

        // Validate radio group (query type)
        const querySelected = document.querySelector('input[type="radio"]:checked');
        if (!querySelected) {
          document.getElementById('queryError').textContent = 'Please select a query type.';
          valid = false;
        }

        if (message === '') {
            document.getElementById('messageError').textContent = 'This field is required.';
            valid = false;
          }





        // Validate checkbox (consent)
        const consentChecked = document.getElementById('consent-checkbox').checked;
        if (!consentChecked) {
          document.getElementById('consentError').textContent = 'To submit this form please consent to being contacted.';
          valid = false;
        }
    // If form is valid, display a success message or proceed with submission
    if (valid) {
        alert('Form submitted successfully!');
        form.reset();
      }
    });
  });