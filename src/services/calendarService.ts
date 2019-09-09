const isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();
}

const formatTime = (time: Date): string => {
    let date = new Date(time);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let hoursStr = hours > 10 ? `${hours}` : `0${hours}`;
    let minutesStr = minutes > 10 ? `${minutes}` : `0${minutes}`;
    const movieTime = `${hoursStr}:${minutesStr} `;
    
    return movieTime;
}

const formatDate = (date: Date): string => {
    let options = { month: 'long', day: 'numeric' }
    let formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}

export {isSameDay, formatTime, formatDate}