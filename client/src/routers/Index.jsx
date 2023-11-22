import { createBrowserRouter } from 'react-router-dom';
import Game from '../views/Game';
import Home from '../views/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/game",
        element: <Game />
    }
])

export default router;