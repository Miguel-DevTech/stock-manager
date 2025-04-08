import { Link, useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import DeleteButton from "../../components/DeleteButton"

export default function ShowItem() {
    const { getItem } = useStock()
    const { id } = useParams()

    const item = getItem(id)

    return (
        <div className="item">
        <h2>{item.name}</h2>
    
        <div className="item-actions">
        <Link to={`/items/${item.id}/update`} className="button is-small">
            Atualizar
        </Link>
        <DeleteButton itemId={item.id} itemName={item.name} />
        </div>
    
        <div className="item-meta">
        <span><strong>Categoria:</strong> {item.category}</span>
        <span><strong>Quantidade:</strong> {item.quantity}</span>
        <span><strong>Preço:</strong> R$ {item.price}</span>
        </div>

        <p className="item-description">{item.description}</p>

        <div className="item-dates">
        <p><strong>Cadastrado em:</strong> {item.createdAt.toDateString()}</p>
        <p><strong>Atualizado em:</strong> {item.updatedAt.toDateString()}</p>
        </div>
    </div>
    );
}