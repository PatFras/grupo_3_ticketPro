import { useLoaderData } from 'react-router';
import { CategoriesInDb } from "../../components/CategoriesInDb";
import { LastProductInDb } from "../../components/LastProductInDb";
import { Metrics } from "../../components/Metrics";

export const HomeAdminPage = () => {
  // Obtén los datos utilizando useLoaderData
  const loaderData = useLoaderData();

  // Verifica si loaderData es null
  if (!loaderData) {
    return <div>Error cargando datos...</div>;
  }

  // Desestructura los datos si loaderData no es null
  const { totalProducts, categories } = loaderData;

  // Verifica si totalProducts o categories son null o undefined
  if (totalProducts === null || categories === null || totalProducts === undefined || categories === undefined) {
    return <div>Error cargando datos...</div>;
  }

  // Resto del código si los datos están disponibles
  return (
    <>
      <Metrics totalProducts={totalProducts} />

      <div className="row">
        <LastProductInDb />
        <CategoriesInDb categories={categories} />
      </div>
    </>
  );
};


