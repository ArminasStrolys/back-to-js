const ajaxService = (term) => {
const url = 'htpps://api.postit.lt/?term=';
const key = 'UNFYHJYNHGwWmFmG5Go1' ;
return fetch(`${url}${term}&key=${key}`)
.then(res => res.json())
}

export default ajaxService