export class Consultant {
    constructor (record = {}) {
        this.avatar = record.avatar || ''
        this.name = record.name || ''
        this.profession = record.profession || 'Неизвестно'
        this.about = record.about|| ''
        this.services = record.services || []
    }
}