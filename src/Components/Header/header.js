import { useState } from "react"

export default function Header() {
    const [mobile, setIsMobile] = useState(false)
    return (
        <div>
            <img src="../assets/favicon.ico"></img>
            {mobile ?
                <div></div> :
                <nav>
                    <ul>

                        <li>projects</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </nav>

            }
        </div>
    )
}