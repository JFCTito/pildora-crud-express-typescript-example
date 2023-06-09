import { NewDiaryEntry, Weather, Visibility } from "./types";

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error ('Incorrect or missing comment')
    }

    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}

const parseWeather = (wheatherFromRequest: any): Weather => {
    if (!isString(wheatherFromRequest) || !isWeather(wheatherFromRequest)) {
        throw new Error('Incorrect or missing Weather')
    }
    return wheatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing Visibility')
    }
    return visibilityFromRequest
}

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param);
}

const isString = (string: string): boolean => {
    return typeof string === 'string';
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param);
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }

    return newEntry
}


export default toNewDiaryEntry