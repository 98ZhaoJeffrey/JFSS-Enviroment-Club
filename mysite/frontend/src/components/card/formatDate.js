const formatDate = (d) => {
    d = new Date(d) 
    let suffix = d.getHours() >= 12 ? "PM":"AM";
    let hour = (d.getHours() % 12) || 12
    let head = String(d).substring(0,16)
    let min = d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes()

    return head + hour + ":" + min + suffix
}

export default formatDate