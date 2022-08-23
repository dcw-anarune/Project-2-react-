# DOKUMENTASI

## Sequelize script

```bash
npx sequelize-cli model:generate --name user --attributes name:string,no_hp:string,alamat:string

npx sequelize-cli model:generate --name brand --attributes name:string,homepage:string,logo:string

npx sequelize-cli model:generate --name item --attributes name:string,harga:integer,gambar:string,stock:integer,userId:integer,brandId:integer

npx sequelize-cli model:generate --name transaksi --attributes name:string,alamat:string,tanggal:string,jumlah:integer,total_harga:integer,itemId:integer


naiddd
```
