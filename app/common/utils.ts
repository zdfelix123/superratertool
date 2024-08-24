
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
    return year + '-' + month + '-' + day + 'T00:00:00';
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
