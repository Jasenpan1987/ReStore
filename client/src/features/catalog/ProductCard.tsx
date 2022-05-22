import { IProduct } from "../../app/models/Products";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    // <ListItem key={product.id}>
    //   <ListItemAvatar>
    //     <Avatar src={product.pictureUrl} />
    //   </ListItemAvatar>
    //   <ListItemText>
    //     {product.name} - {product.price}
    //   </ListItemText>
    // </ListItem>
    <Card>
      <CardHeader
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          sx={{
            height: 140,
            backgroundSize: "contain",
            backgroundColor: "primary.light",
          }}
          image={product.pictureUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            color="secondary"
            gutterBottom
            variant="h5"
            component="h5"
          >
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
