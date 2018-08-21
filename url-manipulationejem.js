let cl= console.log

function addorChangeUrlParameter(url, Keyvalue) {
    //detectar si la url tiene parametros
            //split()???
    if (!url.includes('?')){
                //si no tiene
       //agrego parametros
    return url + '?' + keyValue
    } else{
        //si si tiene
        let key = keyValue.split('=')[0]
        if (url.includes('?'+key+'=') || url.includes('&'+key+'=')){
            //si si esta 
                //remplazo
                let domain = url.split('?')[0]//'www.example.com'
                let params = url.split('?')[1]//'a=1&b=2&c=3'
                let arrParams= params.split('&') //['a=1','b=2', 'c=3']
                let nuevosParams = []
                arrParams.forEach(param => {
                    if (param.split('=')[0] === key)
                        nuevosparams.push(keyValue)
                });
        }else{
            //si no esta
                //concateno
                return url + '&' + keyValue
        }
    }

    
        //revisa si mi key ya esta
            
            
    
    let siTiene= include.slice(search.indexOf('?') + 1).split('&')
    let params={}

    siTiene.map(hash => {
        let [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    })

    return params


}

cl(addorChangeUrlParameter("www.example.com", "key=value")) 
// -> 'www.example.com?key=value' (adds a parameter).


cl(addorChangeUrlParameter("www.example.com?key=value", "key2=value2" )) 
// -> 'www.example.com?key=value&key2=value2' (adds another parameter).


cl(addorChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue")) 
// ->'www.example.com?key=newValue' (changes the parameter).