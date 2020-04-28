import moment from "moment"

export class Comment {
    constructor (record = {}) {
        this.name = record.name || 'Аноним'
        this.comment = record.comment || ''
        this.date = record.date || moment().toISOString()
    }
}