/**
 * Module dependencies.
 */
//var OAuthStrategy = require('./oauth');
var Strategy = require('./oauth2');


/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.Strategy = Strategy;
//exports.OAuthStrategy = OAuthStrategy;
//exports.OAuth2Strategy = OAuth2Strategy;
