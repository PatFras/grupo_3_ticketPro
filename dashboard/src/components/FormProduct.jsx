import { Button, Form } from "react-bootstrap";
import { UseFetch } from "../hooks/UseFetch";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createProduct, updateProduct } from "../services/product.services";

export const FormProduct = ({
  products,
  setProducts,
  formValues,
  setFormValues,
}) => {
  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);

  const getData = async () => {
    const categories = await UseFetch("categories");
    const sections = await UseFetch("sections");

    setCategories([...categories.data]);
    setSections([...sections.data]);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (
      [
        formValues.name,
        formValues.price,
        formValues.description,
        formValues.serviceCharge,
        formValues.date,
        formValues.address,
        formValues.location,
        //formValues.image,
        formValues.categoryId,
        formValues.sectionId,
      ].includes("")
    ) {
      alert("No se debe enviar vacío el formulario");
      return;
    }

    if (formValues.id) {
      const { data } = await updateProduct(formValues)

      const productsUpdated = products.map((product) => {
        if (product.id == data.id) {
          product = data;
        }
        return product;
      });

      setProducts([...productsUpdated]);
    } else {
      const { data } = await createProduct(formValues)
      setProducts([...products, data]);
    }

    setFormValues({
      id: null,
      name:"",
      price:"",
      description:"",
      serviceCharge:"",
      date:"",
      address:"",
      location:"",
      image:"",
      categoryId:"",
      sectionId:"",
    });
  };

  return (
    <Form className="row" onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3 col-12">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre del producto..."
          name="name"
          onChange={handleInputChange}
          value={formValues.name}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          name="image"
          type="file"
          id="formFile"
          onChange={handleInputChange}
          /* value={formValues.image} */
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          name="price"
          type="number"
          onChange={handleInputChange}
          value={formValues.price}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Cargo de servicio</Form.Label>
        <Form.Control
          type="number"
          name="serviceCharge"
          onChange={handleInputChange}
          value={formValues.serviceCharge}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          name="date"
          type="date"
          onChange={handleInputChange}
          value={formValues.date}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type="text"
          name="address"
          onChange={handleInputChange}
          value={formValues.address}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control
          type="text"
          name="location"
          onChange={handleInputChange}
          value={formValues.location}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Sección</Form.Label>
        <Form.Select
          className="form-control"
          name="sectionId"
          onChange={handleInputChange}
        >
          <option hidden defaultValue>
            Selecciona...
          </option>
          {sections.map((section, index) =>
            section.id == formValues.sectionId ? (
              <option key={index + section.name} selected value={section.id}>
                {section.name}
              </option>
            ) : (
              <option key={index + section.name} value={section.id}>
                {section.name}
              </option>
            )
          )}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-12 col-md-6">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          className="form-control"
          name="categoryId"
          onChange={handleInputChange}
        >
          <option defaultValue hidden>
            Selecciona...
          </option>
          {categories.map((category, index) =>
            category.id == formValues.categoryId ? (
              <option selected key={index + category.name} value={category.id}>
                {category.name}
              </option>
            ) : (
              <option key={index + category.name} value={category.id}>
                {category.name}
              </option>
            )
          )}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 col-12 ">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          name="description"
          onChange={handleInputChange}
          value={formValues.description}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12">
        <div className="d-flex justify-content-around">
          <Button variant="outline-secondary"><a href="/products">Cancelar</a></Button>
          <Button type="submit" variant="outline-primary">
            Guardar
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

FormProduct.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
};
