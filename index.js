'use strict';

/**
 * Initial haley-js-api module with embedded dependencies
 */
module.exports = {
		
  //exports 3 modules
		
  VitalService: require('./lib-vital/vitalservice-js/vitalservice-0.2.304.js'),
  
  HaleyAPI: require('./lib-vital/haley-js-api/haley-js-api-0.0.1.js'),
  
  HaleyAPIVitalServiceImpl: require('./lib-vital/haley-js-api/haley-js-mock-implementation-0.0.1.js'),
			
  vitaljs: require('./lib-vital/vitalservice-js/vitalservice-json-0.2.304.js').vitaljs,
  
  VitalServiceJson: require('./lib-vital/vitalservice-js/vitalservice-json-0.2.304.js').VitalServiceJson,
  
};
