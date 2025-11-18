import { Links, Meta, Outlet, Scripts } from "react-router";
import { Button } from "./components/ui/button";
import './app.css'

export default function App() {
    return (
        <html>
            <head>
                <link
                    rel="icon"
                    href="data:image/x-icon;base64,AA"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <h1>Hello world!</h1>
                <Button>Click me</Button>
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}
