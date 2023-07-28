
export function formatNumber(num) {
    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
}

export function formattedDate(timeNum){
    const date = new Date(timeNum);
    const year = date.getFullYear();  
    const month = (date.getMonth() + 1).toString().padStart(2, '0');  
    const day = date.getDate().toString().padStart(2, '0');  
    return `${year}-${month}-${day}`;  
  }