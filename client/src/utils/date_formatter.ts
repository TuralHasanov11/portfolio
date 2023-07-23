export default function dateMonthYearFormatter(date: string){
    if (!date) return "Current"
    const obj = new Date(date)
    return obj.toLocaleString('default', { month: 'long' }) + " " + obj.getFullYear()
}