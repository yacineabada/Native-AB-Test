let sessioncount=2;



const giveARandomVariant = () => {
    if (sessioncount % 2 == 0)
    {
        localStorage.setItem('variant','A')
        return 'A';
    }
    
    else
        {
        localStorage.setItem('variant','B')
        return 'B';
    }
    
}

const checkforvariant = () => {
    if(localStorage.getItem('variant')){
        return localStorage.getItem('variant');
    }
    else{return giveARandomVariant() }
}

const variant = checkforvariant()

const button = document.querySelector("button")

const assignvarianttohtml = ()=>{
    if(variant=='A'){
        console.log(variant);
        button.style.backgroundColor='red'
    }
    else button.style.backgroundColor='blue'
}

assignvarianttohtml();

