import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
    SideSheet, Position,
    Pane, TextInputField,
    FilePicker, Heading,
    Label, toaster,
    Textarea, SelectMenu,
    Text, TagInput
} from 'evergreen-ui';
import { times } from 'lodash';
import { Get, Post } from '../../../util/transport';
import Dropzone from 'react-dropzone';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';

const ProductsList = () => {

    const [addProductVisible, setAddProductVisible] = useState(false)
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

	const [images, setImages] = useState(null);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [tags, setTags] = useState([]);
	const [price, setPrice] = useState('');
    const [placeholder, setPlaceholder] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);

	const handleImageChange = (files) => {
		if (files[0] !== undefined) {
			setPlaceholder(URL.createObjectURL(files[0]));
			setImages(files);
		} else {
			setPlaceholder(URL.createObjectURL(placeholder));
			setImages(images);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		if (!images) {
			toaster.warning("Please provide product image");
			setLoading(false);
			return;
		}
		if (!name) {
			toaster.warning("Please provide product name");
			setLoading(false);
			return;
		}
		if (!price) {
			toaster.warning("Please provide product price");
			setLoading(false);
			return;
		}
		if (!description) {
			toaster.warning("Please provide product description");
			setLoading(false);
			return;
		}
		const data = new FormData();
		for (let i = 0; i < (images.length < 5 ? images.length : 5); i++) {
			data.append("files", images[i], images[i].name);
		}
		data.append("name", name);
		data.append("description", description);
		data.append("price", price);
		data.append("tags", tags);
		Post("/products", data)
			.then(({data}) => {
				setImages(null);
				setPlaceholder(null);
				if (data.message) {
					toaster.warning(data.message)
				} else {
					setProducts(products.concat(data.payload))
					setFilteredProducts(products.concat(data.payload))
					toaster.success("product added successfully")
				}
				setLoading(false);
				setAddProductVisible(false);
			})
			.catch((err) => {
				toaster.danger(err.message);
				setLoading(false);
			});
	};

	const filterTable = (e) => {
		setFilteredProducts(
			products.filter((product)=>(
				product.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
			))
		)
	}

	const fetchProducts = () => {
		setLoading(true)
		Get('/products')
			.then(({data})=>{
				if (data.message) {
					toaster.warning(data.message)
				} else {
					setProducts(data.payload);
					setFilteredProducts(data.payload);
				}
				setLoading(false)
			})
			.catch((err)=>{
				toaster.danger(err.message)
				setLoading(false)
			})
	}

	const fetchCategories = () => {
		setLoading(true)
		Get('/products/categories')
			.then(({data})=>{
				if (data.message) {
					toaster.warning(data.message)
				} else {
					setCategories(data.payload);
				}
				setLoading(false)
			})
			.catch((err)=>{
				toaster.danger(err.message)
				setLoading(false)
			})
    }
    
    const handleAcceptedFiles = (files) => {
        files.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: formatBytes(file.size)
        }));
        
        setSelectedImages(files)
    }
        
        /**
        * Formats the size
        */
    const formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

	useEffect(() => {
		fetchProducts()
		fetchCategories()
	}, [])

    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="btn-group pull-right">
                            <button className="btn btn-primary btn-sm" onClick={()=>setAddProductVisible(true)}>Add Product</button>
                        </div>
                        <h4 className="page-title">Products</h4>
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
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {times(10, () => (<tr>
                                        <td className="product-list-img">
                                            <img src="assets/images/products/1.jpg" className="img-fluid" alt="tbl" />
                                        </td>
                                        <td>
                                            <h6 className="mt-0 m-b-5">Riverston Glass Chair</h6>
                                            <p className="m-0 font-14">Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..</p>
                                        </td>
                                        <td>22/05/2017</td>
                                        <td>$521</td>
                                        <td>
                                            <Link to="/admin/products/:product_id" className="m-r-15 text-muted"> <i className="mdi mdi-pencil font-18"></i></Link>
                                            <Link to="#" className="text-muted" ><i className="mdi mdi-close font-18"></i></Link>
                                        </td>
                                    </tr>))}                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
            <SideSheet
                isShown={addProductVisible}
                onCloseComplete={()=>setAddProductVisible(false)}
                position={Position.RIGHT}
                preventBodyScrolling
                zIndex={1000}
                width={440}
            >
                <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
                    <Pane padding={16}>
                        <Heading size={600}>Add Product</Heading>
                    </Pane>
                </Pane>
                <Pane
                    padding={20}
                >
                    <div>
                        <Label
                            htmlFor="description"
                            marginBottom={4}
                        >
                            Product Images
                        </Label>
                        <p className="text-muted m-b-30 font-14">Select up to 5 images</p>
                        <section className="my_drop">
                            <Dropzone onDrop={acceptedFiles => handleAcceptedFiles(acceptedFiles)}>
                                {({ getRootProps, getInputProps }) => (
                                    <div className="dropzone">
                                        <div className="dz-message needsclick" {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <i className="h1 text-muted dripicons-cloud-upload"></i>
                                            <h4>Drop files here or click to upload.</h4>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>
                            <div className="dropzone-previews mt-3 mb-4" id="file-previews">
                                {selectedImages.map((f, i) => (
                                    <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete" key={i + "-file"}>
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <Col className="col-auto">
                                                    <img data-dz-thumbnail="" style={{height: '60px', width: '60px'}} className="avatar-sm rounded bg-light" alt={f.name} src={f.preview} />
                                                </Col>
                                                <Col className="pl-0">
                                                    <Link to="#" className="text-muted font-weight-bold">{f.name}</Link>
                                                    <p className="mb-0"><strong>{f.formattedSize}</strong></p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div
                        style={{ flexDirection: 'column', display: 'flex', }}
                    >
                        <TextInputField
                            label="Name"
                            inputHeight={40}
                            inputWidth={400}
                            placeholder="eg. Iphone 11"
                            marginBottom={20}
                            onChange={(e)=>setName(e.target.value)}	
                        />
                        <TextInputField
                            label="Price"
                            inputHeight={40}
                            type="number"
                            min={0.00}
                            inputWidth={400}
                            placeholder="eg. 99.99"
                            marginBottom={20}
                            onChange={(e)=>setPrice(e.target.value)}	
                        />
                        <div
                            style={{ flexDirection: 'column', display: 'flex', }}
                        >
                            <Label
                                htmlFor="description"
                                marginBottom={4}
                            >
                                Description
                            </Label>
                            <Textarea
                                id="description"
                                width={400}
                                placeholder="eg. A smart phone"
                                marginBottom={20}
                                grammarly={true}
                                onChange={(e)=>setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <button disabled={loading} onClick={handleSubmit} className="btn btn-primary" style={{ alignSelf: 'center', display: 'flex', width: 400, justifyContent: 'center', }} >{loading ? "Adding Product":"Add Product"}</button>
                </Pane>
            </SideSheet>
        </div> 
    );
}

export default ProductsList;   