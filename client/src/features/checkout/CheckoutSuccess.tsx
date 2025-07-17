import { Box, Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import type { Order } from "../../app/models/order";
import { currencyFormat } from "../../lib/util";

export default function CheckoutSuccess() {
  const{state} = useLocation();
  const order = state.data as Order;

  if(!order) return <Typography>Problem accessing the order</Typography>

  const addressString = () => {
    const address = order.shippingAddress;

    return `${address?.name}, ${address?.line1}, ${address?.city}, ${address?.state},
         ${address?.postal_code}, ${address?.country}`
  }
  const paymentString = () => {
    const card = order.paymentSummary;

    return `${card?.brand?.toUpperCase()}, **** **** **** ${card?.last4},
            Exp: ${card?.exp_month}/${card?.exp_year}`;
  }

  return (
    <Container maxWidth='md'>
      <>
        <Typography variant="h4" gutterBottom fontWeight='bold'>
          Thanks for your Order!
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Your order <strong>#{order.id}</strong> will be processed.
        </Typography>

        <Paper elevation={1} sx={{p: 2, mb: 2, display: 'flex', flexDirection: 'column', gap: 1}}>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="body2" color="textSecondary">
              Order date
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {order.orderDate}
            </Typography>
          </Box>
          <Divider />
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="body2" color="textSecondary">
              Payment Method
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {paymentString()}
            </Typography>
          </Box>
          <Divider />
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="body2" color="textSecondary">
              Shipping address
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {addressString()}
            </Typography>
          </Box>
          <Divider />
          <Box display='flex' justifyContent='space-between'>
            <Typography variant="body2" color="textSecondary">
              Amount
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {currencyFormat(order.total)}
            </Typography>
          </Box>
        </Paper>

        <Box display='flex' justifyContent='flex-start' gap={2}>
          <Button variant="contained" color="primary" component={Link} to={`/orders/${order.id}`}>
            View your order
          </Button>
          <Button variant="outlined" color="primary" component={Link} to={'/catalog'}>
            Continue shopping
          </Button>
        </Box>
      </>
    </Container>
  )
}