let count = 0;

export default {
    _setCount(_count) {
        count = _count
    },
    async getNotifications() {
        console.log('GOOD JOB! using mock')
        return { count }
    }
}