const regex = /listings/g

let store = JSON.parse(localStorage.getItem('steam_trade'));

if (!store) {
    store = JSON.parse(localStorage.setItem('steam_trade', JSON.stringify([])));
}

console.log(typeof store);

export const parse = (doc) => {
    let duplicate = true;

    for (let e of doc) {
        if (e.localName === 'a') {
            if (regex.test(e.href)) {
                if (store.length) {
                    for (let url of store) {
                        
    
                        if (url === e.href) {
                            duplicate = false;
                        }
                    }
        
                    if (duplicate) {
                        store.push(e.href);
                    }  
                    
                    duplicate = true;

                } else {
                    store.push(e.href);
                }
            } 
        }
       
        parse(e.children);
    }

    localStorage.setItem('steam_trade', JSON.stringify(store))    
}