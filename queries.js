

const Pool = require("pg").Pool ;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database: "nodeJS",
    password: "7086" ,
    port: 5432

})


const getCustomers = (req,res) => {
 
    pool.query( "select * from customer order by first_name",
    (error,results)=> {
if(error) {
    throw error
} res.status(200).json(results.rows)

    }

    )
}

const getOneCustomer = (req,res) => {
    const id = parseInt(req.params.id) ;

    pool.query("select * from customer where customer_id =$1",[id],
    (error,results)=> {
        if(error) {
            throw error 
        }res.status(200).json(results.rows)
    })
    }





module.exports = {getCustomers, getOneCustomer}