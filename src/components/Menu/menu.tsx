import { Button } from '@mui/material'

type Props = {}
const menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">Cart</Button>
        </>
    )
}
export default menu
