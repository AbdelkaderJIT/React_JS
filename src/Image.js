import { prod } from "./product";



function Image() {
    return(
        <>
        <img src={prod.path} alt="test" />
        </>
     )
}

export default Image;