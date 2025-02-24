import { HelmetComponent } from "../components/common";
import {
  Hero,
  ProductsContent,
  Services,
  Timer,
} from "../components/eCommerce";
import useHome from "../hooks/useHome";
const Home = () => {
  const { filteredProducts } = useHome();
  return (
    <HelmetComponent title="Home">
      <Hero />
      <Services />
      <ProductsContent
        filteredByCategory={filteredProducts("mobile")}
        title="Trending Products"
      />
      <ProductsContent
        filteredByCategory={filteredProducts("watch")}
        title="Best Sales"
      />
      <Timer />
      <ProductsContent
        filteredByCategory={filteredProducts("sofa")}
        title="New Arrivals"
      />
      <ProductsContent
        filteredByCategory={filteredProducts("chair")}
        title="Popular In Category"
      />
    </HelmetComponent>
  );
};

export default Home;
