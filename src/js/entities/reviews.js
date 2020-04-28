export class Reviews {
    constructor (record = {}) {
        this.likes = record.likes || 0
        this.comments = record.comments || 0
    }
}