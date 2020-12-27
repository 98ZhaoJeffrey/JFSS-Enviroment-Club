const formatPhoto = (p) => {
    return "http://127.0.0.1:8000" + p.replace("media", "static")
}

export default formatPhoto