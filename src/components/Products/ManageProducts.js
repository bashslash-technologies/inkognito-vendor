import React,{useState,useEffect} from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { ProgressBar  } from 'react-bootstrap';
import { Progress } from 'reactstrap';

export default function ManageProducts(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const response = await fetch('http://localhost:5000/api/v1/product');
            let json = await response.json();
            console.log(json.data)
            setProducts(json.data);
         }
         fetchData();
    }, []);
    return(
           <AUX>
		   <div className="wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group pull-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><Link to="#">Ecommerce</Link></li>
                                    <li className="breadcrumb-item active">Products List</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Products List</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                               

                                <table id="datatable" className="table table-striped dt-responsive nowrap table-vertical" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Added Date</th>
                                            <th>Manufacturer</th>
                                            <th>Price</th>
                                            <th>Category</th>
                                            <th>No. of Units</th>
                                            <th>Stock</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        products.length === 0 ? <p>loading ...</p> : products.map((product)=>{
                                            // {console.log(product)}
                                            return(
                                            <tr key={product._id}>
                                                {console.log(product)}
                                            <td className="product-list-img">
                                                <img src={`/assets/product/${product._id}`} className="img-fluid" alt="tbl" />
                                            </td>
                                            <td>
                                                <h6 className="mt-0 m-b-5">{product.name}</h6>
                                                <p className="m-0 font-14">{product.description}</p>
                                            </td>
                                            <td>{product.createdAt.slice(0,10)}</td>
                                            <td>{product.manufacturer}</td>
                                            {product.color ? <td className="m-0 font-14">{product.color}</td> : <td className="m-0 font-14">-</td> }
                                            <td>{product.categories}</td>
                                            {product.size ? <td className="m-0 font-14">{product.size}</td> : <td className="m-0 font-14">-</td> }
                                            <td>
                                               <Progress style={{height:'8px'}} value={25} /><br></br>
                                            </td>
                                            <td>
                                                <Link to="#" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                                <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                            </td>
                                        </tr>
                                            )
                                        })
                                    }
                                        


                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
           </AUX>
        );
    
}

