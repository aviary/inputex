/**
 * Create a password input
 *
 * @class inputEx.PasswordField
 * @extends inputEx.Field
 * @constructor
 * @param {Object} options Same as parent class options
 */
inputEx.PasswordField = function(options) {
	inputEx.PasswordField.superclass.constructor.call(this,options);
	
	this.options.messages.invalid = inputEx.messages.invalidPassword;
	this.options.regexp = inputEx.regexps.password;
};
YAHOO.lang.extend(inputEx.PasswordField, inputEx.Field, {
   /**
    * Set the el type to 'password'
    */
   renderComponent: function() {
      // IE doesn't want to set the "type" property to 'password' if the node has a parent
      // even if the parent is not in the DOM yet !!
      
   	// Attributes of the input field
      var attributes = {};
      attributes.type = 'password';
      attributes.size = this.options.size;
      if(this.options.name) attributes.name = this.options.name;

      // Create the node
   	this.el = inputEx.cn('input', attributes);

   	// Append it to the main element
   	this.divEl.appendChild(this.el);
   }
});

// Specific message for the password field
inputEx.messages.invalidPassword = "Invalid password, schould contain at least 5 numbers or caracters";

/**
 * Register this class as "password" type
 */
inputEx.registerType("password", inputEx.PasswordField);
