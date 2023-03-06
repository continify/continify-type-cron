import { CronOptions } from 'continify-cron'

export type CronDefined = (options: CronOptions) => CronOptions

export const cron: CronDefined
export default cron
export = cron
