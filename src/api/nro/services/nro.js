'use strict';

/**
 * nro service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nro.nro');
