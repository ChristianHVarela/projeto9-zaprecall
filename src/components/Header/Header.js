import { HeaderPrincipal } from "./style"
import Logo from "../../assets/logo.png"

function Header(){
    return (
        <HeaderPrincipal>
            <img src={Logo} alt="" />
            <h1>ZapRecall</h1>
        </HeaderPrincipal>
    )
}

export default Header