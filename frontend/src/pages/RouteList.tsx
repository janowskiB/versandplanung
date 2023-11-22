import useAPI from "../hooks/useAPI";

export default function RouteList() {
    const {routes} = useAPI();

    return (
        <div>
            <h1>Route List</h1>
            <ul>
                {routes.map(route => (
                    <li key={route.id}>{route.start} - {route.finish} = {route.distance}km</li>
                ))}
            </ul>
        </div>
    )
}