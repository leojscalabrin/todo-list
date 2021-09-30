const storage = {
    get: (key) => {
        const data = localStorage.getItem(key)
        const isObject = data?.includes('{') || data?.includes('[')

        return isObject ? JSON.parse(data) : data
    },
    set: (key, data) => {
        const dataType = typeof data

        localStorage.setItem(key, dataType === 'object' ? JSON.stringify(data) : data)
    },
    remove: (key) => localStorage.removeItem(key)
}

export default storage