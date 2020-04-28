import moment from 'moment'

const MONTHS_RU = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
]

export function formatDate(date) {
    return `${moment(date).date()} ${MONTHS_RU[moment(date).month()]} ${moment(date).year()}`
}
