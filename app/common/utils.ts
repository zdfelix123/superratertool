import { Badge, Project } from "./constants";
export function titleToNumber(columnTitle: string): number {
    let result = 0

    for(const char of columnTitle){
        result = result * 26 + (char.charCodeAt(0) - 'A'.charCodeAt(0) +1)
    }

    return result
};

export function formatDate(date: Date) {
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: '2-digit' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    return year + '-' + month + '-' + day;
}

export function validateDate(value: string){
    if (Number.isNaN(Date.parse(value))) {
        return Date.now();
    }
    if (value.split('-').length > 1){
        return Date.parse(value  + 'T00:00:00')
    }
    return Date.parse(value);
}

export function getBadge(idx: number, value:string): Badge{
    if (!value) return Badge.UNDEFINED;
    if (idx === 2 && value.toLowerCase() === 'new role') return Badge.NEW_ROLE;
    if (idx === 2 && value.toLowerCase() === 'newbie') return Badge.NEWBIE;
    return Badge.UNDEFINED;
}

export function createMapFromStr(input: string){
    

}

export function stringToArr(input: string){
    if (!input) return [];
    input = input.replace(/"/g, '');
    return input.split(', ');
}

export function arrToObject(input: string[]): Project[]{
    if (!input) return [];
    const names = stringToArr(input[0]);
    const projects = stringToArr(input[1]);
    const res = [];
    for (let i = 0; i < names.length; i++){
        res.push({name: names[i], project: projects[i]});
    }
    return res;
}