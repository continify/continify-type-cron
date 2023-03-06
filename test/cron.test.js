const tap = require('tap')
const { default: defaultCron, cron } = require('..')
const DCron = require('..')

tap.test('cron defined', async t => {
  t.plan(6)

  const r1 = defaultCron({
    name: 'aaa'
  })

  const r2 = cron({
    name: 'bbb'
  })

  const r3 = DCron({
    name: 'ccc'
  })

  const key = Symbol.for('continify.cron.defined')

  t.equal(r1.name, 'aaa')
  t.equal(r1[key], true)
  t.equal(r2.name, 'bbb')
  t.equal(r2[key], true)
  t.equal(r3.name, 'ccc')
  t.equal(r3[key], true)
})
