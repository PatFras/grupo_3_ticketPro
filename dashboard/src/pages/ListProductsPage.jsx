import { Row, Col, Card, CardTitle, Table } from "react-bootstrap";
import { FormSearch } from "../components/FormSearch";
import { FormProduct } from "../components/FormProduct";
import { TableItem } from "../components/TableItem";
import { useEffect, useState } from "react";
import { UseFetch } from "../hooks/UseFetch";
import { deleteProduct } from "../services/product.services";
import ReactPaginate from 'react-paginate'

export const ListProductsPage = () => {
  const [products, setProducts] = useState([]);

  const [formValues, setFormValues] = useState({
    id: null,
    name:"",
    price:0,
    description:"",
    serviceCharge:0,
    date:"",
    address:"",
    location:"",
    image:"",
    categoryId:"",
    sectionId:"",
  });

  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const handleEditForm = (idProduct) => {

    const {id,name,price,description,serviceCharge,date,address,location,image,categoryId,sectionId} = products.find(product => product.id === idProduct)
    const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';
    setFormValues({
      id,name,price,description,serviceCharge,date: formattedDate,address,location,image,categoryId,sectionId
    })
  }

  const handleDeleteProduct = async (id) => {
    const {msg} = await deleteProduct(id);
    console.log(msg);
    const productsFiltered = products.filter(product => product.id !== id);

    setProducts([...productsFiltered])
  }

  const getData = async () => {
    const { data } = await UseFetch("products");
    setProducts(data);
  };
  useEffect(() => {
    getData();
  }, []);

/* paginator settings */

const [itemOffset, setItemOffset] = useState(0);

const endOffset = itemOffset + itemsPerPage;
const currentItems = products.slice(itemOffset, endOffset);
const pageCount = Math.ceil(products.length / itemsPerPage);

const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % products.length;
  setItemOffset(newOffset);
};


  return (
    <Row>
      <Col sm={12} lg={4}>
        <Card className="mb-3">
          <Card.Header>
            <CardTitle>{"Agregar"} producto</CardTitle>
          </Card.Header>
          <Card.Body>
            <FormProduct products={products} setProducts={setProducts} formValues={formValues} setFormValues={setFormValues}/>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={8}>
        <Card className="shadow mb-5">
          <Card.Header className="d-flex justify-content-between">
            <FormSearch />
            <ReactPaginate
            pageCount={pageCount}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            marginPagesDisplayed={2}
            containerClassName="pagination justify-content-center cursorPage"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
      
          />
          </Card.Header>
          <Card.Body>
            <Table striped borderless responsive>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Dirección</th>
                  <th>Categoría</th>
                  <th>Sección</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((product, index) => (
                  <TableItem key={product.name + index} product={product} handleEditForm={handleEditForm} handleDeleteProduct={handleDeleteProduct}/>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
