

export interface Ires<T>{
    msg:string;
    data:T
}

export interface Istd{
    id: string;
    fname: string;
    lname: string;
    email: string;
    contact: string;
    isConfirmed: boolean;
}

export interface Itodo {
    todoid: string;
    title: string;
}