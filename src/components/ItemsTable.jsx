import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";

export default function ItemsTable() {
    const { items } = useStock();

    return (
        <div>
            {/* Tabela padrão para telas grandes */}
            <table className="tabela">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Em Estoque</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity} unid.</td>
                            <td>{item.category}</td>
                            <td>
                                <Link to={`/items/${item.id}`} className="button is-primary is-small">
                                    Ver
                                </Link>
                                <Link to={`/items/${item.id}/update`} className="button is-small">
                                    Atualizar
                                </Link>
                                <DeleteButton itemId={item.id} itemName={item.name} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

             {/* Exibição responsiva em formato de Cards para telas pequenas */}
            <div className="cards-responsive">
                {items.map((item) => (
                    <div key={item.id} className="card">
                        <div className="card-header">
                            <h3>{item.name}</h3>
                            <p className="card-id">ID: {item.id}</p>
                        </div>
                        <div className="card-body">
                            <p><strong>Em Estoque:</strong> {item.quantity} unid.</p>
                            <p><strong>Categoria:</strong> {item.category}</p>
                        </div>
                        <div className="card-footer">
                            <Link to={`/items/${item.id}`} className="button is-primary is-small">Ver</Link>
                            <Link to={`/items/${item.id}/update`} className="button is-small">Atualizar</Link>
                            <DeleteButton itemId={item.id} itemName={item.name} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
