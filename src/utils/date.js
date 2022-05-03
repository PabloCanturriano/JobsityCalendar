import dayjs from 'dayjs';

export function getCalendarDays(month, year) {
    const initialDate = `${year}-${month}-01`;
    const firstDayOfWeek = dayjs(initialDate).format('d');

    const monthDays = getMonthDays(month, year, dayjs(initialDate).daysInMonth());
    const previousMonthDays = getPreviousMonthDays(month, year, firstDayOfWeek);

    const countDays = [...previousMonthDays, ...monthDays].length;
    const nextMonthDays = getNextMonthDays(month, year, countDays);

    return {
        monthDays,
        previousMonthDays,
        nextMonthDays,
        totalCount: monthDays.length + previousMonthDays.length + nextMonthDays.length
    }
}

function getMonthDays(month, year, numberOfdaysInMonth) {
    let monthDays = [];

    for (let i = 1; i <= numberOfdaysInMonth; i++) {
        monthDays.push(formatDay(i, month, year));
    }

    return monthDays;
}

function getPreviousMonthDays(month, year, firstDayOfWeek) {
    let previousMonth = month - 1;
    if (previousMonth < 0) previousMonth = 12;

    const prevMonthDays = dayjs(`${year}-${previousMonth}-01`).daysInMonth();
    const initialDay = (prevMonthDays - firstDayOfWeek) + 1;
    const previousDays = [];

    for (let i = initialDay; i <= prevMonthDays; i++) {
        previousDays.push(formatDay(i, previousMonth, year));
    }

    return previousDays;
}

function getNextMonthDays(month, year, countDays) {
    let nextMonth = month + 1;

    if (nextMonth > 12){
        nextMonth = 1;
    }

    let numberOfDays = 35 - countDays;
    if (numberOfDays < 0) numberOfDays = 42 - countDays;

    const nextMonthDays = [];

    for (let i = 1; i <= numberOfDays; i++) {
        nextMonthDays.push(formatDay(i, nextMonth, year));
    }

    return nextMonthDays;
}

function formatDay(day, month, year) {
    return {
        day: Number(day),
        month: Number(month),
        year: Number(year),
        date: dayjs(`${year}-${month}-${day}`).format('YYYY-MM-DD')
    }
}

export function getNextMonth(month, year){
    const shouldIncrementYear = month + 1 >= 12;
    return { month: shouldIncrementYear ? 1 : month + 1, year: shouldIncrementYear ? year + 1 : year  };
}

export function getPreviousMonth(month, year){
    const shouldDecrementYear = month - 1 <= 0;
    return { month: shouldDecrementYear ? 12 : month - 1, year: shouldDecrementYear ? year - 1 : year  };
}

export function getActualMonthAndYear(){
    return {
        month: parseInt(dayjs().format('MM')),
        year: parseInt(dayjs().format('YYYY'))
    }
}

export function getByDate( dateValue, dateKey, collection ){
    return collection.filter( item => dayjs(item[dateKey]).isSame(dayjs(dateValue)) );
}

export default { getCalendarDays, getNextMonth, getPreviousMonth, getActualMonthAndYear };

