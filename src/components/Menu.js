export default function Menu({menu}) {
    return(
        <div className="section-center">
            {menu.map(menuItem => {
                const { id,title,img,price,desc } = menuItem
                return(
                        <article key={id} className="menu-item">
                            <img src={img} alt={title} />
                            <div className="item-info">
                                <div className="d-flex justify-content-between head-header">
                                    <h4>{title}</h4>
                                    <p className="price" style={{color:'#c59d5f'}}><b>${price}</b></p>
                                </div>
                                <p className="item-text mt-3 text-left">{desc}</p>
                            </div>
                        </article>
                )
            })}
        </div>
    )
}