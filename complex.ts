class Complex {
    private re:number;
    private im:number;
    constructor(re:number,im:number)
    add(complex2:Complex){
        let re=this.re+complex2re;
        let im=this.im+complex2im;
        return new complex(re,im);
    }
    let a=new complex(5,2)
    let b=new complex (7,3)
    let c=a.add(b);

    substruct(complex2:Complex){
        let re=this.re-complex2re;
        let im=this.im-complex2im;
        return new complex(re,im);
    }
    let a=new complex(5,2)
    let b=new complex (7,3)
    let c=a.substruct(b);

    toString(){}

}