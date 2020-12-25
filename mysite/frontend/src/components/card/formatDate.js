const formatDate = (d) => {
    d = new Date(d) 
    let suffix = d.getHours() >= 12 ? "PM":"AM";
    let hour = (d.getHours() % 12) || 12
    let head = String(d).substring(0,16)

    return head + hour + ":" + d.getMinutes() + suffix
}

export default formatDate