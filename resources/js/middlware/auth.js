export default function () {
    window.axios.get('/api/authenticated')
    .then(resp => resp)
    .catch(err => err)
}