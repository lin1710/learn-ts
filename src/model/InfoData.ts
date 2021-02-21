// 数据模型的封装

class InfoData {
    id:number
    uname:string
    address:string
    constructor(id:number=-1,uname:string='张三',address:string='重庆') {
        this.id=id
        this.uname=uname,
        this.address=address
    }
}
export default InfoData