import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { IProduct } from "../../app/models/Products";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: IProduct[] }) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid key={product.id} item xs={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
