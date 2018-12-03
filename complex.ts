class Complex {
    private re:number;
    private im:number;
    constructor(re:number,im:number){
        this.re = re;
        this.im = im;
    }
    add(Complex2:Complex){
        let re=this.re+Complex2re;
        let im=this.im+Complex2im;
        return new Complex2(re,im);
    }

    let a=new Complex(5,2);
    let b=new Complex (7,3);
    let c=a.add(b);

    substruct(Complex3:Complex){
        let re=this.re-Complex2re;
        let im=this.im-Complex2im;
        return new Complex(re,im);
    }

    let a=new Complex(5,2);
    let b=new Complex (7,3);
    let c=a.substruct(b);

    toString(Complex4:Complex)

    }