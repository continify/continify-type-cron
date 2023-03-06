const kCronDefined = Symbol.for('continify.cron.defined')

function cron (opts) {
  opts[kCronDefined] = true
  return opts
}

module.exports = cron
module.exports.default = cron
module.exports.cron = cron
